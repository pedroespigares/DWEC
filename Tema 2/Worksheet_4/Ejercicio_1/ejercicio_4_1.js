document.write('<table border=1px>');
document.write("<tr>");
document.write(`<td>Lenguaje</td>`);
document.write(`<td>Code Name</td>`);
document.write(`<td>Versión</td>`);
document.write(`<td>Plataforma</td>`);
document.write(`<td>Vendedor</td>`);
document.write(`<td>Memoria del equipo</td>`);
document.write(`<td>Número de núcleos/td>`);
document.write("/<tr>");
document.write("<tr>");
document.write(`<td>${navigator.language}</td>`);
document.write(`<td>${navigator.appCodeName}</td>`);
document.write(`<td>${navigator.appVersion}</td>`);
document.write(`<td>${navigator.platform}</td>`);
document.write(`<td>${navigator.vendor}</td>`);
document.write(`<td>${navigator.deviceMemory}</td>`);
document.write(`<td>${navigator.hardwareConcurrency}</td>`);
document.write("</tr>");
document.write("</table>");