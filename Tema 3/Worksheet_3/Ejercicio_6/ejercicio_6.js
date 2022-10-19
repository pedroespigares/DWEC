function squareCode(string) {
  let noSpaces = string.split(" ").join("");
  let long = noSpaces.length;
  let numAux = Math.ceil(Math.sqrt(long));
  let continueMaking = true;
  let array = [];
  let i = 0;
  let j = numAux;

  while (continueMaking) {
    // Se divide el string en tantas partes como indique su raíz cuadrada

    if (noSpaces.slice(i, j).length < numAux) {
      continueMaking = false;
    }

    array.push(noSpaces.slice(i, j));
    i += numAux;
    j += numAux;
  }

  // Si el último carácter del array está vacío se elimina

  if (array[array.length - 1] == "") {
    array.pop();
  }

  // Vamos sumando la primera letra de cada elemento del array tantas veces como letras tenga el ultimo elemento

  let squaredCode = [];
  for (i = 0; i < array[array.length - 1].length; i++) {
    key = array.reduce((j, k) => j + k.charAt(i), "");
    squaredCode.push(key);
  }

  if (array[0].length != array[array.length - 1].length) {
    for (
      i = array[array.length - 1].length;
      i < array[array.length - 2].length;
      i++
    ) {
      key = array.reduce((j, k) => j + k.charAt(i), "");
      squaredCode.push(key);
    }
  }
  return squaredCode;
}
console.log(squareCode("Los arrays me cuestan mucho ayuda"));
