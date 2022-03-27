var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.print = function () {
        return "".concat(this.name, " ").concat(this.familty);
    };
    Human.prototype.getAge = function () {
        if (this.age > 30)
            this.age = this.age - 5;
        return this.age;
    };
    Human.prototype.validCode = function () {
        if (this.IdCard.toString().length == 10)
            return true;
        return false;
    };
    Human.prototype.hasCar = function (car) {
        if (car) {
            return "".concat(this.print(), " has car.");
        }
        else {
            return "".concat(this.print(), " has not car.");
        }
    };
    return Human;
}());
{
    var user1 = new Human();
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
