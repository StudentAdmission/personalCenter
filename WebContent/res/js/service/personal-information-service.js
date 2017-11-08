app.service('personalInfoService', [function () {
    var personalInfo;
    this.setPersonalInfo = function (person) {
        personalInfo = person;
    };
    this.getPersonalInfo = function () {
        return personalInfo;
    };
}]);