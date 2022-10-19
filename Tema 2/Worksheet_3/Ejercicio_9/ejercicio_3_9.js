function cuadradoPalabra(palabra) {
  palabra = palabra.replace(/ /g, "");
  let palabraSpliteada = palabra.split("");
  let palabraSpliteadaReves = palabra.split("").reverse();
  document.write("<table>");
  document.write("<tr>");
  document.write(`<td>${palabra.charAt(0)}</td>`);
  
  for (i = 1; i < palabraSpliteada.length; i++) {
    document.write(`<td>${palabraSpliteada[i]}</td>`);
  }
  document.write("</tr>");

  for (i = 1; i < palabraSpliteada.length; i++) {
    document.write(`<tr><td>${palabraSpliteada[i]}</td>`);
  }

  for (i = 1; i < palabraSpliteadaReves.length; i++) {
    document.write(`<td>${palabraSpliteadaReves[i]}</td>`);
  }
  document.write("</tr>");
}

cuadradoPalabra("HOLA");
