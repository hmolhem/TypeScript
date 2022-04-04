"use strict";
exports.__esModule = true;
exports.PersonManage = void 0;
var PersonManage = /** @class */ (function () {
    function PersonManage() {
        this.lsv = new Array();
    }
    PersonManage.prototype.add = function (model) {
        if (this.lsv.length == 0) {
            model.id = 1;
        }
        else {
            var last = this.lsv[this.lsv.length - 1];
            model.id = last.id + 1;
        }
        this.lsv.push(model);
        this.update();
    };
    PersonManage.prototype.edit = function (model) {
        var index = this.lsv.findIndex(function (item) { return item.id == model.id; });
        if (index != -1) {
            this.lsv.splice(index, 1, model);
        }
        this.update();
    };
    PersonManage.prototype.addAll = function () {
        var _a;
        (_a = this.lsv).push.apply(_a, this.lsv);
        this.update();
    };
    PersonManage.prototype.update = function () {
        if (this.lsv.length > 0) {
            var tr_1 = "";
            this.lsv.forEach(function (item) {
                tr_1 += "<tr><td>" + item.name + "</td>";
                tr_1 += "<td>" + item.family + "</td>";
                tr_1 += "<td>" + item.nationlCode + "</td>";
                tr_1 += "<td>" + item.code + "</td>";
                tr_1 += "<td>" + item.mobile + "</td>";
                tr_1 += "<td><button onclick=" + "person(" + item.id + ") class='btn  py-0 px-1 btn-warning' data-bs-target='#personModal' data-bs-toggle='modal'>" + "ویرایش" + "</button>"
                    + "<button onclick=" + "info(" + item.id + ") class='btn  py-0 px-1 mx-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "نمایش" + "</button>"
                    + "<button onclick=" + "deletePerson(" + item.id + ") class='btn  py-0 px-1 btn-danger'  >" + "حذف" + "</button>"
                    + "</td></tr>";
            });
            document.getElementById("tbody").innerHTML = tr_1;
        }
        else {
            document.getElementById("tbody").innerHTML = "";
        }
    };
    PersonManage.prototype.findPerson = function (id) {
        return this.lsv.find(function (item) { return item.id == id; });
    };
    PersonManage.prototype.deletePerson = function (id) {
        var index = this.lsv.findIndex(function (item) { return item.id == id; });
        this.lsv.splice(index, 1);
        this.update();
    };
    return PersonManage;
}());
exports.PersonManage = PersonManage;
