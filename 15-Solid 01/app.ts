// S: Single Responsibility Principle
// O: Open-Closed Principle
// L: Liskov Substitution Principle
// I: Interface Segregation Principle
// D: Dependency Inversion Principle

// user model
interface IUser {
  name: string;
  sureName: string;
  mobile: number;
}

// use managment
interface IUserManagement {
  add(user: IUser);
}
class User implements IUser, IUserManagement {
  add(user: IUser) {
    if (new UserValid().valid(user)) {
      this.listOfUser.push(user);
      new Print().show(`${user.name} successful register`);
    } else {
      new Print().show(`Error in registration`);
    }
  }

  name: string;
  sureName: string;
  mobile: number;
  listOfUser: IUser[] = new Array<IUser>();
}

//validation class
class UserValid {
  private name(na: string): boolean {
    if (na != undefined && na.trim().length >= 3) return true;
    else return false;
  }
  private surename(fa: string) {
    if (fa != undefined && fa.trim().length >= 5) return true;
    else return false;
  }
  private mobile(mo: number) {
    if (mo != undefined && mo.toString().trim().length == 11) return true;
    else return false;
  }

  valid(user:IUser):boolean{
    if(this.name(user.name)
    && this.surename(user.sureName)
    && this.mobile(user.mobile))
    return true
    else return false;
}
}
class Print {
  show(s: string) {
    alert(s);
  }
}

{
    let user1:User = new User();
    user1.name="Maryam";
    user1.mobile=123;
    user1.sureName="Sanjari";

    let user2:User = new User();
    user2.name="Hossein";
    user2.mobile=12345678912;
    user2.sureName="Molhem";

    user1.add(user1);
    user2.add(user2);
}
