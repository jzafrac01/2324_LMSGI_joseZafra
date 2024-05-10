//Ej 2.1.1
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

const heights = images.map((item) => item.height)

//Ej 2.1.2

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

const speeds = trips.map((trip) => trip.distance/trip.time)

//Ej 2.1.3

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

numbers.filter((num) => num > 50)

//Ej 2.2.1

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: true },
  { id: 5, admin: true },
];

const admin = users.filter((user) => user.admin)

//Ej 2.3.1

var users = [
  { username: 'waldo', name: 'Waldo' },
  { username: 'batman', name: 'Batman' },
  { username: 'joker', name: 'Joker' },
];

users.find((user => user.username == "waldo"))

//Por si es undefined
users.find((user => user.username == "Waldo"))?? "waldo"

//Ej 2.4.1

var trips = [
  { distance: 34 },
  { distance: 90 },
  { distance: 59 },
];

trips.reduce((acc,trip) => trip.distance + acc,0)

//Ej 2.4.2

const desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var accInitialObject = { sitting: 0, standing: 0 };
var deskTypes = desks.reduce(function(total, desk) {
    // aplicar la lógica aquí
    if (desk.type=="sitting") 
      accInitialObject.sitting +=1
    else if (desk.type == "standing") 
      accInitialObject.standing +=1

    return accInitialObject
}, accInitialObject );