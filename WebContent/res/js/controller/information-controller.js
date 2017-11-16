app.controller('informationCtrl', ['$http', '$scope', 'validateService', function ($http, $scope, validateService) {
    $http.post('/studentAdmission/getPersonalInfo.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
        var content = '';
        if (response.status !== 200) {
            content += NETWORK_ERROR;
        } else {
            var personData = response.data;
            if (personData.status !== 1) {
                content += SERVER_ERROR;
            } else {
                $scope.studentInfo = personData.data;
                $('.certificate-photo-img').attr('src', $scope.studentInfo.stdIdPhoto ? (ID_PHOTO_PATH + $scope.studentInfo.stdIdPhoto) : 'res/img/certificate-photos.jpg');

            }
        }
        if (content !== '') {
            $('.personal-information .information-detail').empty().append(content);
        }
    });
}]);