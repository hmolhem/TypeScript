"use strict";
exports.__esModule = true;
// var Users_1 = require("./DataAccessLayer/Users");
// var info_valid_1 = require("./valid/info-valid");
// var user_model_1 = require("./view/user-model");
{
    var save = function () {
        var name = document.getElementById('name')['value'];
        var password = document.getElementById('password')['value'];
        if (new ValidUser().validUser(name, password)) {
            var model = new UserModel();
            model.name = name;
            model.password = password;
            var user = new Users().findUser(model);
            if (user != undefined) {
                alert("شما با موفقیت لاگین کردید.");
            }
            else {
                alert("کاربر یافت نشد.");
            }
        }
        else {
            alert("خطای اعتبار سنجی");
        }
    };
}
