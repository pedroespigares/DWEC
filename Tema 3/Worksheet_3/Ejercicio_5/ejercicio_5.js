function saddlePoints(array) {
  solucion = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (
        mayorIgualATodos(array[i][j], i, array) &&
        menorIgualATodos(array[i][j], j, array[j])
      ) {
        solucion.push(i.toString() + j.toString());
      }
    }
  }

  return solucion;
}

function mayorIgualATodos(valor, posFila, array) {
  mayor = true;
  for (let i = 0; i < array[posFila] && mayor; i++) {
    if (valor < array[posFila][i]) {
      mayor = false;
    }
  }
  return mayor;
}

function menorIgualATodos(valor, posCol, array) {
  menor = true;
  for (let i = 0; i < array[posCol] && menor; i++) {
    if (valor > array[i][posCol]) {
      menor = false;
    }
  }
  return menor;
}

array = [
  [4, 5, 16, 7],
  [4, 5, 16, 7],
  [4, 5, 9, 7],
  [4, 5, 16, 7],
];

console.log(saddlePoints[array]);
