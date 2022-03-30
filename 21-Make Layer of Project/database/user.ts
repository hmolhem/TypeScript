import { Alert } from "../common/alert";
import { UserValid } from "../valid/uservalid";
import { Human } from "../views/human";

export interface IUser {
  add(h: Human);
  edit();
  read();
}

export class UserManage implements IUser {
  lsv: Human[] = new Array<Human>();

  add(h: Human) {
    if (new UserValid().valid(h)) {
        this.lsv.push(h);
        new Alert().message('Susseccfully register');
    }else{
        new Alert().message('Error validation.')
    }
  }
  edit() {
    throw new Error("Method not implemented.");
  }
  read() {
    return this.lsv;
 }
}
