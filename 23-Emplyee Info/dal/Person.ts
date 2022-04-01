import { IPerson } from "../action/IPerson";
import { Person } from "../view/person-model";

export class PersonManage implements IPerson{
    // lsv: Person[] = new Array<Person>();
    lsv: Person[] =[
        {name: "حسین", sureName: "ملهم", nationalCode: "۰۰۵۶۲۱۶۶۷۱", code: "۱", mobile: "۰۹۱۲۳۵۰۷۵۱۵", id: 1}
    ];

    update() {
        if (this.lsv.length > 0){
            let tr: string = "";
            this.lsv.forEach(item => {
                tr += "<td>" + item.name + "</td>";
                tr += "<td>" + item.sureName + "</td>";
                tr += "<td>" + item.nationalCode + "</td>";
                tr += "<td>" + item.code + "</td>";
                tr += "<td>" + item.mobile + "</td>";
                tr += "<td><button onclick="
				+ "person(" 
				+ item.id 
				+ ") class='btn  py-0 px-1 btn-warning' data-bs-target='#personModal' data-bs-toggle='modal'>" 
				+ "ویرایش" 
				+ "</button>"
                + "<button onclick=" 
				+ "info(" 
				+ item.id 
				+") class='btn  py-0 px-1 mx-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>" 
				+ "نمایش" 
				+ "</button>"
                + "<button onclick=" 
				+ "deletePerson(" 
				+ item.id 
				+ ") class='btn  py-0 px-1 btn-danger'  >" 
				+ "حذف" 
				+ "</button>"
                + "</td></tr>";
            })
            document.getElementById('tbody').innerHTML = tr;
        }else{
            document.getElementById('tbody').innerHTML ="";
        }
    }
    add() {
        throw new Error("Method not implemented.");
    }

}