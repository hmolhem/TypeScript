{
    var names = new Array();
    names.push('Hossein');
    names.push('Molhem');
    // toString() method
    document.getElementById('name1').innerText = names.toString();
    //How to add element in array
    var cars = new Array();
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
    cars.splice(1, 1, 'TOYOTA'); // replace TOYOTA in index 1
    document.getElementById('car6').innerText = cars.toString();
    cars.splice(0, 1, 'TESLA'); // replace TESLA in index 0
    document.getElementById('car7').innerText = cars.toString();
    cars.splice(1, 2); // remove index 1 , 2 
    document.getElementById('car8').innerText = cars.toString();
    cars.splice(0, 3, 'BMW', 'BENZ', 'VOLVO'); // add 3 elemnt in index 0, 1, 2 
    document.getElementById('car9').innerText = cars.toString();
    // Access to object
    var obj = { firstName: 'Hossein', lastName: 'Molhem', age: 52 };
    document.getElementById('info1').innerText = obj.firstName + ' ' + obj.lastName;
    document.getElementById('info2').innerText = obj.age.toString();
    // Array of Object
    var obj1 = { firstName: 'Hossein', lastName: 'Molhem', age: 52 };
    var obj2 = { firstName: 'Shahriar', lastName: 'Molhem', age: 19 };
    var obj3 = { firstName: 'Maryam', lastName: 'Sanjari', age: 52 };
    var arraObj = [obj1, obj2, obj3];
    var filter = arraObj.filter(function (item) { return item.age == 52; });
    filter.forEach(function (item) {
        document.getElementById('info3').innerText += ' ' + item.firstName;
    });
    var find = arraObj.find(function (item) { return item.age == 19; });
    document.getElementById('info4').innerText = find.firstName;
    // map just like filter
    // but difference is output element equal to input in map as that in 
    // filter output element less than input
    var changeName = arraObj.map(function (item) {
        if (item.age == 19)
            item.firstName = '+';
        if (item.age == 52)
            item.firstName = '*';
        return item;
    });
    var starAndAdd = changeName.map(function (item) { return item.firstName; });
    document.getElementById('info5').innerText += ' ' + starAndAdd.join('&');
    // every output is boolean
    var every = arraObj.every(function (item) { return item.age == 52; });
    document.getElementById('info6').innerText =
        every == true ? 'OK' : 'Not Ok';
    // some output is boolean
    var some = arraObj.some(function (item) { return item.age == 52; });
    document.getElementById('info7').innerText =
        some == true ? 'someone have 52 years old' : 'there is not someone 52 years old';
    var sum = arraObj.map(function (item) { return item.age; })
        .reduce(function (age1, age2) { return age1 + age2; });
    document.getElementById('info8').innerText = sum.toString();
}
