var Operator;
(function (Operator) {
    Operator[Operator["sum"] = 1] = "sum";
    Operator[Operator["minus"] = 2] = "minus";
    Operator[Operator["cross"] = 3] = "cross";
    Operator[Operator["divide"] = 4] = "divide";
})(Operator || (Operator = {}));
var Calculator = /** @class */ (function () {
    function Calculator() {
        // linear method or arrow function
        // arrow function has property state and  behaviour method
        // arrow function is called lambda syntax
        this.sum = function (a, b) {
            return a + b;
        };
    }
    Calculator.prototype.compute = function (in1, in2, operator) {
        if (operator == Operator.sum)
            return in1 + in2;
        if (operator == Operator.minus)
            return in1 - in2;
        if (operator == Operator.cross)
            return in1 * in2;
        if (operator == Operator.divide)
            return in1 / in2;
    };
    Calculator.prototype.add = function (in1, in2) {
        return in1 + in2;
    };
    return Calculator;
}());
{
    var c = new Calculator();
    document.getElementById('cal-1').innerText = c.compute(2, 3, 3).toString();
    document.getElementById('add-1').innerText = c.add(2, 3).toString();
    document.getElementById('add-2').innerText = c.add('2', '3');
    document.getElementById('add-3').innerText = c.add('Hossein', ' Molhem');
    document.getElementById('add-4').innerText = c.sum(2, 3).toString();
}
