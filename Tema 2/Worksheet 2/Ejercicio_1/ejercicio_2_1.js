// Crea una página en la que se muestre

// Un número aleatorio entre el 0 y 1

function randomBetween0_1() {
  return Math.random();
}

// Igual pero entre 100 y 200

function randomBetween100_200() {
  return Math.random() * (200 - 100) + 100;
}

/* Pide dos valores al usuario y genera un 
nº aleatorio entre esos dos valores */

function randomBetweenUserNumbers(max, min) {
  return Math.random() * (max - min) + min;
}

let first_number = prompt("Introduce el máximo");
let second_number = prompt("Introduce el mínimo");

document.write(randomBetween0_1() + "</br>");
document.write(randomBetween100_200() + "</br>");
document.write(randomBetweenUserNumbers(first_number, second_number));
