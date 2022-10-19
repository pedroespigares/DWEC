function sumAndSquare(...arguments){
    let acumulator = 0;
    for(let values of arguments){
        acumulator += values*values;
    }
    return acumulator;
}

document.write(sumAndSquare(2,4,3));