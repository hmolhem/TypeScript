// S: Single Responsibility Principle
// O: Open-Closed Principle
// L: Liskov Substitution Principle
// I: Interface Segregation Principle
// D: Dependency Inversion Principle
var User = /** @class */ (function () {
    function User() {
        this.listOfUser = new Array();
    }
    User.prototype.add = function (user) {
        if (new UserValid().valid(user)) {
            this.listOfUser.push(user);
            new Print().show("".concat(user.name, " successful register"));
        }
        else {
            new Print().show("Error in registration");
        }
    };
    return User;
}());
//validation class
var UserValid = /** @class */ (function () {
    function UserValid() {
    }
    UserValid.prototype.name = function (na) {
        if (na != undefined && na.trim().length >= 3)
            return true;
        else
            return false;
    };
    UserValid.prototype.surename = function (fa) {
        if (fa != undefined && fa.trim().length >= 5)
            return true;
        else
            return false;
    };
    UserValid.prototype.mobile = function (mo) {
        if (mo != undefined && mo.toString().trim().length == 11)
            return true;
        else
            return false;
    };
    UserValid.prototype.valid = function (user) {
        if (this.name(user.name)
            && this.surename(user.sureName)
            && this.mobile(user.mobile))
            return true;
        else
            return false;
    };
    return UserValid;
}());
var Print = /** @class */ (function () {
    function Print() {
    }
    Print.prototype.show = function (s) {
        alert(s);
    };
    return Print;
}());
{
    var user1 = new User();
    user1.name = "Maryam";
    user1.mobile = 123;
    user1.sureName = "Sanjari";
    var user2 = new User();
    user2.name = "Hossein";
    user2.mobile = 12345678912;
    user2.sureName = "Molhem";
    user1.add(user1);
    user2.add(user2);
}
