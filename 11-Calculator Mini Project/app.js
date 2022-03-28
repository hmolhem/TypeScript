var Operator;
(function (Operator) {
    Operator[Operator["sum"] = 1] = "sum";
    Operator[Operator["minus"] = 2] = "minus";
    Operator[Operator["cross"] = 3] = "cross";
    Operator[Operator["divide"] = 4] = "divide";
})(Operator || (Operator = {}));
;
var Calculator = /** @class */ (function () {
    function Calculator(firstNumer, secondNumber, operator) {
        this.firstNumber = firstNumer;
        this.secondNumber = secondNumber;
        this.operator = operator;
    }
    Calculator.prototype.compute = function (op) {
        if (op == Operator.sum) {
            this.result = this.add();
            return this.result;
        }
        if (op == Operator.minus) {
            this.result = this.minus();
            return this.result;
        }
        if (op == Operator.cross) {
            this.result = this.cross();
            return this.result;
        }
        if (op == Operator.divide) {
            this.result = this.divide();
            return this.result;
        }
    };
    Calculator.prototype.add = function () {
        return this.firstNumber + this.secondNumber;
    };
    Calculator.prototype.minus = function () {
        return this.firstNumber - this.secondNumber;
    };
    Calculator.prototype.cross = function () {
        return this.firstNumber * this.secondNumber;
    };
    Calculator.prototype.divide = function () {
        return this.firstNumber / this.secondNumber;
    };
    return Calculator;
}());
{
    function displayResult() {
        var first = document.getElementById('first');
        var second = document.getElementById('second');
        var operator = document.getElementById('operator');
        var result = document.getElementById('result');
        var a = Number(first.value);
        var b = Number(second.value);
        var op = Number(operator.value);
        var myCompute = new Calculator(a, b, op);
        result.value = myCompute.compute(op);
    }
}
