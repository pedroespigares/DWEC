window.onload = () => {
    lanzaPeticion(true);
    setInterval(lanzaPeticion, 5000);
};

var httpRequest;
var contador = 0;

function lanzaPeticion(inicial){
    httpRequest = new XMLHttpRequest();

    if(!inicial){
    httpRequest.onreadystatechange = trataRespuesta;
    } else {
    httpRequest.onreadystatechange = trataRespuesta_inicial;
    }
    httpRequest.open("GET", "datos.xml");
    httpRequest.send();
}

function trataRespuesta(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
        var datosUsuario = httpRequest.responseXML;

        if(contador <= datosUsuario.getElementsByTagName("remitente").length){
            var tabla = document.getElementsByTagName("tbody")[0];
            var fila = document.createElement("tr");
            var celda1 = document.createElement("td");
            var celda2 = document.createElement("td");
            var celda3 = document.createElement("td");
            var celda4 = document.createElement("td");
            var celda5 = document.createElement("td");

            celda1.textContent = datosUsuario.getElementsByTagName("remitente")[contador].textContent;
            celda2.textContent = datosUsuario.getElementsByTagName("destinatario")[contador].textContent;
            celda3.textContent = datosUsuario.getElementsByTagName("asunto")[contador].textContent;
            celda4.textContent = datosUsuario.getElementsByTagName("cuerpo")[contador].textContent;
            celda5.textContent = datosUsuario.getElementsByTagName("fecha")[contador].textContent;

            fila.appendChild(celda1);
            fila.appendChild(celda2);
            fila.appendChild(celda3);
            fila.appendChild(celda4);
            fila.appendChild(celda5);

            tabla.appendChild(fila);

            contador++;
        }
        } else {
          alert("There was a problem with the request.");
        }
    }
}

function trataRespuesta_inicial(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
        var datosUsuario = httpRequest.responseXML;

        for(var i = 0; i < datosUsuario.getElementsByTagName("remitente").length; i++){
            var tabla = document.getElementsByTagName("tbody")[0];
            var fila = document.createElement("tr");
            var celda1 = document.createElement("td");
            var celda2 = document.createElement("td");
            var celda3 = document.createElement("td");
            var celda4 = document.createElement("td");
            var celda5 = document.createElement("td");

            celda1.textContent = datosUsuario.getElementsByTagName("remitente")[contador].textContent;
            celda2.textContent = datosUsuario.getElementsByTagName("destinatario")[contador].textContent;
            celda3.textContent = datosUsuario.getElementsByTagName("asunto")[contador].textContent;
            celda4.textContent = datosUsuario.getElementsByTagName("cuerpo")[contador].textContent;
            celda5.textContent = datosUsuario.getElementsByTagName("fecha")[contador].textContent;

            fila.appendChild(celda1);
            fila.appendChild(celda2);
            fila.appendChild(celda3);
            fila.appendChild(celda4);
            fila.appendChild(celda5);

            tabla.appendChild(fila);

            contador++;
        }
        } else {
          alert("There was a problem with the request.");
        }
    }
}