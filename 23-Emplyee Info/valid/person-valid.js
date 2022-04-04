"use strict";
exports.__esModule = true;
exports.PersonValid = void 0;
var PersonValid = /** @class */ (function () {
    function PersonValid() {
    }
    PersonValid.prototype.validData = function (person) {
        return this.name(person.name) &&
            this.family(person.family) &&
            this.nationlCode(person.nationlCode) &&
            this.code(person.code) &&
            this.mobile(person.mobile);
    };
    PersonValid.prototype.name = function (na) {
        if (na.length >= 3)
            return true;
        else
            return false;
    };
    PersonValid.prototype.family = function (fa) {
        if (fa.length >= 4)
            return true;
        else
            return false;
    };
    PersonValid.prototype.nationlCode = function (naC) {
        if (naC.length == 10)
            return true;
        else
            return false;
    };
    PersonValid.prototype.code = function (co) {
        if (co.length == 4)
            return true;
        else
            return false;
    };
    PersonValid.prototype.mobile = function (na) {
        if (na.length == 11)
            return true;
        else
            return false;
    };
    return PersonValid;
}());
exports.PersonValid = PersonValid;
