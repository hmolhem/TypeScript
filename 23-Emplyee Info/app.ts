import { PersonManage } from "./dal/Person"
import { PersonValid } from "./valid/person-valid";
import { Person } from "./view/person-model";

{
    let perM: PersonManage = new PersonManage();
    let valid: PersonValid = new PersonValid();
    let model: Person = new Person();
    let update = () => {
        perM.update();
    }
    let addAll = () => {
        perM.addAll();
    }
    let status: any;
    let person = (state: any) => {
        status = state;
        if (state == "add") {
            document.getElementById("personLabel").innerText = "افزودن شخص";
        }
        else {
            let person = perM.findPerson(state);
            document.getElementById("personLabel").innerText = `ویرایش  ${person.name}`;
            document.getElementById("name")['value'] = person.name;
            document.getElementById("family")['value'] = person.family;
            document.getElementById("nationalCode")['value'] = person.nationlCode;
            document.getElementById("code")['value'] = person.code;
            document.getElementById("mobile")['value'] = person.mobile;
        }
    }
    let savePerson = () => {
        let na = document.getElementById("name")['value'];
        let fa = document.getElementById("family")['value'];
        let naC = document.getElementById("nationalCode")['value'];
        let co = document.getElementById("code")['value'];
        let mo = document.getElementById("mobile")['value'];
        if (na != undefined && fa != undefined
            && naC != undefined && co != undefined
            && mo != undefined) {
            model = new Person();
            model.name = na;
            model.family = fa;
            model.code = co;
            model.nationlCode = naC;
            model.mobile = mo;
            if (valid.validData(model)) {
                if (status == "add") {
                    perM.add(model);
                }
                else {
                    model.id = status;
                    perM.edit(model);
                }
            }
            else {
                alert("خطای اعتبار سنجی");
            }
        }
        else {
            alert("پارامتر ها را مقدار دهی کنید");
        }
    }

    let info = (id) => {
        let person = perM.findPerson(id);
        document.getElementById("personLblInfo").innerText = `نمایش اطلاعات  ${person.name}`;
        document.getElementById("infoName").innerText = person.name;
        document.getElementById("infoFamily").innerText = person.family;
        document.getElementById("infoNatonal").innerText = person.nationlCode;
        document.getElementById("infoCode").innerText = person.code;
        document.getElementById("infoMobile").innerText = person.mobile;
        document.getElementById("infoKey").innerText = person.id.toString();
    }

    let deletePerson = (id) => {
        perM.deletePerson(id);
    }



}