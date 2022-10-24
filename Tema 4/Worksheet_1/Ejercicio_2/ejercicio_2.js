window.onload = () => {
    let html = document.querySelector("html");
    html.addEventListener("mousemove", (e) => {
        console.log(`${e.clientX},${e.clientY}`);
    })
}