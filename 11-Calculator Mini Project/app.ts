enum Operator{ sum=1, minus, cross, divide};
class Calculator{

    private firstNumber : number;
    private secondNumber: number;
    private result      : number;
    private operator    : number;

    constructor(firstNumer:number, secondNumber:number, operator:number){
        this.firstNumber = firstNumer;
        this.secondNumber = secondNumber;
        this.operator = operator;
    }  

    compute(op:number):number{
        if (op == Operator.sum) {
            this.result =  this.add();
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
    }

    private add():number{
        return this.firstNumber + this.secondNumber;
    }
    private minus():number{
        return this.firstNumber - this.secondNumber;
    }
    private cross():number{
        return this.firstNumber * this.secondNumber;
    }
    private divide():number{
        return this.firstNumber / this.secondNumber;
    }

}


{

    function displayResult() {

        const first: HTMLElement = document.getElementById('first');
        const second: HTMLElement = document.getElementById('second');
        const operator: HTMLElement = document.getElementById('operator');
        const result: HTMLElement = document.getElementById('result');

        let a: number = Number(first.value);
        let b: number = Number(second.value);
        let op: number = Number(operator.value);
        let myCompute: Calculator = new Calculator(a, b, op);
        result.value = myCompute.compute(op);
    }
}