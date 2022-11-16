var bola,
  posX,
  posY,
  direccionX,
  direccionY,
  velocidadX,
  velocidadY,
  radio,
  jugador1,
  jugador2,
  contadorGoles1 = 0,
  contadorGoles2 = 0,
  resultado1,
  resultado2;



var singleplayer = document.getElementById("sp");
var multiplayer = document.getElementById("mp");
var ia = document.getElementById("ia");
var restart = document.getElementById("restart");



window.onload = () => {
  bola = document.getElementById("bola");

  radio = bola.getAttribute("r");

  jugador1 = document.getElementById("jugador1");
  jugador2 = document.getElementById("jugador2");

  resultado1 = document.getElementById("resultado1");
  resultado2 = document.getElementById("resultado2");

  posX = 675;
  posY = 250;

  direccionX = 1;
  direccionY = 1;

  velocidadX = Math.random() * (15 - 10) + 10;
  velocidadY = Math.random() * (15 - 10) + 10;
};



singleplayer.addEventListener("click", () => {
  setInterval(dibujaEscenario, 1000 / 60);
  moverJugador1();
  setInterval(movAutomaticoJug2, 1000 / 60);
  singleplayer.setAttribute("disabled", true);
  multiplayer.setAttribute("disabled", true);
  ia.setAttribute("disabled", true);
});




multiplayer.addEventListener("click", () => {
  setInterval(dibujaEscenario, 1000 / 60);
  moverJugador1();
  moverJugador2();
  singleplayer.setAttribute("disabled", true);
  multiplayer.setAttribute("disabled", true);
  ia.setAttribute("disabled", true);
});




ia.addEventListener("click", () => {
  setInterval(dibujaEscenario, 1000 / 60);
  setInterval(movAutomaticoJug1, 1000 / 60);
  setInterval(movAutomaticoJug2, 1000 / 60);
  singleplayer.setAttribute("disabled", true);
  multiplayer.setAttribute("disabled", true);
  ia.setAttribute("disabled", true);
});




restart.addEventListener("click", () => {
  location.reload();
});




function dibujaEscenario() {
  rebotarEnJugador();

  if (posX > 1350) {
    golJugador(jugador1);
  } else if (posX < 0) {
    golJugador(jugador2);
  }

  posX += direccionX * velocidadX;
  bola.setAttribute("cx", posX);

  if (posY > 500 - radio || posY < 0 + radio) {
    direccionY *= -1;
  }

  posY += direccionY * velocidadY;
  bola.setAttribute("cy", posY);
}




function moverJugador1() {
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName == "w") {
      if (parseInt(jugador1.getAttribute("y")) > 20) {
        jugador1.setAttribute("y", parseInt(jugador1.getAttribute("y")) - 30);
      }
    } else if (keyName == "s") {
      if (parseInt(jugador1.getAttribute("y")) < 370) {
        jugador1.setAttribute("y", parseInt(jugador1.getAttribute("y")) + 30);
      }
    }
  });
}




function moverJugador2() {
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName == "ArrowUp") {
      if (parseInt(jugador2.getAttribute("y")) > 30) {
        jugador2.setAttribute("y", parseInt(jugador2.getAttribute("y")) - 30);
      }
    } else if (keyName == "ArrowDown") {
      if (parseInt(jugador2.getAttribute("y")) < 370) {
        jugador2.setAttribute("y", parseInt(jugador2.getAttribute("y")) + 30);
      }
    }
  });
}




function golJugador(jugador) {
  if (jugador == jugador1) {
    contadorGoles1++;
    resultado1.innerHTML = contadorGoles1;
    posX = 675;
    posY = 250;
    velocidadX = Math.floor(Math.random() * 10) + 1;
    velocidadY = Math.floor(Math.random() * 10) + 1;
    direccionX *= 1;
    direccionY *= 1;
    posX += direccionX * velocidadX;
    posY += direccionY * velocidadY;
    bola.setAttribute("cx", posX);
    bola.setAttribute("cy", posY);
  } else if (jugador == jugador2) {
    contadorGoles2++;
    resultado2.innerHTML = contadorGoles2;
    posX = 675;
    posY = 250;
    velocidadX = Math.floor(Math.random() * 10) + 1;
    velocidadY = Math.floor(Math.random() * 10) + 1;
    direccionX *= -1;
    direccionY *= -1;
    posX += direccionX * velocidadX;
    posY += direccionY * velocidadY;
    bola.setAttribute("cx", posX);
    bola.setAttribute("cy", posY);
  }
}




function rebotarEnJugador() {
  if (
    posX > 50 &&
    posX < 123 &&
    posY > parseInt(jugador1.getAttribute("y")) &&
    posY < parseInt(jugador1.getAttribute("y")) + 100
  ) {
    direccionX *= -1;
  } else if (
    posX > 1250 &&
    posX < 1323 &&
    posY > parseInt(jugador2.getAttribute("y")) &&
    posY < parseInt(jugador2.getAttribute("y")) + 100
  ) {
    direccionX *= -1;
  }
}




function movAutomaticoJug1() {
  var y = parseInt(jugador1.getAttribute("y"));

  // Si la bola está por debajo del jugador, mover hacia abajo

  if (posY > y && direccionX == -1) {
    if (y < 370) {
      jugador1.setAttribute("y", y + 10);
    }

  // Si la bola está por encima del jugador, mover hacia arriba


  } else if (posY < y + 50 && direccionX == -1) {
    if (y > 20) {
      jugador1.setAttribute("y", y - 10);
    }
  }
}




function movAutomaticoJug2() {
  var y = parseInt(jugador2.getAttribute("y"));

    // Si la bola está por debajo del jugador, mover hacia abajo

  if (posY > y && direccionX == 1) {
    if (y < 370) {
      jugador2.setAttribute("y", y + 10);
    }

    // Si la bola está por encima del jugador, mover hacia arriba

  } else if (posY < y + 50 && direccionX == 1) {
    if (y > 20) {
      jugador2.setAttribute("y", y - 10);
    }
  }
}
