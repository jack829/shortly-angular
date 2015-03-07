angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {
    links: []
  };
  
  $scope.getLinks = function(){
    Links.linksGetter().success(function(data){
      console.log('data - ',data[0].code)
      $scope.data.links = data;
    })
  }
  $scope.getLinks();
  
});
