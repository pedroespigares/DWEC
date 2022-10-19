function treasureHuntMaker(rows, columns) {
  if (columns < 5 && rows < 5) {
    return false;
  }

  x = Math.floor(Math.random() * rows) + 1;
  y = Math.floor(Math.random() * columns) + 1;
  x_number = x+1;
  y_number = y+1;
  number = x_number.toString() + y_number.toString();
  map = new Array(columns);
  
  for (k = 0; k < rows; k++) {
    map[k] = new Array(rows);
  }

  map[x][y] = number;


  console.log(map);
}

treasureHuntMaker(6, 6);
