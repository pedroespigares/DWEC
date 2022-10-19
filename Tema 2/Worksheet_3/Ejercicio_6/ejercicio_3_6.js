function subCadena(cadena1, cadena2){
    if(cadena1.includes(cadena2)){
        document.write(`La cadena 2 --> ${cadena2}</br>Está incluida en la cadena 1 --> ${cadena1}`);
    }
    else{
        document.write(`La cadena 2 --> ${cadena2}</br>NO Está incluida en la cadena 1 --> ${cadena1}`);
    }
}

subCadena("hola que tal","que tal")