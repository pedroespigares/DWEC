// Simular 6000 tiradas del ejercicio 2

function lanzamiento() {
  return Math.floor(Math.random() * 6) + 1;
}

function simulacionTiradas() {
  let cantidad_1 = 0;
  let cantidad_2 = 0;
  let cantidad_3 = 0;
  let cantidad_4 = 0;
  let cantidad_5 = 0;
  let cantidad_6 = 0;

  for (i = 0; i < 6000; i++) {
    ocurrencia = lanzamiento();
    if(ocurrencia === 1){
        cantidad_1 ++;
    }
    else if(ocurrencia === 2){
        cantidad_2 ++;
    }
    else if(ocurrencia === 3){
        cantidad_3 ++;
    }
    else if(ocurrencia === 4){
        cantidad_4 ++;
    }
    else if(ocurrencia === 5){
        cantidad_5 ++;
    }
    else if(ocurrencia === 6){
        cantidad_6 ++;
    }
    }

    document.write("<h1>Número de ocurrencias</h1></br>");
    document.write(`1 ---> ${cantidad_1} ` + '(' + ((cantidad_1*100)/6000).toFixed(2) + '%)</br>');
    document.write(`2 ---> ${cantidad_2} ` + '(' + ((cantidad_2*100)/6000).toFixed(2) + '%)</br>');
    document.write(`3 ---> ${cantidad_3} ` + '(' + ((cantidad_3*100)/6000).toFixed(2) + '%)</br>');
    document.write(`4 ---> ${cantidad_4} ` + '(' + ((cantidad_4*100)/6000).toFixed(2) + '%)</br>');
    document.write(`5 ---> ${cantidad_5} ` + '(' + ((cantidad_5*100)/6000).toFixed(2) + '%)</br>');
    document.write(`6 ---> ${cantidad_6} ` + '(' + ((cantidad_6*100)/6000).toFixed(2) + '%)</br>');
  }


simulacionTiradas();