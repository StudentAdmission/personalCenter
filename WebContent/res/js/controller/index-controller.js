app.controller('indexCtrl', ['$http', '$location', '$scope', 'validateService', 'personalInfoService',
    function ($http, $location, $scope, validateService, personalInfoService) {
        $scope.personInfo = {
            stdName: "张三",
            stdNum: '2014010215',
            stdGender: '女',
            stdMajor: "软件工程",
            stdClasssNum: '软工1402',
            stdDormNum: '1-2-311',
            stdCollege: '计算机学院',
            stdTele: '15236255124',
            stdNation: '汉族',
            stdAddress: '北京市朝阳区北四环中路35号',
            stdPostCode: '100101',
            stdIdentification: '125455466325999845',
            stdEmail: '154856235@qq.com',
            stdGrade: '2014',
            stdNativePlace: '北京',
            stdFatherName: '李四',
            stdFatherTele: '145236552365',
            stdMotherName: '王五',
            stdMotherTele: '14522251201',
            stdPoliticalStatus: '团员',
            stdBirth: '2017-10-02',
            stdQQ: '125485695',
            stdWechat: '15248877542',
            stdAccountMigration: 'true',
            stdIdPhone: 'certificate-photos.jpg'
        };
        $scope.loginInfo = {
            loginNickname: '张三',
            loginEmail: '123456@163.com'
        };
        personalInfoService.setPersonalInfo($scope.personInfo);
        validateService.setLoginInfo($scope.loginInfo);
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
            $(function () {
                function goTop() {
                    $("html,body").animate({scrollTop: 0}, 500);
                }

                var currentLocation = $location.$$url;
                currentLocation = currentLocation.substr(1, currentLocation.length);
                $('#asideMenu ul>li').each(function () {
                    if (currentLocation === '') {
                        $('#asideMenu').find('ul').find('li').eq(0).addClass('active');
                    } else if ($(this).find('a').attr('href') === currentLocation) {
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