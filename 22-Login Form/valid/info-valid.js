"use strict";
/** @format */
exports.__esModule = true;
exports.ValidUser = void 0;
var ValidUser = /** @class */ (function () {
    function ValidUser() {
    }
    ValidUser.prototype.name = function (name) {
        if (name != undefined && name.length >= 3)
            return true;
        else
            return false;
    };
    ValidUser.prototype.password = function (password) {
        if (password != undefined && password.length >= 5)
            return true;
        else
            return false;
    };
    ValidUser.prototype.validUser = function (name, password) {
        return this.name(name) && this.password(password);
    };
    return ValidUser;
}());
exports.ValidUser = ValidUser;
