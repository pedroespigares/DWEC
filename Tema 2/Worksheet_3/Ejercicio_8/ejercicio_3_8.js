function contarPalabras(cadena){
    let contador = 0;
    let cadenaSpliteada = cadena.split(" ");
    for(let palabra of cadenaSpliteada){
        if(palabra != " " && palabra != ''){
            contador ++;
        }
    }
    return contador;
}

document.write(contarPalabras("              Hola que tal como estamos    bien uwu             "));