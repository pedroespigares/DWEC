function aparicionesCadena(cadena, subcadena) {
  let posiciones = [];
  let cadenaSpliteada = cadena.split(" ");
  for (i = 0; i < cadenaSpliteada.length; i++) {
    if (cadenaSpliteada[i] === subcadena) {
      posiciones.push(i);
    }
  }
  return [...posiciones];
}

document.write(
  aparicionesCadena(
    "pedro es el delegado pero pedro sanchez es el presidente pedro",
    "pedro"
  )
);
