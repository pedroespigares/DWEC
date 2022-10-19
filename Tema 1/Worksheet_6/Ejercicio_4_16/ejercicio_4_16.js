let numToGuess = parseInt(prompt("Jugador 1, introduzca un número"));
let num = parseInt(prompt("Jugador 2, introduzca un número"));

do{
    if(num > numToGuess){
        alert("El número es menor");
        num = parseInt(prompt("Prueba con otro número"));
    }
    else if(num < numToGuess){
        alert("El número es mayor");
        num = parseInt(prompt("Prueba con otro número"));
    }
}
while(num != numToGuess)

if(num === numToGuess){
    alert("Ole ole");
}