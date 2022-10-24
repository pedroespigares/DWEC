function startDrag(e) {
  // IE uses srcElement, others use target
  if (e.target) {
    targ = e.target;
  } else {
    targ = e.srcElement;
  }

  // Calcula las coordenadas actuales al clickar en la imagen
  offsetX = e.clientX;
  offsetY = e.clientY;

  // Inicializa la posición de la imagen a 0,0
  if (!targ.style.left) {
    targ.style.left = "0px";
  }
  if (!targ.style.top) {
    targ.style.top = "0px";
  }

  // Pasa la posición a Int
  coordX = parseInt(targ.style.left);
  coordY = parseInt(targ.style.top);
  drag = true;

  // Llama a la función de mover imagen
  document.onmousemove = dragImg;
  return false;
}

function dragImg(e) {
  // Si la la variable drag está en false (que se ha soltado el click), no realiza la acción.
  if (!drag) {
    return false;
  }

  // Calcula la diferencia de píxeles entre el primer click y cuando se suelta el ratón, moviendo la imagen esa cantidad de píxeles
  targ.style.left = coordX + e.clientX - offsetX + "px";
  targ.style.top = coordY + e.clientY - offsetY + "px";
  return false;
}

function stopDrag() {
  // Función para parar de mover la imagen
  drag = false;
}

window.onload = () => {
  document.onmousedown = startDrag;
  document.onmouseup = stopDrag;
};
