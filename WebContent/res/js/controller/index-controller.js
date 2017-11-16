app.controller('indexCtrl', ['$http', '$location', '$scope', 'validateService',
    function ($http, $location, $scope, validateService) {
        $scope.logout = function () {
            validateService.logout();
            toastr.success('注销成功，2s后返回主页');
            setTimeout(function () {
                window.location.href = '/studentAdmission';
            }, 2000);
        };
        if (validateService.getLoginSession()) {
            //登录后验证模块
            setInterval(function () {
                var session = validateService.getLoginSession() ? validateService.getLoginSession() : '';
                if (session) {
                    validateService.validateIdentity(session);
                }
            }, 30000);
            $http.post('/studentAdmission/getLogin.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
                $scope.loginInfo = {
                    loginNickname: response.data.data.loginNickname,
                    loginNum: response.data.data.loginNum,
                    loginPortrait: response.data.data.loginPortrait,
                    loginTag: response.data.data.loginTag,
                    loginEmail: response.data.data.loginEmail
                }
                $('.sa-avatar').attr('src', response.data.data.loginPortrait ? (AVATAR_PATH + response.data.data.loginPortrait) : 'res/img/avatar.jpg');
                if ($scope.loginInfo.loginTag === 0) {
                    $scope.identity = 'student';
                } else if ($scope.loginInfo.loginTag === 1) {
                    $scope.identity = 'master';
                } else if ($scope.loginInfo.loginTag === 2) {
                    $scope.identity = 'instructor';
                } else {
                    alert('请先登录');
                    window.location.href = '/studentAdmission';
                }

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
            });
        } else {
            alert('请先登录');
            window.location.href = '/studentAdmission';
        }
    }]);