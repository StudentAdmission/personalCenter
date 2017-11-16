app.service('validateService', ['$http', function ($http) {
    this.setLoginSession = function (session) {
        localStorage.saLogin = session;
    };
    this.getLoginSession = function () {
        return localStorage.saLogin;
    };
    this.logout = function () {
        this.setLoginSession('');
    };

    this.validateIdentity = function (num) {
        $http.post('/studentAdmission/login/gettime.do', {loginNum: num}).then(function (response) {
            var currentTime = new Date().getTime();
            if (currentTime >= response.data.data.loginTime) {
                alert('登录已失效，请重新登录');
                window.location.href = '/studentAdmission';
            }
        });
    }
}]);