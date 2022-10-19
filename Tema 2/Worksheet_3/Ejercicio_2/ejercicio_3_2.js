function strInfo(cadena) {
  if (cadena.toUpperCase() === cadena) {
    document.write("La cadena está entera en mayúsculas");
  } else if (cadena.toLowerCase() === cadena) {
    document.write("La cadena está entera en minúsculas");
  } else {
    document.write("La cadena es una mezcla entre ambas");
  }
}

strInfo("prueba de mezcla");
