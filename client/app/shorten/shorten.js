angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  console.log('location url - ', $location.url())
  $scope.link = {};
  $scope.addLink = function(){

    Links.linkStumper($scope.link).then(function(res){
      // console.log('res -', $location.path(res.code))
      // $scope.link.base_url = $location.url(res.code).absUrl();
      // console.log('res2 -', $location.path())
    })
  }
});
