

var myapp = angular.module('app', []);

myapp.controller('homecontroller', function ($scope,$http) {

   $scope.myfunction=  function () {

       $http({
           method: 'GET',
           url : "https://data.kcmo.org/resource/cyqf-nban.json?$limit=1000000"

       }).then(function (response) {

               $scope.mydata = response.data;
               console.log($scope.mydata);
               $scope.mydata1 = $scope.mydata.length

       });

   }



});