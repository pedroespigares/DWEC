window.onload = () => {
    let input = document.getElementById("username");
    input.addEventListener("keyup", lanzaPeticion);
};

var httpRequest;

function lanzaPeticion(){
    httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", `comprueba.php?username=${document.getElementById("username").value}`, true);
    httpRequest.onreadystatechange = compruebaNombre;
    httpRequest.send();
}

function compruebaNombre(){
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        let respuesta = httpRequest.responseText;
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = respuesta;
    }
}