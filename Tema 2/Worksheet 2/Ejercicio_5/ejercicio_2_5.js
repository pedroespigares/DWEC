// Crea una web para resolver ecuaciones de segundo grado

function secondGradeEquation(a, b, c) {
  let result_1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  let result_2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  return (
    "Resultado 1 --> " +
    result_1.toFixed(5) +
    "</br>" +
    "Resultado 2 --> " +
    result_2.toFixed(5)
  );
}

document.write(secondGradeEquation(15, 5, -7));
