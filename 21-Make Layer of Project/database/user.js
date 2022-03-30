"use strict";
exports.__esModule = true;
exports.UserManage = void 0;
// var alert_1 = require("../common/alert");
// var uservalid_1 = require("../valid/uservalid");
var UserManage = /** @class */ (function () {
    function UserManage() {
        this.lsv = new Array();
    }
    UserManage.prototype.add = function (h) {
        if (new UserValid().valid(h)) {
            this.lsv.push(h);
            new Alert().message('Susseccfully register');
        }
        else {
            new Alert().message('Error validation.');
        }
    };
    UserManage.prototype.edit = function () {
        throw new Error("Method not implemented.");
    };
    UserManage.prototype.read = function () {
        return this.lsv;
    };
    return UserManage;
}());
exports.UserManage = UserManage;
