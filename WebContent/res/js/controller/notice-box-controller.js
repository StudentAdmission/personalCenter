app.controller('noticeBoxCtrl', ['$http', '$scope', 'personalInfoService', function ($http, $scope, personalInfoService) {

    $(function () {
        $('.notice-box-item').on('click', function () {
            $(this).removeClass('unread');
            $(this).find('.notice-condition').toggleClass('opened');
            $(this).find('.notice-detail').slideToggle();
        })
    })
}]);