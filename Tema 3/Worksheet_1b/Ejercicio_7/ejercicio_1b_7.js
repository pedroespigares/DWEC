let array = [1,5,6,3];

const sumaArray = (array) => {
    let acumulator = 0;
    for(value of array){
        acumulator += value;
    }
    return acumulator;
}



document.write(sumaArray(array));