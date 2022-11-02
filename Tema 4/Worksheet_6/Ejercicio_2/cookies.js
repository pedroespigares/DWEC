let message = document.getElementById("username");
let deleteButton = document.getElementById("deleteCookies");
let form = document.querySelector("form");
let bgcolor = document.getElementById("bgcolor");
let pcolor = document.getElementById("pcolor");
let fontSize = document.getElementById("fontSize");
let body = document.querySelector("body");

if (getCookie("username")) {
  message.innerHTML = "Username: " + getCookie("username");
} else {
  let username = prompt("Introduzca su nombre de usuario");
  document.cookie = `username=${username}; max-age=300`;
  message.innerHTML = "Username: " + getCookie("username");
}

// Si las cookies existen, se cambiará los estilos correspondientes con el valor de la cookie.

if (getCookie("BGColor")) {
  body.style.backgroundColor = getCookie("BGColor");
}

if (getCookie("PColor")) {
  message.style.backgroundColor = getCookie("PColor");
}

if (getCookie("fontSize")) {
  message.style.fontSize = getCookie("fontSize") + "px";
}

// Al enviar el formulario se cambiará el valor de las cookies.

form.addEventListener("submit", () => {
  document.cookie = `BGColor=${bgcolor.value}`;
  document.cookie = `PColor=${pcolor.value}`;
  document.cookie = `fontSize=${fontSize.value}`;
});

deleteButton.addEventListener("click", () => {
  document.cookie = "username=" + getCookie("username") + "; max-age=0";
});

// Ejercicio 3

// Si no definimos tiempo de expiración a las cookies, estas se borrarán al cerrar el navegador por defecto,
// por lo que en estos ejercicios, quitando la cookie del nombre de usuario, todas las otras cookies serán eliminadas
// cuando se cierre el navegador.

// Funciones del ejercicio 4

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(cname) {
  document.cookie = cname + "=; max-age=0";
}
