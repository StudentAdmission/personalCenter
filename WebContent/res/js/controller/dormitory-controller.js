app.controller('dormitoryCtrl', ['$http', '$scope', 'validateService', function ($http, $scope, validateService) {
    if (!$scope.personInfo) {
        $http.post('/studentAdmission/getPersonalInfo.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
            var content = '';
            if (response.status !== 200) {
                content += NETWORK_ERROR;
            } else {
                var personData = response.data;
                if (personData.status !== 1) {
                    content += SERVER_ERROR;
                } else {
                    $scope.personInfo = personData.data;
                }
            }
            if (content !== '') {
                $('.dormitory-main').empty().append(content);
            }
        });
    }
    $http.post('/studentAdmission/getDorm.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
        $scope.dormmate=response.data.data;
    })

}]);