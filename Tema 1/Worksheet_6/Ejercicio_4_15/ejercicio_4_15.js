let numToGuess = parseInt(prompt("Jugador 1, introduzca un número"));
let num = undefined;


while(num != numToGuess){
    num = parseInt(prompt("Mete otro número"));
    if(num > numToGuess){
        alert("El número es menor");
    }
    else if(num < numToGuess){
        alert("El número es mayor");
    }
    else{
        alert("Ole ole");
    }
}