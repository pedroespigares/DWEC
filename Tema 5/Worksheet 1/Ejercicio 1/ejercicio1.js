window.onload = () => {
    let enlaces = document.getElementsByTagName("a");
    console.log("Hay ",enlaces.length," enlaces en la página");

    let penultimoEnlace = enlaces[enlaces.length-2].href;
    console.log("El penúltimo enlace es: ",penultimoEnlace);

    let enlacesGoogle = document.querySelectorAll("a[href*='google.es']");
    console.log("Hay ",enlacesGoogle.length," enlaces a Google");

    let numEnlacesTercerParrafo = document.querySelectorAll("p")[2].getElementsByTagName("a").length;
    console.log("Hay ",numEnlacesTercerParrafo," enlaces en el tercer párrafo");
};

