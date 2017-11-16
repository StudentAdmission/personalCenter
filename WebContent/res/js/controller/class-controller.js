app.controller('classCtrl', ['$http', '$scope', 'validateService', function ($http, $scope, validateService) {
    if (!$scope.personalInfo) {
        $http.post('/studentAdmission/getPersonalInfo.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
            var content = '';
            if (response.status !== 200) {
                content += NETWORK_ERROR;
            } else {
                var personData = response.data;
                if (personData.status !== 1) {
                    content += SERVER_ERROR;
                } else {
                    $scope.personalInfo = personData.data;
                }
            }
            if (content !== '') {
                $('.class-main').empty().append(content);
            }
        });
    }
    $http.post('/studentAdmission/getClass.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
        var content = '';
        if (response.status !== 200) {
            content += NETWORK_ERROR;
        } else {
            var classData = response.data;
            if (classData.status !== 1) {
                content += SERVER_ERROR;
            } else {
                console.log(classData);
                $scope.classmate = classData.data.classmate;
                $scope.classmaster = classData.data.classmaster;
                $scope.instructor = classData.data.instructor;
            }
        }
        if (content !== '') {
            $('.class-main').empty().append(content);
        }
    })

}]);