function addOnlyNums(...arguments){

    let acumulator = 0;
    for(let value of arguments){
        if(typeof value == "number"){
            acumulator += value;
        }
    }
    return acumulator;
}

document.write(addOnlyNums(1,'cat',3,4,true));