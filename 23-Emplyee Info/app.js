"use strict";
exports.__esModule = true;
// var Person_1 = require("./dal/Person");
// var person_valid_1 = require("./valid/person-valid");
// var person_model_1 = require("./view/person-model");
{
    var perM_1 = new PersonManage();
    var valid_1 = new PersonValid();
    var model_1 = new Person();
    var update = function () {
        perM_1.update();
    };
    var addAll = function () {
        perM_1.addAll();
    };
    var status_1;
    var person = function (state) {
        status_1 = state;
        if (state == "add") {
            document.getElementById("personLabel").innerText = "افزودن شخص";
        }
        else {
            var person_1 = perM_1.findPerson(state);
            document.getElementById("personLabel").innerText = "\u0648\u06CC\u0631\u0627\u06CC\u0634  " + person_1.name;
            document.getElementById("name")['value'] = person_1.name;
            document.getElementById("family")['value'] = person_1.family;
            document.getElementById("nationalCode")['value'] = person_1.nationlCode;
            document.getElementById("code")['value'] = person_1.code;
            document.getElementById("mobile")['value'] = person_1.mobile;
        }
    };
    var savePerson = function () {
        var na = document.getElementById("name")['value'];
        var fa = document.getElementById("family")['value'];
        var naC = document.getElementById("nationalCode")['value'];
        var co = document.getElementById("code")['value'];
        var mo = document.getElementById("mobile")['value'];
        if (na != undefined && fa != undefined
            && naC != undefined && co != undefined
            && mo != undefined) {
            model_1 = new Person();
            model_1.name = na;
            model_1.family = fa;
            model_1.code = co;
            model_1.nationlCode = naC;
            model_1.mobile = mo;
            if (valid_1.validData(model_1)) {
                if (status_1 == "add") {
                    perM_1.add(model_1);
                }
                else {
                    model_1.id = status_1;
                    perM_1.edit(model_1);
                }
            }
            else {
                alert("خطای اعتبار سنجی");
            }
        }
        else {
            alert("پارامتر ها را مقدار دهی کنید");
        }
    };
    var info = function (id) {
        var person = perM_1.findPerson(id);
        document.getElementById("personLblInfo").innerText = "\u0646\u0645\u0627\u06CC\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A  " + person.name;
        document.getElementById("infoName").innerText = person.name;
        document.getElementById("infoFamily").innerText = person.family;
        document.getElementById("infoNatonal").innerText = person.nationlCode;
        document.getElementById("infoCode").innerText = person.code;
        document.getElementById("infoMobile").innerText = person.mobile;
        document.getElementById("infoKey").innerText = person.id.toString();
    };
    var deletePerson = function (id) {
        perM_1.deletePerson(id);
    };
}
