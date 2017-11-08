app.controller('indexCtrl', ['$http', '$scope', 'validateService', function ($http, $scope, validateService) {
    var permission = '0'; //validateService.validateIdentity();
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
            function goTop() {
                $("html,body").animate({scrollTop: 0}, 500);
            }

            $('#asideMenu').find('ul').find('li').eq(0).addClass('active');
            $('#asideMenu ul>li').each(function () {
                $(this).on('click', function () {
                    $(this).siblings('li').removeClass('active');
                    $(this).addClass('active');
                });
            });
            $('.sa-new-notice').showDetail();
            var bodyHeight = 0;
            $(window).on('scroll', function () {
                if (bodyHeight === 0) {
                    bodyHeight = $('body').height();
                    $('#asideMenu').css('height', bodyHeight - 90 + 'px');
                }
                var scrollTop = $(this).scrollTop();
                if (scrollTop > 0) {
                    $('.go-top').fadeIn();
                }else{
                    $('.go-top').fadeOut();
                }
            });
            $('.go-top').on('click',function () {
                goTop();
            });
        })
    }
}]);