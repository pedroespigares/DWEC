window.onload = () => {
    let temaNormal = document.getElementById("temaNormal");
    
    let temaMinimalista = document.getElementById("temaMinimalista")

    temaMinimalista.addEventListener("click", () => {
        let html = document.querySelector("html");
        html.style.backgroundColor = "white";

        let body = document.querySelector("body");
        body.removeAttribute("style");

        let nav = document.querySelector("nav");
        nav.removeAttribute("style");

        let h1 = document.querySelector("h1");
        h1.removeAttribute("style");

        let marco = document.querySelector("span");
        marco.removeAttribute("style");

        let parrafoNormal = document.getElementById("soloNormal");
        parrafoNormal.innerHTML = "";
    })

    temaNormal.addEventListener("click", () =>{
        let html = document.querySelector("html");
        html.style.backgroundColor = "#FFFFCC"

        let body = document.querySelector("body");
        body.style.paddingLeft = "10px";


        let nav = document.querySelector("nav");
        nav.style.backgroundColor = "#EEEEFF";
        nav.style.color = "blue";
        nav.style.fontWeight = "bold";
        nav.style.marginRight = "50px";
        nav.style.borderColor = "blue";
        nav.style.borderTopWidth = "1px";
        nav.style.borderLeftWidth = "1px";
        nav.style.borderStyle = "solid";
        nav.style.padding = "5px";


        let h1 = document.querySelector("h1");
        h1.style.fontFamily = "Arial, Helvetica, sans-serif";
        h1.style.color = "#050233";

        let parrafoNormal = document.getElementById("soloNormal");
        parrafoNormal.innerHTML = "Este párrafo debe ser solo visible en el tema normal";
        parrafoNormal.style.fontWeight = "bold";

        let marco = document.querySelector("span");
        marco.style.backgroundColor = "yellow";
        marco.style.borderWidth = "1px";
        marco.style.borderColor = "black";
        marco.style.borderStyle = "solid";
        marco.style.padding = "7px";
        marco.style.paddingRight = "70%";

    })
    
}