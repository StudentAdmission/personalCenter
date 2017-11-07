app.controller('indexCtrl', ['$http', '$scope', 'validateService', function ($http, $scope, validateService) {
    var permission = validateService.validateIdentity();
    if (permission === -1) {
        alert('请先登录');
        window.location.href = '/studentAdmission';
    } else {
        if (permission === '0') {
            $scope.identity = 'student';
        } else if (permission === '1') {
            $scope.identity = 'master';
        } else if (permission === '2') {
            $scope.identity = 'instructor';
        }
        $(function () {
            $('#asideMenu').find('ul').find('li').eq(0).addClass('active');
            $('#asideMenu ul>li').each(function () {
               $(this).click(function () {
                   $(this).siblings('li').removeClass('active');
                   $(this).addClass('active');
               })
            });
            $('.sa-new-notice').showDetail();
            $('#saHeader').smint({
                'marginTop': 0,
                'top': 0,
                'logo': 'show',
                'width': '100%'
            });
            $('#asideMenu').smint({
                'marginTop': 90,
                'top': 90,
                'width': $('#asideMenu').width()
            })
        })
    }
}]);