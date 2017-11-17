app.controller('noticeCtrl', ['$http', '$scope', 'validateService', function ($http, $scope, validateService) {
    $scope.publishClicked = true;
    $scope.feedbackClicked = false;
    $scope.noticePublish = {
        noticeTitle: '',
        noticeContent: '',
        noticeAnnouncerNum: validateService.getLoginSession()
    }
    $scope.changeView = function (option) {
        switch (option) {
            case 'publish':
                if (!$scope.publishClicked) {
                    $scope.publishClicked = true;
                    $scope.feedbackClicked = false;
                }
                break;
            case 'feedback':
                if (!$scope.feedbackClicked) {
                    $scope.publishClicked = false;
                    $scope.feedbackClicked = true;
                }
                break;
            case 'noticeItem':

        }
    };
    $scope.noticeSubmit = function () {
        if (!$scope.noticePublish.noticeTitle) {
            $('#publish-title').addClass('message-error');
            toastr.remove();
            toastr.error('请输入通知标题');
        } else if (!$scope.noticePublish.noticeContent) {
            $('#publish-content').addClass('message-error');
            $('#publish-title').removeClass('message-error');
            toastr.remove();
            toastr.error('请输入通知内容');
        } else {
            $('#publish-title').removeClass('message-error');
            $('#publish-content').removeClass('message-error');
            $http.post('/studentAdmission/setNotice.do', $scope.noticePublish).then(function (response) {
                if(response.data.status===1){
                    toastr.remove();
                    toastr.success('通知发布成功');
                    $scope.noticePublish = {
                        noticeTitle: '',
                        noticeContent: '',
                        noticeAnnouncerNum: validateService.getLoginSession()
                    }
                }else{
                    toastr.remove();
                    toastr.success('通知发布失败');
                }

            })
        }
    }
    $scope.getFeedback = function () {
        $http.post('/studentAdmission/getAllNoticeFeedback.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
            $scope.noticeFeedback = response.data.data;
            $.each(response.data.data, function (index, item) {
                $scope.noticeFeedback[index].noticeFeedbackReadList = [];
                $.each(item.noticeReadList, function (i, it) {
                    $http.post('/studentAdmission/getPersonalInfo.do', "'" + it + "'").then(function (data) {
                        $scope.noticeFeedback[index].noticeFeedbackReadList.push({
                            stdName: data.data.data.stdName,
                            stdNum: data.data.data.stdNum,
                            stdClass: data.data.data.stdClassNum
                        });
                    })
                });
                $.each(item.noticeUnReadList, function (i, it) {
                    $scope.noticeFeedback[index].noticeFeedbackUnReadList = [];
                    $http.post('/studentAdmission/getPersonalInfo.do', "'" + it + "'").then(function (data) {
                        $scope.noticeFeedback[index].noticeFeedbackUnReadList.push({
                            stdName: data.data.data.stdName,
                            stdNum: data.data.data.stdNum,
                            stdClass: data.data.data.stdClassNum
                        });
                    })
                });
            })
        })
    };

    $scope.toggleNoticeFeedback = function (id) {
        var self = '.' + id;
        $(self).removeClass('unread');
        $(self).find('.notice-condition').toggleClass('opened');
        $(self).find('.notice-detail').slideToggle();
    }
    $('#publish-title').on({
        'focus': function () {
            $(this).removeClass('message-error');
        },
        'blur': function () {
            if (!$scope.noticePublish.noticeTitle) {
                $(this).addClass('message-error');
                toastr.remove();
                toastr.error('请输入通知标题');
            }
        }
    });
    $('#publish-content').on({
        'focus': function () {
            $(this).removeClass('message-error');
        },
        'blur': function () {
            if (!$scope.noticePublish.noticeTitle) {
                $(this).addClass('message-error');
                toastr.remove();
                toastr.error('请输入通知标题');
            }
        }
    })
    $('.notice-main .notice-item').on('click', function () {
        $(this).removeClass('unread');
        $(this).find('.notice-condition').toggleClass('opened');
        $(this).find('.notice-detail').slideToggle();
    })
}]);