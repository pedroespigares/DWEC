let month = prompt("Introduzca un mes");

switch(month){
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        alert(`El mes ${month} tiene 31 días`);
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        alert(`El mes ${month} tiene 30 días`);
        break;
    case "febrero":
        alert("Febrero tiene 28 días ")
        break;
}