abstract class Person{
    name: string;

    showName(names:string[]){
        names.forEach(name => {
            document.getElementById('name').innerText +=" " + name;
        })
    }

    abstract showSureName(sureNames:string[], id:number);
}

class Employ extends Person{
    showSureName(sureNames: string[], id: number) {
        sureNames.forEach(sureName => {
            if (id==10) document.getElementById('name').innerText +=" " + sureName;
        })
    }

}

class Teacher extends Person{
    showSureName(teachers: string[], id: number) {
        teachers.forEach(teacher => {
            if (id==100) document.getElementById('name').innerText +=" " + teacher;
        })
    }

}

//Static class
static class Config{
    static url: string ='190.192.68.10';
    name: string;
}


{
    // you can not create instance of Person
    // but you cane create instance of Teacher or Employ
    let teacher1: Teacher = new Teacher();

    let co1 = Config.url;
    let co2 = new Config(); // we access only to name
    
    
    

}

