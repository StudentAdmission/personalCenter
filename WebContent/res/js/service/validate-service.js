app.service('validateService', ['$http', function ($http) {
    this.setLoginSession = function (session) {
        localStorage.saLogin = session;
    };
    this.setLoginSessionTag = function (tag) {
        localStorage.saTag = tag;
    };
    this.getLoginSessionTag = function () {
        return localStorage.saTag;
    };
    this.getLoginSession = function () {
        return localStorage.saLogin;
    };

    this.validateIdentity = function () {
        var num = this.getLoginSession();
        var permission = this.getLoginSessionTag();
        if (num === '' || permission === '') {
            alert('请先登录');
            window.location.href = '/studentAdmission';
        }
        $http.post('/studentAdmission/login/gettime.do', {loginNum: num}).then(function (response) {
            var currentTime = new Date().getTime();
            if (currentTime >= response.data.data.loginTime) {
                alert('登录已失效，请重新登录');
                window.location.href = '/studentAdmission';
                permission = -1;
            }
        });
        return permission;
    };
    this.logout = function () {
        this.setLoginSession('');
        this.setLoginSessionTag('');
    }
}]);