app.controller('settingCtrl', ['$http', '$scope', 'validateService', 'Upload', function ($http, $scope, validateService, Upload) {

    $http.post('/studentAdmission/getLogin.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
        $scope.loginInfo = response.data.data;
        $('.personal-photo-img').attr('src', response.data.data.loginPortrait ? (AVATAR_PATH + response.data.data.loginPortrait) : 'res/img/avatar.jpg');

    })


    $scope.nicknameClicked = false;
    $scope.emailClicked = false;
    $scope.passwordClicked = false;

    $scope.loginInfoRevise = {
        loginNickname: '',
        loginEmail: '',
        loginPassword: '',
        loginPasswordCopy: '',
        loginPortrait: ''
    };

    $scope.avatarData = {
        avatarFile: null
    }

    var avatar = '';
    $scope.settingSubmit = function () {
        if ($scope.avatarData.avatarFile) {
            var url = '/studentAdmission/fileUpload.do';  //params是model传的参数，图片上传接口的url
            $scope.avatarData = {
                'login_num': validateService.getLoginSession(),
                'file_upload': $scope.avatarData.avatarFile,
                'file_url': '/sa-res/img/avatar'
            }
            Upload.upload({
                url: url,
                data: $scope.avatarData
            }).success(function (data) {
                console.log(data);
                $('.personal-photo-img').attr('src', AVATAR_PATH + data.message);
            })

            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            avatar = validateService.getLoginSession() + '_' + year + month + day + '.jpg';
        }
        $scope.loginInfoRevise.loginNickname = $scope.loginInfoRevise.loginNickname ? $scope.loginInfoRevise.loginNickname : $scope.loginInfo.loginNickname;
        $scope.loginInfoRevise.loginEmail = $scope.loginInfoRevise.loginEmail ? $scope.loginInfoRevise.loginEmail : $scope.loginInfo.loginEmail;
        if ($scope.loginInfoRevise.loginPassword || $scope.loginInfoRevise.loginPasswordCopy) {
            if ($scope.loginInfoRevise.loginPassword !== $scope.loginInfoRevise.loginPasswordCopy) {
                $scope.loginInfoRevise.loginPassword = '';
                $scope.loginInfoRevise.loginPasswordCopy = '';
            } else {
                $scope.loginInfoRevise.loginPassword = md5($scope.loginInfoRevise.loginPassword);
                $scope.loginInfoRevise.loginPasswordCopy = md5($scope.loginInfoRevise.loginPasswordCopy);
                $scope.loginInfoRevise.loginPwd = $scope.loginInfoRevise.loginPasswordCopy;
            }
        }
        $scope.loginInfoRevise.loginNum = validateService.getLoginSession();
        $scope.loginInfoRevise.loginPortrait = avatar;
        $http.post('/studentAdmission/revisePwd.do', $scope.loginInfoRevise).then(function (response) {
            if (response.data === 1) {
                toastr.remove();
                toastr.success('修改登录信息成功！');
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            } else {
                toastr.remove();
                toastr.error('修改登录信息失败');
            }
            $scope.loginInfoRevise = {
                loginNickname: '',
                loginEmail: '',
                loginPassword: '',
                loginPasswordCopy: '',
                loginPortrait: ''
            };
        });

    };
    $(function () {
    })
}]);