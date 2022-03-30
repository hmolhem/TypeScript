"use strict";
exports.__esModule = true;
// var user_1 = require("./database/user");
// var human_1 = require("./views/human");
{
    var h = new Human();
    h.name = "Hossein";
    h.sureName = "Molhem";
    var u = new UserManage();
    u.add(h);
    u.read().forEach(function (item) {
        document.getElementById("name").innerText += " " + item.name;
    });
}
