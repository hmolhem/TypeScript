import { Human } from "../views/human";

export class UserValid {
  private nameValid(name: string) {
    if (name != undefined && name.length >= 3) return true;
    else return false;
  }
  private sureNameValid(sureName: string) {
    if (sureName != undefined && sureName.length >= 3) return true;
    else return false;
  }
  valid(user: Human): boolean {
    return this.nameValid(user.name) && this.sureNameValid(user.sureName);
  }
}
