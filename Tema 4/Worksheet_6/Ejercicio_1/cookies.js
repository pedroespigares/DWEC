let message = document.getElementById("username");
let deleteButton = document.getElementById("deleteCookies");

if (getCookie("username")) {
  message.innerHTML = "Username: " + getCookie("username");
} else {
  let username = prompt("Introduzca su nombre de usuario");
  document.cookie = `username=${username}; max-age=300`;
  message.innerHTML = "Username: " + getCookie("username");
}

deleteButton.addEventListener("click", () => {
  document.cookie = "username=" + getCookie("username") + "; max-age=0";
  location.reload();
});

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
