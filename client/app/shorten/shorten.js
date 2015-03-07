angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {balls: true};
  $scope.addLink = function(longUrl){
    Links.linkStumper(longUrl).then(function(res){
      console.log('res -', res)
      $scope.link.url = res;
    })
  }
});
