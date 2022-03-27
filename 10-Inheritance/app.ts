class Parent {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  // public is default
  public move(): string {
    return `${this.name} is moving`;
  }

  //protected method. only current class and all childs class access tp this method
  // even object is not access to protected method.
  protected x(): string {
      return ``
  }

  // how to use constructor parent and extended it in child class
}

class Human extends Parent {

    family: string;

    constructor(na:string, fa:string){
        super(na);
        this.family = fa;
    }
}

class Car extends Parent {
  public speed(speed: number): string {
    return this.checkSpeed(speed);
  }

  private checkSpeed(speed: number): string {
    if (speed > 180) return `${this.name} has max velocity ${speed}.`;
    else {
      return `${this.name} is moving with ${speed}.`;
    }
  }
}

{
  let human: Human = new Human("Ali", 'Molhem');
  document.getElementById("human").innerText = human.move();

  let car: Car = new Car("PRID");
  document.getElementById("car").innerText = car.speed(100);
}
