app.controller('settingCtrl', ['$http', '$scope', 'validateService', 'personalInfoService', function ($http, $scope, validateService, personalInfoService) {
    $scope.studentInfo = personalInfoService.getPersonalInfo();
    $scope.loginInfo = validateService.getLoginInfo();
    $scope.nicknameClicked = false;
    $scope.emailClicked = false;
    $scope.passwordClicked = false;
    $(function () {
        $('.personal-photo-img').attr('src', 'res/img/avatar.jpg');// + $scope.studentInfo.stdIdPhone);
    })
}]);