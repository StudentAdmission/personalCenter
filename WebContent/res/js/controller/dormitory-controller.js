app.controller('dormitoryCtrl', ['$http', '$scope', 'personalInfoService', function ($http, $scope, personalInfoService) {
    $scope.personInfo = personalInfoService.getPersonalInfo();
}]);