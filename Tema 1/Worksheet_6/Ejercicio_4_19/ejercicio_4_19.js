let measurement = parseInt(prompt("Introduzca el ancho y el alto de la celda"));

const size = 8;

document.write(`<table border="0" cellspacing="2" bgcolor="black">`);
for (let j = 1; j <= size; j++) {
  document.write(`<tr bgcolor="white" height="${measurement}">`);
  for (let i = 1; i <= size; i++) {
    if ((i + j) % 2 == 0) {
      document.write(`<td width="${measurement}" bgcolor="black">&nbsp;</td>`);
    } else {
      document.write(`<td width="${measurement}">&nbsp;</td>`);
    }
  }
  document.write("</tr>");
}

document.write("</table>");
