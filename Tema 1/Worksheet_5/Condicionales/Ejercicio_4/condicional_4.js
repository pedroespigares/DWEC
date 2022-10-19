let userNumber = parseInt(prompt("Introduce un número"));

if (userNumber > 100){
    userNumber = userNumber - (userNumber*0.15);
    alert(`El precio con descuento es de ${userNumber}`);
}