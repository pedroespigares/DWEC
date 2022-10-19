let age = parseInt(prompt("Introduce tu edad"));

if (age > 0 && age <= 5){
    alert("Debes estar en jardín de infancia");
}
else if(age >= 6 && age <= 11){
    alert("Debes estar en primaria");
}
else if(age >= 12 && age <= 16){
    alert("Debes estar en la ESO");
}
else if(age >= 17 && age <= 21){
    alert("Debes estar en bachillerato o ciclos");
}
else if(age >21){
    alert("Debes estar en universidad");
}