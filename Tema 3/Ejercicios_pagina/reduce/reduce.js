let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];

let notaMedia =
  arrayNotas.reduce((total, nota) => {
    return total + nota;
  }, 0) / arrayNotas.length;

console.log(notaMedia);
