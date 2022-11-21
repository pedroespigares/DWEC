window.onload = () => {
    let button = document.getElementById('validar');

    button.addEventListener('click', lanzaPeticion);
};

var httpRequest;

function lanzaPeticion(){
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.open("GET", "usuarios.json");
    httpRequest.send();
}

function trataRespuesta(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
        var respuesta = JSON.parse(httpRequest.responseText);
        respuesta = respuesta.usuarios;
        var usuario = document.getElementById('username').value;

        for (var i = 0; i < respuesta.length; i++) {
            if (respuesta[i].username == usuario) {
                document.getElementById("resultado").innerHTML = "Usuario no disponible";
                return;
            } else {
                document.getElementById("resultado").innerHTML = "Usuario disponible";
            }
        }
        } else {
          alert("There was a problem with the request.");
        }
    }
}