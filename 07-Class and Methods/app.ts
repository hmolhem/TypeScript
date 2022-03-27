class Human {
  name: string;
  familty: string;
  IdCard: number;
  idNO: number;
  age: number;

  print(): string {
    return `${this.name} ${this.familty}`;
  }

  getAge(): number {
    if (this.age > 30) this.age = this.age - 5;
    return this.age;
  }

  validCode(): boolean {
    if (this.IdCard.toString().length == 10) return true;
    return false;
  }

  hasCar(car: boolean): string {
    if (car) {
      return `${this.print()} has car.`;
    } else {
      return `${this.print()} has not car.`;
    }
  }
}

{
  let user1: Human = new Human();
  user1.name = "Hossein";
  user1.familty = "Molhem";
  user1.IdCard = 1234455667;
  user1.idNO = 9876;
  user1.age = 52;
  document.getElementById("user-1").innerText = user1.print();
  document.getElementById("age-1").innerText =
    "Age is " + user1.getAge().toString();
  document.getElementById("valid-code-1").innerText =
  user1.validCode() == true ? "ID Code is Valid" : "ID Code is not Valid";
  document.getElementById("has-car-1").innerText = user1.hasCar(true);

}
