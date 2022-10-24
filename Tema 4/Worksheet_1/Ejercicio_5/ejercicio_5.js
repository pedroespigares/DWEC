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
