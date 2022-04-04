import { Person } from "../view/person-model";

export class PersonValid{
    validData(person:Person):boolean{
        return this.name(person.name) && 
        this.family(person.family) && 
        this.nationlCode(person.nationlCode) &&
        this.code(person.code) &&
        this.mobile(person.mobile) 

    }
    private name(na:string):boolean{
        if(na.length >=3)
        return true
        else return false
    }
    private family(fa:string):boolean{
        if(fa.length >=4)
        return true
        else return false
    }
    private nationlCode(naC:string):boolean{
        if(naC.length ==10)
        return true
        else return false
    }
    private code(co:string):boolean{
        if(co.length ==4)
        return true
        else return false
    }
    private mobile(na:string):boolean{
        if(na.length ==11)
        return true
        else return false
    }

}