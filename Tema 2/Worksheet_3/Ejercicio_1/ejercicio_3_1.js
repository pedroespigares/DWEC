function invierteCadena(cadena) {
  return cadena.split("").reverse().join("");
}

function inviertePalabras(cadena) {
  return cadena.split("").reverse().join("");
}

function encuentraPalabraMasLarga(cadena) {
  let cadenaSpliteada = cadena.split(" ");
  let palabraMasLarga = cadenaSpliteada[0];
  for (let palabra of cadenaSpliteada) {
    if (palabra.length >= palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }
  return palabraMasLarga;
}

function filtraPalabrasMasLargas(cadena, i) {
  let contador = 0;
  let cadenaSpliteada = cadena.split(" ");
  for (let palabra of cadenaSpliteada) {
    if (palabra.length > i) {
      contador++;
    }
  }
  return contador;
}

function cadenaBienFormada(cadena){
    return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}

document.write(invierteCadena("Hola que tal") + "</br>");
document.write(inviertePalabras("heyy que tal") + "</br>");
document.write(
  encuentraPalabraMasLarga("Blablablab que talcomoestamossss") + "</br>"
);
document.write(
  filtraPalabrasMasLargas(
    "Tio que tal esto es una palabra de 5 letras no se",
    5
  ) + "</br>"
);
document.write(cadenaBienFormada("TiO EstoY tO MareAo") + "</br>");
