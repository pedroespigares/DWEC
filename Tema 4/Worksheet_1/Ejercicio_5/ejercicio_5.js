document.write("<table>")
for(let i=0;i<=100;i++){
  document.write("<tr>");
  for(let j=0;j<=100;j++){
    document.write("<td></td>")
  }
  document.write("</tr>");
}
document.write("</table>")

window.onload = () => {
  let celdas = document.getElementsByTagName("td");
  for (i = 0; i < celdas.length; i++) {
    celdas[i].onmouseover = cambiaColor;
  }

  function cambiaColor(e) {
    if (e.ctrlKey === true) {
      e.target.style.backgroundColor = "red";
    } else if (e.shiftKey === true) {
      e.target.style.backgroundColor = "blue";
    } else if (e.altKey === true) {
      e.target.style.backgroundColor = "white";
    }
  }
};
