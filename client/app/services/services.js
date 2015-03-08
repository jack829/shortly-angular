angular.module('shortly.services', [])

.factory('Links', function ($http) {

  var linksGetter = function() {
    console.log('linksGetter')
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    // .success(function(resp){
    //   console.log('FUCK Fuck - ', resp.data)
    //   return resp.data.base_url + '/' + resp.data.code;
    // });
  };

  var linkStumper = function(link) {
    console.log("linkStumper")
    return $http({
      method: 'POST',
      url: '/api/links',
      // he doesn't use an object
      // data: { url: longUrl }
      data: link
    })
    // .then(function(resp){
    //   // console.log("RES from mock    ", resp.data)
    //   return resp.data;
    // })
  }

  return {
    linksGetter: linksGetter,
    linkStumper: linkStumper
  };
  
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
