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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.speed = function () {
        return 0;
    };
    return Car;
}());
var State1 = /** @class */ (function (_super) {
    __extends(State1, _super);
    function State1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    State1.prototype.speed = function () {
        return 180;
    };
    return State1;
}(Car));
var State2 = /** @class */ (function (_super) {
    __extends(State2, _super);
    function State2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    State2.prototype.speed = function () {
        return 200;
    };
    return State2;
}(Car));
{
    var prid = new State1();
    prid.name = "PRID";
    console.log("".concat(prid.name, " speed is : ").concat(prid.speed()));
    var volvo = new State2();
    volvo.name = "VOLVO";
    console.log("".concat(volvo.name, " speed is : ").concat(volvo.speed()));
}
