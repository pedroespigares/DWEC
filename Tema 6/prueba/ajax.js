window.onload = () => {
    let button = document.getElementById('peticion');

    button.addEventListener('click', lanzaPeticion);
};

var httpRequest;

function lanzaPeticion(){
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.open("GET", "prueba.xml");
    httpRequest.send();
}

function trataRespuesta(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
        //   alert(httpRequest.responseText);
        // var respuesta = JSON.parse(httpRequest.responseText);
        var datosUsuario = httpRequest.responseXML;
        document.body.innerHTML += `<br>${datosUsuario.getElementsByTagName("nombre")[0].textContent}`;
        } else {
          alert("There was a problem with the request.");
        }
    }
}