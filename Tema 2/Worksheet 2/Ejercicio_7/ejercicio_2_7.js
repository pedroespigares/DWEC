// Tabla con dos culumnas --> Números ascendentes y sus senos

document.write('<table bgcolor="black">');
document.write('<tr bgcolor="white" style="text-align:center"><td>Número</td><td>Seno</td></tr>');
for(let i = 1; i<=100;i++){
    document.write(`<tr bgcolor="white" style="text-align:center"><td>${i}</td>`);
    document.write('<td>'+Math.sin(i).toFixed(2)+'</td></tr>');
}
document.write("</table>");

// Está en radianes