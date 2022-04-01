"use strict";
exports.__esModule = true;
exports.PersonManage = void 0;
var PersonManage = /** @class */ (function () {
    function PersonManage() {
        // lsv: Person[] = new Array<Person>();
        this.lsv = [
            { name: "حسین", sureName: "ملهم", nationalCode: "۰۰۵۶۲۱۶۶۷۱", code: "۱", mobile: "۰۹۱۲۳۵۰۷۵۱۵", id: 1 }
        ];
    }
    PersonManage.prototype.update = function () {
        if (this.lsv.length > 0) {
            var tr_1 = "";
            this.lsv.forEach(function (item) {
                tr_1 += "<td>" + item.name + "</td>";
                tr_1 += "<td>" + item.sureName + "</td>";
                tr_1 += "<td>" + item.nationalCode + "</td>";
                tr_1 += "<td>" + item.code + "</td>";
                tr_1 += "<td>" + item.mobile + "</td>";
                tr_1 += "<td><button onclick="
                    + "person("
                    + item.id
                    + ") class='btn  py-0 px-1 btn-warning' data-bs-target='#personModal' data-bs-toggle='modal'>"
                    + "ویرایش"
                    + "</button>"
                    + "<button onclick="
                    + "info("
                    + item.id
                    + ") class='btn  py-0 px-1 mx-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>"
                    + "نمایش"
                    + "</button>"
                    + "<button onclick="
                    + "deletePerson("
                    + item.id
                    + ") class='btn  py-0 px-1 btn-danger'  >"
                    + "حذف"
                    + "</button>"
                    + "</td></tr>";
            });
            document.getElementById('tbody').innerHTML = tr_1;
        }
        else {
            document.getElementById('tbody').innerHTML = "";
        }
    };
    PersonManage.prototype.add = function () {
        throw new Error("Method not implemented.");
    };
    return PersonManage;
}());
exports.PersonManage = PersonManage;
