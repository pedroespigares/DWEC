function eliminarRepetidos(cadena){
    cadena = cadena.replace(/ /g, "")
    let cadenaSpliteada = cadena.split("");
    let resultado = [...new Set(cadenaSpliteada)];
    resultado = resultado.join("");
    return resultado;
}

document.write(eliminarRepetidos("asdasd dios que guapo jajaj"));