// D: Dependency Inversion Principle
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        return "".concat(this.name + " " + this.color, " ");
    };
    return Car;
}());
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.print = function () {
        return "".concat(this.name + " " + this.sureName, " ");
    };
    return User;
}());
var Manage = /** @class */ (function () {
    function Manage(object) {
        this.obj = object;
    }
    Manage.prototype.info = function () {
        return this.obj.print();
    };
    return Manage;
}());
{
    var c = new Car();
    c.name = 'PRID';
    c.color = 'White';
    var m = new Manage(c);
    document.getElementById('car').innerText = m.info();
    var u = new User();
    u.name = 'Hossein';
    u.sureName = 'Molhem';
    var m2 = new Manage(u);
    document.getElementById('user').innerText = m2.info();
}
