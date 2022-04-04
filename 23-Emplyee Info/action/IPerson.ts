import { Person } from "../view/person-model";

export interface IPerson{
    update();
    add(model);
    addAll();
    findPerson(id:number):Person;
    edit(model);
    deletePerson(id:number);
}