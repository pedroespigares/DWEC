let array = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23],
];

function treasureHunt(map){
  posicionActual = 11;
  x = parseInt(posicionActual / 10) - 1;
  y = parseInt(posicionActual % 10) - 1;

  while(map[x][y] != posicionActual){
      siguientePosicion = map[x][y];
      posicionActual = siguientePosicion;
      document.write(siguientePosicion, "<br>")
      x = parseInt(posicionActual / 10) - 1;
      y = parseInt(posicionActual % 10) - 1;
  }
}

treasureHunt(array);
