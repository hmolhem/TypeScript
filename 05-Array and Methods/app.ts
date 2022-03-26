{
    let names: string[] = new Array<string>();
    names.push('Hossein');
    names.push('Molhem');

    // toString() method
    document.getElementById('name1').innerText = names.toString();
    
    //How to add element in array
    let cars:string[] = new Array<string>();
    cars = ['BMW', 'BENZ', 'VOLVO'];
    // add first
    cars.unshift('TOYOTA');
    document.getElementById('car1').innerText = cars.toString();
    // add end
    cars.push('TESLA');
    document.getElementById('car2').innerText = cars.toString();
    
    // How to seprate elements with arbitary character
    document.getElementById('car3').innerText = cars.join('-');
    document.getElementById('name2').innerText = names.join(' ');
    
    // How to remove element in array
    // remove first
    cars.shift();
    document.getElementById('car4').innerText = cars.toString();
    // remove end
    cars.pop();
    document.getElementById('car5').innerText = cars.toString();
    
    // How to remove and add element in every index
    cars.splice(1,1,'TOYOTA') // replace TOYOTA in index 1
    document.getElementById('car6').innerText = cars.toString();
    cars.splice(0,1,'TESLA') // replace TESLA in index 0
    document.getElementById('car7').innerText = cars.toString();
    cars.splice(1,2) // remove index 1 , 2 
    document.getElementById('car8').innerText = cars.toString();
    cars.splice(0,3,'BMW','BENZ', 'VOLVO') // add 3 elemnt in index 0, 1, 2 
    document.getElementById('car9').innerText = cars.toString();
    
    // Access to object
    let obj = {firstName:'Hossein', lastName: 'Molhem', age: 52};
    document.getElementById('info1').innerText = obj.firstName + ' ' + obj.lastName
    document.getElementById('info2').innerText = obj.age.toString();
    
    // Array of Object
    let obj1 = {firstName:'Hossein', lastName: 'Molhem', age: 52};
    let obj2 = {firstName:'Shahriar', lastName: 'Molhem', age: 19};
    let obj3 = {firstName:'Maryam', lastName: 'Sanjari', age: 52};
    
    let arraObj = [obj1,obj2,obj3];
    let filter = arraObj.filter(item=>item.age == 52);
    filter.forEach(item=>{
        document.getElementById('info3').innerText += ' ' + item.firstName;
    });
    
    let find = arraObj.find(item => item.age == 19);
    document.getElementById('info4').innerText = find.firstName;
    
    // map just like filter
    // but difference is output element equal to input in map as that in 
    // filter output element less than input
    let changeName = arraObj.map(item=>{
        if (item.age == 19) item.firstName = '+';
        if (item.age == 52) item.firstName = '*';
        return item
    });

    let starAndAdd = changeName.map(item => item.firstName)
    document.getElementById('info5').innerText += ' ' + starAndAdd.join('&');
    
    // every output is boolean
    let every = arraObj.every(item=> item.age==52);
    document.getElementById('info6').innerText = 
    every == true ? 'OK':'Not Ok';
    
    // some output is boolean
    let some = arraObj.some(item=> item.age==52);
    document.getElementById('info7').innerText = 
    some == true ? 'someone have 52 years old':'there is not someone 52 years old';
    
    let sum = arraObj.map(item => item.age)
    .reduce((age1,age2)=> age1 + age2);
    document.getElementById('info8').innerText = sum.toString();

    //findindex ?




}