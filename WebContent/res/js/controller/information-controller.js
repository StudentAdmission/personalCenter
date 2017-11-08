app.controller('informationCtrl', ['$http', '$scope', 'personalInfoService', function ($http, $scope, personalInfoService) {
    $scope.studentInfo=personalInfoService.getPersonalInfo();
    $(function () {
        $('.certificate-photo-img').attr('src', 'res/img/' + $scope.studentInfo.stdIdPhone);
    });
}]);