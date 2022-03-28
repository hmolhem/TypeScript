// This principle states that software entities 
// must be extensible without having to modify the existing code. 
class Car {
  name: string;
  state: number;
  speed(): number { // close method
    return 0;
  }
}

// for extend speed method we extend Car class
class State1 extends Car {
    speed(): number { // open method
        return 180;
    }
}


// for extend speed method we extend Car class
class State2 extends Car {
  speed(): number {  // open mmethod
    return 200;
  }
}

{
  let prid: State1 = new State1();
  prid.name = "PRID";
  console.log(`${prid.name} speed is : ${prid.speed()}`);
  
  let volvo: State2 = new State2();
  volvo.name = "VOLVO";
  console.log(`${volvo.name} speed is : ${volvo.speed()}`);


}
