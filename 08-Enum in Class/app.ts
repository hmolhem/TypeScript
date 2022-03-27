enum Operator{
    sum = 1 , minus, cross, divide
}
class Calculator{
    compute(in1:number, in2:number, operator:number):number{
        if (operator == Operator.sum) return in1 + in2;
        if (operator == Operator.minus) return in1 - in2;
        if (operator == Operator.cross) return in1 * in2;
        if (operator == Operator.divide) return in1 / in2;
    }

    // method overloading
    add(in1:number,in2:number):number;
    add(in1:string,in2:string):string;
    add(in1:any, in2:any):any{
        return in1 + in2;
    }

    // linear method or arrow function
    // arrow function has property state and  behaviour method
    // arrow function is called lambda syntax
    sum = (a:number, b:number):number => {
        return a + b;
    }


}

{
    let c:Calculator = new Calculator();
    document.getElementById('cal-1').innerText = c.compute(2,3,3).toString();
    document.getElementById('add-1').innerText = c.add(2,3).toString();
    document.getElementById('add-2').innerText = c.add('2','3');
    document.getElementById('add-3').innerText = c.add('Hossein',' Molhem');
    document.getElementById('add-4').innerText = c.sum(2,3).toString();


}