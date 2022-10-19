let columns = parseInt(prompt("Introduzca número de columnas"));
let rows = parseInt(prompt("Introduzca el número de filas"));
let height = parseInt(prompt("Introduzca la altura"));
let width = parseInt(prompt("Introduzca la anchura"));

document.write(`<table border="0" cellspacing="2" bgcolor="black">`);
/* El primer for te dibuja tantas filas hayan metido por el parámetro
mientras que el segundo dibuja tantas columnas haya por columna
*/

for(let j=1;j<=rows;j++){
    document.write(`<tr bgcolor="white" height="${height}">`);
    for(let i=1;i<=columns;i++){
        document.write(`<td width="${width}">&nbsp;</td>`);
    }
    document.write("</tr>");
}

document.write("</table>");