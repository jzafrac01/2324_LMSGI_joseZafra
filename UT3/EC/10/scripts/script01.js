//Ej1.1.1

return  filterNumbers(arr, largerThan) {
  return arr.filter((number) => number > largerThan)
}

//Ej1.1.2

const returnFirstTwoDrivers = () => {
  const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0, 2);
}

//Ej1.2.1

function checkNumber(number) {
 return number > 10 
    ? 'El número es mayor a 10'
    : 'El número es menor o igual a 10';
}

//Ej1.2.2

let number = 5;
let result = number > 10
  ? 'El número es mayor a 10'
  : 'El número es menor o igual a 10';

  //Ej1.2.3

  function add(a, b) {
    a = a || 1;
    b = b || 1;
    return a + b;
  }