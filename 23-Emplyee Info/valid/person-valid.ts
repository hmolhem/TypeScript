/** @format */

import { Person } from "../view/person-model";

export class personValid {
  validData(person: Person): boolean {
    return (
      this.name(person.name) &&
      this.sureName(person.sureName) &&
      this.nationalCode(person.nationalCode) &&
      this.code(person.code) &&
      this.mobile(person.mobile)
    );
  }

  private name(name: string): boolean {
    if (name.length >= 3) return true;
    else return false;
  }
  private sureName(sureName: string): boolean {
    if (sureName.length >= 4) return true;
    else return false;
  }
  private nationalCode(natioanCode: string): boolean {
    if (natioanCode.length == 10) return true;
    else return false;
  }
  private code(code: string): boolean {
    if (code.length == 4) return true;
    else return false;
  }
  private mobile(mobile: string): boolean {
    if (mobile.length == 11) return true;
    else return false;
  }
}
