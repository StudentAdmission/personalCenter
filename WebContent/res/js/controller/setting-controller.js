app.controller('settingCtrl', ['$http', '$scope', 'personalInfoService', function ($http, $scope, personalInfoService) {
    $scope.studentInfo = personalInfoService.getPersonalInfo();

    $(function () {
        $('.personal-photo-img').attr('src', 'res/img/avatar.jpg');// + $scope.studentInfo.stdIdPhone);
    })
}]);