function palindromo(cadena) {
  cadena = cadena.toLowerCase();
  cadena = cadena.replace(/ /g, "");
  let cadenaSpliteadaReves = cadena.split("").reverse();
  cadenaSpliteadaReves = cadenaSpliteadaReves.join("");
  if (cadena == cadenaSpliteadaReves) {
    document.write(`${cadena} es palíndroma`);
  } else {
    document.write(`${cadena} <b>NO</b> es palíndroma`);
  }
}

palindromo("arepera");
