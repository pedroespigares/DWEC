function undefinedAdd(...numbers){

    let acumulator = 0;
    for(let number of numbers){
        acumulator += number;
        
    }
    return acumulator;
}

document.write(undefinedAdd(4,5,6,7,8));