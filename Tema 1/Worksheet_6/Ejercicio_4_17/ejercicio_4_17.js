for(let numero = 1; numero <=10; numero++){
    document.write(`<h1>Tabla del ${numero}</h1>`);
    for(let multiplo = 1; multiplo <=10; multiplo++){
        document.write(`${numero} x ${multiplo} = ${numero*multiplo} </br>`)
    }
}