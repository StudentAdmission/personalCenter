app.controller('indexCtrl', ['$http', '$location', '$scope', 'validateService', 'personalInfoService',
    function ($http, $location, $scope, validateService, personalInfoService) {
        $scope.logout = function () {
            validateService.logout();
            toastr.success('注销成功，2s后返回主页');
            setTimeout(function () {
                window.location.href = '/studentAdmission';
            }, 2000);
        };
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

            $scope.loginInfo = {
                loginNickname: validateService.getLoginSessionNickname(),
                loginNum: validateService.getLoginSession(),
                loginPortrait: validateService.getLoginSessionPortrait(),
                loginTag: validateService.getLoginSessionTag()
            };
            validateService.setLoginInfo($scope.loginInfo);

            $('.sa-avatar').attr('src', 'res/img/' + $scope.loginInfo.loginPortrait);

            $(function () {
                function goTop() {
                    $("html,body").animate({scrollTop: 0}, 500);
                }

                var currentLocation = $location.$$url;
                currentLocation = currentLocation.substr(1, currentLocation.length);
                $('#asideMenu ul>li').each(function () {
                    if ($(this).find('a').attr('href') === currentLocation) {
                        $(this).addClass('active');
                    }
                    $(this).on('click', function () {
                        $(this).siblings('li').removeClass('active');
                        $(this).addClass('active');
                    });
                });
                $('.sa-new-notice').showDetail();
                $(window).on('scroll', function () {
                    var bodyHeight = $('.sa-content').height();
                    var windowHeight = $(window).height();
                    if (bodyHeight !== $('#asideMenu').height()) {
                        $('#asideMenu').height((bodyHeight > windowHeight ? bodyHeight : windowHeight) + 100 + 'px');
                    }
                    var scrollTop = $(this).scrollTop();
                    if (scrollTop > 0) {
                        $('.go-top').fadeIn();
                    } else {
                        $('.go-top').fadeOut();
                    }
                });
                $('.go-top').on('click', function () {
                    goTop();
                });
            })
        }
    }]);