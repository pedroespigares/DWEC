function combineTwoArrays(firstArray,secondArray){
    let newArray = [...firstArray,...secondArray];
    return newArray;
}

let firstArray = [6,7,8];
let secondArray = [9,10,11];

document.write(combineTwoArrays(firstArray,secondArray));