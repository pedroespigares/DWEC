/*EJERCICIO: Haz una función que ordene las notas de un array pasado como parámetro. Si le pasamos [4,8,3,10,5] debe devolver [3,4,5,8,10]. Pruébalo en la consola*/

function sortArray(array){
    return array.sort((a,b) => a - b);
}

console.log(sortArray([4,8,3,10,5]));