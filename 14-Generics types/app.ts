class Human {
  name: string | number | boolean | string[];
  sureName: string;
  print(): void | string | number {
    return this.name + this.sureName;
  }
}

class Gen<T, U> {
  arg1: T;
  arg2: U;
  arg3: string;

  print1(T,U){
      return T;
  }

  print2<T,U,Y>(arg1:T, arg2:U, arg3:Y){
      return arg3;
  }
}


{
    let g: Gen<string, number> = new Gen<string, number>();
    g.arg1 = 'Hossein';

    let g2:Gen<Human, boolean> = new Gen<Human, bolean>();
    g2.arg1.sureName = 'Molhem';
    g2.print1(new Human, true);
    g2.print2<string, number, boolean>("Hossein", 1, true);
    

}