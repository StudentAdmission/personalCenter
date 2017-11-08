app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider
    //学生页面路由
        .when('/', {
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
        //其他情况路由
        .otherwise({
            redirectTo: '/'
        });
}]);