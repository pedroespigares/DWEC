let firstGrade = parseFloat(prompt("Introduzca la nota del primer examen"));
let secondGrade = parseFloat(prompt("Introduzca la nota del segundo examen"));

let firstWork = parseFloat(prompt("Introduzca la nota del primer trabajo"));
let secondWork = parseFloat(prompt("Introduzca la nota del segundo trabajo"));

let gradesAverage = (firstGrade + secondGrade) / 2;
let worksAverage = (firstWork + secondWork) / 2;

let gradesPercentage = gradesAverage * (3/4);
let worksPercentage = gradesAverage * (1/4);

let finalMark = gradesPercentage + worksPercentage;

if ((firstGrade > 4.5 && secondGrade > 4.5 && firstWork > 4.5 && secondWork > 4.5) && finalMark >= 5){
    alert("¡Has aprobado!")
}
else{
    alert("Nos vemos en junio")
}