app.controller('informationCtrl', ['$http', '$scope', function ($http, $scope) {
    $scope.studentInfo = {
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
    $(function () {
        $('.certificate-photo-img').attr('src', 'res/img/' + $scope.studentInfo.stdIdPhone);
    });
}]);