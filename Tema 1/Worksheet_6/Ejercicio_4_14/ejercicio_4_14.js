let columns = parseInt(prompt("Introduzca el número de columnas"));
let height = parseInt(prompt("Introduzca la altura de las columnas"));
let width = parseInt(prompt("Introduzca el ancho de las columnas"));

document.write(`<table border="0" cellspacing="2" bgcolor="black">`);
document.write(`<tr bgcolor="white" height="${height}"`);

let td = 0;

while(td <= columns){
    if(td%2===0){
        document.write(`<td width="${width}" bgcolor="white">&nbsp;</td>`);
    }
    else{
        document.write(`<td width="${width}" bgcolor="black">&nbsp;</td>`);
    }
    td ++;
}

document.write(`</tr>`);
document.write(`</table>`);