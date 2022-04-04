import { IPerson } from "../action/IPerson";
import { Person } from "../view/person-model";

export class PersonManage implements IPerson {


    lsv: Person[] = new Array<Person>();
    add(model: any) {
        if (this.lsv.length == 0) {
            model.id = 1;
        }
        else {
            let last = this.lsv[this.lsv.length - 1];
            model.id = last.id + 1;
        }
        this.lsv.push(model);
        this.update();
    }
    edit(model: any) {
        let index = this.lsv.findIndex(item => item.id == model.id)
        if (index != -1) {
            this.lsv.splice(index, 1, model)
        }
        this.update();
    }
    addAll() {
        this.lsv.push(...this.lsv);
        this.update();
    }
    update() {
        if (this.lsv.length > 0) {
            let tr: string = "";

            this.lsv.forEach(item => {
                tr += "<tr><td>" + item.name + "</td>";
                tr += "<td>" + item.family + "</td>";
                tr += "<td>" + item.nationlCode + "</td>";
                tr += "<td>" + item.code + "</td>";
                tr += "<td>" + item.mobile + "</td>";
                tr += "<td><button onclick=" + "person(" + item.id + ") class='btn  py-0 px-1 btn-warning' data-bs-target='#personModal' data-bs-toggle='modal'>" + "ویرایش" + "</button>"
                    + "<button onclick=" + "info(" + item.id + ") class='btn  py-0 px-1 mx-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "نمایش" + "</button>"
                    + "<button onclick=" + "deletePerson(" + item.id + ") class='btn  py-0 px-1 btn-danger'  >" + "حذف" + "</button>"
                    + "</td></tr>";
            })
            document.getElementById("tbody").innerHTML = tr;

        }
        else {
            document.getElementById("tbody").innerHTML = "";
        }
    }
    findPerson(id: number): Person {
        return this.lsv.find(item => item.id == id);
    }
    deletePerson(id: number) {
        let index = this.lsv.findIndex(item => item.id == id);
        this.lsv.splice(index, 1);
        this.update();
    }

}

