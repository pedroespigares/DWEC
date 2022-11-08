let input = document.getElementById("value");

let button = document.getElementById("add");

let list = document.getElementById("list");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
});