var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
    }
    // public is default
    Parent.prototype.move = function () {
        return "".concat(this.name, " is moving");
    };
    //protected method. only current class and all childs class access tp this method
    // even object is not access to protected method.
    Parent.prototype.x = function () {
        return "";
    };
    return Parent;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(na, fa) {
        var _this = _super.call(this, na) || this;
        _this.family = fa;
        return _this;
    }
    return Human;
}(Parent));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.speed = function (speed) {
        return this.checkSpeed(speed);
    };
    Car.prototype.checkSpeed = function (speed) {
        if (speed > 180)
            return "".concat(this.name, " has max velocity ").concat(speed, ".");
        else {
            return "".concat(this.name, " is moving with ").concat(speed, ".");
        }
    };
    return Car;
}(Parent));
{
    var human = new Human("Ali", 'Molhem');
    document.getElementById("human").innerText = human.move();
    var car = new Car("PRID");
    document.getElementById("car").innerText = car.speed(100);
}
