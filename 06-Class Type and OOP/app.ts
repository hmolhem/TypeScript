class User {
  name: string; // filed or property
  sureName: string; // filed or property
  code: Number; // filed or property
  car: Car;
}

class Car {
  name: string;
  color: string;
  model: string;
}

{
  let user: User = new User();
  user.name = "Hossein";
  user.sureName = "Molhem";
  user.code = 12345;
  user.car = new Car();
  user.car.name = 'BMW';
  user.car.color = 'Black';
  user.car.model= 'X300'
  document.getElementById('user').innerText = user.name + ' ' + user.car.name;
  
  let user2: User = new User();
  user2.name = 'Reza';
  user2.sureName = 'Abbasi';
  user2.code = 99595;
  user2.car = new Car();
  user2.car.name = 'VOLVO';
  user2.car.color = 'Red';
  user2.car.model= 'BLC500'
  document.getElementById('user2').innerText = user2.name + ' ' + user2.car.name;
  
}

