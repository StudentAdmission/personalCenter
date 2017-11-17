app.controller('noticeBoxCtrl', ['$http', '$scope', 'validateService', function ($http, $scope, validateService) {

    $http.post('/studentAdmission/getAllNotice.do', "'" + validateService.getLoginSession() + "'").then(function (response) {
        var content = '';
        if (response.status !== 200) {
            content += NETWORK_ERROR;
        } else {
            var noticeBoxData = response.data;
            if (noticeBoxData.status !== 1) {
                content += SERVER_ERROR;
            } else {
                $scope.noticeBox = noticeBoxData.data;
            }
        }
        if (content !== '') {
            $('.notice-box-main').empty().append(content);
        }
        $scope.toggleNotice = function (id) {
            var self = '.' + id;
            $(self).removeClass('unread');
            $(self).find('.notice-condition').toggleClass('opened');
            $(self).find('.notice-detail').slideToggle();
        }
    });
    $scope.setReadTag = function (id) {
        $scope.readTag = {
            smbStudentNum: validateService.getLoginSession(),
            smbNoticeId: id
        }
        $http.post('/studentAdmission/updateReadTag.do',$scope.readTag).then(function (response) {
            console.log(response);
        });
        $http.post('/studentAdmission/hasUnread.do', "'" + validateService.getLoginSession() + "'")
            .then(function (response) {
                $scope.hasUnreadNotice = response.data.status === 1;
            });
    }
}]);