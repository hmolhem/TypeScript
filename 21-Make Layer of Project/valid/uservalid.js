"use strict";
exports.__esModule = true;
exports.UserValid = void 0;
var UserValid = /** @class */ (function () {
    function UserValid() {
    }
    UserValid.prototype.nameValid = function (name) {
        if (name != undefined && name.length >= 3)
            return true;
        else
            return false;
    };
    UserValid.prototype.sureNameValid = function (sureName) {
        if (sureName != undefined && sureName.length >= 3)
            return true;
        else
            return false;
    };
    UserValid.prototype.valid = function (user) {
        return this.nameValid(user.name) && this.sureNameValid(user.sureName);
    };
    return UserValid;
}());
exports.UserValid = UserValid;
