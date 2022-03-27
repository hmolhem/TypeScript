var Car = /** @class */ (function () {
    function Car(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
    }
    // constructor has not output. this is difference between constructor and method.
    // class without constructor lead to undifined property
    // constructor(name:string , color:string, model:number){
    //     this.name = name;
    //     this.color = color;
    //     this.model = model;
    // }
    Car.prototype.report = function () {
        return "Your car specification is ".concat(this.name, ", ").concat(this.color, ", ").concat(this.model);
    };
    return Car;
}());
{
    var car = new Car('VOLVO', 'RED', 200);
    document.getElementById('car-name').innerText = car.name;
    document.getElementById('car-color').innerText = car.color;
    car.model = 300;
    document.getElementById('car-model').innerText = car.model.toString();
    document.getElementById('car').innerText = car.report();
}
