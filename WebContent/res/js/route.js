app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'main.html'
        })
        //学生页面路由
        .when('/personalInfo', {
            templateUrl: 'information.html',
            controller: 'informationCtrl'
        })
        //班级信息页面路由
        .when('/class', {
            templateUrl: 'class.html',
            controller: 'classCtrl'
        })
        //宿舍信息页面路由
        .when('/dormitory', {
            templateUrl: 'dormitory.html',
            controller: 'dormitoryCtrl'
        })
        //消息盒子页面路由
        .when('/noticeBox', {
            templateUrl: 'notice-box.html',
            controller: 'noticeBoxCtrl'
        })
        //个人设置页面路由
        .when('/setting', {
            templateUrl: 'setting.html',
            controller: 'settingCtrl'
        })
        //通知管理页面路由
        .when('/notice', {
            templateUrl: 'notice.html',
            controller: 'noticeCtrl'
        })
        //发布问卷页面路由
        .when('survey', {
            templateUrl: 'survey.html',
            controller: 'noticeCtrl'
        })
        //其他情况路由
        .otherwise({
            redirectTo: '/'
        });
}]);