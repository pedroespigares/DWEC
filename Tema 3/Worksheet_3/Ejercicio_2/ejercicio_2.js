let arrayStr = [
  "Javier",
  "Juan",
  "Jesús",
  "Francisco",
  "Luis",
  "Álvaro",
  "Isabel",
];

let arrayStrOnlyJ = arrayStr.filter((nombre) => nombre.charAt(0) == "J");
arrayStrOnlyJ.sort();

console.log(arrayStrOnlyJ);
