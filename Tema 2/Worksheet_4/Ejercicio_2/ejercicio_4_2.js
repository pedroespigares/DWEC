document.write('<table border=1px>');
document.write("<tr>");
document.write(`<td>Resolución</td>`);
document.write(`<td>Profundidad de color</td>`);
document.write(`<td>Ángulo de pantalla</td>`);
document.write("/<tr>");
document.write("<tr>");
document.write(`<td>${screen.width} x ${screen.height}</td>`);
document.write(`<td>${screen.colorDepth}</td>`);
document.write(`<td>${screen.orientation.angle}</td>`);
document.write("</tr>");
document.write("</table>");