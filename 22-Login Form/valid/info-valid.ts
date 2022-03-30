/** @format */

export class ValidUser {
  private name(name: string) {
    if (name != undefined && name.length >=3 ) return true;
    else return false;
}
private password(password:string) {
    if (password != undefined && password.length >= 5) return true;
    else return false;
}

validUser(name: string, password: string):boolean {
    return this.name(name) && this.password(password)
}
}