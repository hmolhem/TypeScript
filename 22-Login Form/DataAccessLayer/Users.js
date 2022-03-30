"use strict";
exports.__esModule = true;
exports.Users = void 0;
var Users = /** @class */ (function () {
    function Users() {
        this.lsvUsers = [
            { name: "Hossein", password: "molhem" },
            { name: "Maryam", password: "sanjari" }
        ];
    }
    Users.prototype.findUser = function (user) {
        return this.lsvUsers.find(function (item) {
            return item.name == user.name && item.password == user.password;
        });
    };
    return Users;
}());
exports.Users = Users;
