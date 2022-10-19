function treasureHuntMaker(rows, columns) {
  if (rows < 5 && columns < 5) {
    return false;
  }
  let x = Math.floor(Math.random() * rows);
  let y = Math.floor(Math.random() * columns);

  map = [];

  // Creación de matrix con el tamaño definido por parámetro

  for (let i = 0; i < rows; i++) {
    map[i] = [];
    for (let j = 0; j < columns; j++) {
      map[i][j] = [];
    }
  }

  // Introduce dentro de la posición aleatoria generada la fila y columna correspondiente

  map[x][y].push(x + 1, y + 1);
  let continueMaking = true;

  // El bucle va rellenando las posiciones vacías con sus valores aleatorios hasta que x e y sean 0, lo cual hará que la ejecución salga del bucle

  while (continueMaking) {
    let aux = [x, y];
    x = Math.floor(Math.random() * rows);
    y = Math.floor(Math.random() * columns);

    if (map[x][y] == "") {
      map[x][y] = [aux[0] + 1, aux[1] + 1];
    }
    if (x == 0 && y == 0) {
      continueMaking = false;
    }
  }

  // El for rellena todas las casillas restantes con números aleatorios

  for (let i = 0; i < map.length; i++) {
    for (j = 0; j < map[i].length; j++) {
      if (map[i][j] == "")
        map[i][j] = [
          Math.floor(Math.random() * rows) + 1,
          Math.floor(Math.random() * columns) + 1,
        ];
    }
  }
  return map;
}

console.log(treasureHuntMaker(5, 5));
