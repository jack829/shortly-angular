angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {
    links: []
  };
  
  $scope.getLinks = function(){
    Links.linksGetter().success(function(data){
      $scope.data.links = data;
    })
  }
  $scope.getLinks();
  
});
