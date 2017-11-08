app.controller('classCtrl', ['$http', '$scope','personalInfoService', function ($http, $scope,personalInfoService) {
    $scope.personalInfo=personalInfoService.getPersonalInfo();
}]);