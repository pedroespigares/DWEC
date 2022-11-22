window.onload = () => {
    let input = document.getElementById("username");
    
    
    let boton = document.getElementById("boton");

    boton.addEventListener("click", lanzaPeticion);
};

var httpRequest;

function lanzaPeticion(){
    httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", `http://www.omdbapi.com/?apikey=b8d85a5&s=${document.getElementById("username").value}`, true);
    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.send();
}

function trataRespuesta(){
    document.getElementById("resultado").innerHTML = "";
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
        var respuesta = JSON.parse(httpRequest.responseText);
        for(let i = 0; i < respuesta.Search.length; i++){
            document.getElementById("resultado").innerHTML += `<li>${respuesta.Search[i].Title}<br><img src="${respuesta.Search[i].Poster}"></li>`;
        }
        } else {
          alert("There was a problem with the request.");
        }
    }
}