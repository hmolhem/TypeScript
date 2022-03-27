class Car{
    name: string;
    color: string;
    model: number;

    // constructor has not output. this is difference between constructor and method.
    // class without constructor lead to undifined property
    // constructor(name:string , color:string, model:number){
    //     this.name = name;
    //     this.color = color;
    //     this.model = model;
    // }
    
    report():string{
        return `Your car specification is ${this.name}, ${this.color}, ${this.model}`;
    }
    
    // constructor chaining or constructor overloading
    constructor(name:string)
    constructor(name:string , color:string)
    constructor(name:string , color:string, model:number)
    constructor(name?:string , color?:string, model?:number){
        this.name = name;
        this.color = color;
        this.model = model;
    }
}

{
    let car:Car = new Car('VOLVO', 'RED', 200);
    document.getElementById('car-name').innerText = car.name;
    document.getElementById('car-color').innerText = car.color;
    car.model = 300;
    document.getElementById('car-model').innerText = car.model.toString();
    document.getElementById('car').innerText = car.report();


}