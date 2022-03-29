// D: Dependency Inversion Principle

class Car {
  name: string;
  color: string;
  print(): string {
    return `${this.name + " " + this.color} `;
  }
}

class User {
  name: string;
  sureName: string;
  print(): string {
    return `${this.name + " " + this.sureName} `;
  }
}

interface IManage {
  info();
}

class Manage implements IManage {
    obj: IManage;
    constructor(object:IManage){
        this.obj = object;
    }
  info(): string {
    return this.obj.print();
  }
}

{
    let c:Car = new Car();
    c.name = 'PRID';
    c.color = 'White';
    let m:Manage = new Manage(c);
    document.getElementById('car').innerText = m.info();
    
    let u:User = new User();
    u.name = 'Hossein';
    u.sureName = 'Molhem';
    let m2:Manage = new Manage(u);
    document.getElementById('user').innerText = m2.info();
    
}
