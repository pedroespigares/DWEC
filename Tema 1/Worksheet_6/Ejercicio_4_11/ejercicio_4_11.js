let columns = parseInt(prompt("Introduzca el número de columnas"));
let height = parseInt(prompt("Introduzca la altura de las columnas"));
let width = parseInt(prompt("Introduzca el ancho de las columnas"));

document.write(`<table border="0" cellspacing="2" bgcolor="black">`);
document.write(`<tr bgcolor="white" height="${height}"`);

for(let td = 0; td<=columns; td++){
    document.write(`<td width="${width}">&nbsp;</td>`);
}

document.write(`</tr>`);
document.write(`</table>`);