function combineAllArrays(...arguments) {
  let newArray = [];
  for (let arrays of arguments) {
    newArray.push(...arrays);
  }
  return newArray;
}

document.write(combineAllArrays([1, 2, 4], [6, 8, 9], ["hola", "que", "tal"]));
