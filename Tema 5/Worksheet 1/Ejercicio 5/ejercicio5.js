let add = document.getElementById("add");

let inputsDivs = document.getElementById("files");

add.addEventListener("click", (e) => {
    e.preventDefault()
    let input = document.createElement("input");
    input.type = "file";
    inputsDivs.appendChild(input);
});