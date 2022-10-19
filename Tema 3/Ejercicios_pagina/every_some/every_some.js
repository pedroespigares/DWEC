let diasSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

let diasS = diasSemana.some((dia) => dia.charAt(0) == "S");

let diass = diasSemana.every((dia) => dia.charAt(dia.length) == "s");

console.log(diasS);
console.log(diass);