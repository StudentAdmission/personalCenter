app.controller('informationCtrl', ['$http', '$scope', 'validateService', 'personalInfoService', function ($http, $scope, validateService, personalInfoService) {
    if (!$scope.studentInfo) {
        $http.post('/studentAdmission/getPersonalInfo.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
            var content = '';
            if (response.status !== 200) {
                content += '<div class="connect-error">网络异常，请检查网络连接</div>';
            } else {
                var personData = response.data;
                if (personData.status !== 1) {
                    content += '<div class="connect-error">数据库连接失败，请联系管理员</div>';
                } else {
                    personalInfoService.setPersonalInfo(personData.data);
                    $scope.studentInfo = personData.data;
                    $('.certificate-photo-img').attr('src', 'res/img/' + $scope.studentInfo.stdIdPhoto);
                }
            }
            if (content !== '') {
                $('.personal-information .information-detail').empty().append(content);
            }
        });
    }

    $(function () {

    });
}]);