app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider
    //学生页面路由
        .when('/', {
            templateUrl: 'information.html',
            controller: 'informationCtrl'
        })
        //其他情况路由
        .otherwise({
            redirectTo: '/'
        });
}]);