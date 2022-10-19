function consonantesVocales(cadena){
    let cadenaSpliteada = cadena.split("");
    let vocales = [];
    let consonantes = [];
    for(let caracter of cadenaSpliteada){
        switch(caracter){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vocales.push(caracter);
                break;
            case "b":
            case "c":
            case "d":
            case "f":
            case "g":
            case "h":
            case "j":
            case "k":
            case "l":
            case "m":
            case "n":
            case "ñ":
            case "p":
            case "q":
            case "r":
            case "s":
            case "t":
            case "v":
            case "w":
            case "x":
            case "y":
            case "z":
                consonantes.push(caracter);
                break;
        }
    }
    let resultado = [...consonantes,...vocales];
    return resultado.join("");
}

document.write(consonantesVocales("hol que tal esto es una cadena de texto"));