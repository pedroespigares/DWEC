let fechaHoy = new Date();

document.write(`Fecha actual --> ${fechaHoy} </br></br>`);

let fecha85 = fechaHoy.setDate(fechaHoy.getDate() + 85);
fecha85 = new Date(fecha85);

document.write(`Fecha actual + 85 --> ${fecha85} </br></br>`);

let fecha187 = fechaHoy.setDate(fechaHoy.getDate() - 187);
fecha187 = new Date(fecha187);

document.write(`Fecha actual - 187 --> ${fecha187} </br></br>`);

fecha85 = fecha85.setFullYear(fecha85.getFullYear() + 2);
fecha85 = new Date(fecha85);

document.write(`Fecha85 + 2 años --> ${fecha85} </br></br>`);

fecha187 = fecha187.setHours(fecha187.getHours() - 24);
fecha187 = new Date(fecha187);

document.write(`Fecha187 - 24 horas --> ${fecha187} </br></br>`);

fechaResto = fecha85 - fecha187;
fechaResto = new Date(fechaResto)

document.write(`Fecha Resto --> ${fechaResto}`);
