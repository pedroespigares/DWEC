// let miVariable

// console.log(`El valor de mi variable es = ${miVariable}`);
// Valores nulos



// miVariable = null;

// console.log("El valor de mi variable es = " + miVariable);

// Valores numéricos

// miVariable = 32;

// console.log("El valor de mi variable es = " + miVariable);

// Valores booleanos

// miVariable = true;

// console.log("El valor de mi variable es = " + miVariable);


let a = 7;
let b = 5;
let booleano = true;


// && es un AND y || es un OR
// Prompt es un input
// let edad = prompt("Introduce tu edad");
// ParseInt es para convertir a int
// alert()
// Para levantar ventana
// parseInt()
// console.log(edad)
switch(a){
    case 3:
        console.log("A vale 3");
        console.log("FIN DEL case");
        break;
    case 5:
        console.log("A vale 5");
        console.log("FIN DEL case");
        break;
    default:
        console.log("A vale cualquier otra cosiña q no sea 3 o 5")
}

for (let i=10; i>=0;i--){
    document.write(i + "</br>");
}


// Deficion de arrays y recorrido del mismo

let nombres = ["pepe","juan","sara", "pedro"];

for (let position = 0; position < nombres.length; position ++){
    document.write(nombres[position] + "</br>");
}

// Deficion de arrays y recorrido con el for of (like python uwu)
// For in devuelve la clave del valors

for (let name of nombres)
    document.write(name + "</br>");


// While

let contador = 0

while(contador<=10){
    document.write(contador + "</br>");
    contador++;
}

// Do while

contador = 11

do{
    document.write(contador + "</br>");
    contador++;
}
while(contador<=10);


// While mientras no encontrado

// let encontrado = false;

// while(!encontrado){
//     Busco
//     Si lo encuentro --> encontrado = True
// }


// Funciones --> El (...[array]) saca todos los valores de la array
// Valores por defecto igual que en python

function suma(a=0,b=0,c=0){
    let resultado = a + b + c;

    document.write(resultado);
}

// Para parámetros indefinidos se utiliza el ...

function sumaIndefinido(...numeros){

    let contador = 0;
    for(let numero of numeros){
        contador += numero;
        
    }
    document.write(contador);
}

let numeros = [1,2,3];

// El ... puede servir para meter los valores de los arrays dentro de otro array nuevo

let otros = [9,10];

let nuevosDatos = [...otros,1,4,5];
