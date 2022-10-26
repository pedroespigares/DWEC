let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailRegularExpression = new RegExp(
    "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"
  );
  let emailInput = document.getElementById("email");
  let email = emailInput.value;
  let emailResult = emailRegularExpression.test(email);

  let DNIRegularExpression = new RegExp("^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$");
  let dniInput = document.getElementById("dni");
  let dni = dniInput.value;
  let DNIResult = DNIRegularExpression.test(dni);

  let usernameRegularExpression = new RegExp(
    "^(?=.*[A-Za-z])(?=.*d)(?=.*[.,;])[A-Za-zd.,;]{8,}$"
  );
  let usernameInput = document.getElementById("username");
  let username = usernameInput.value;
  let usernameResult = usernameRegularExpression.test(username);

  let phoneRegularExpression = new RegExp("^\\d{9}$");
  let phoneInput = document.getElementById("phoneNumber");
  let phone = phoneInput.value;
  let phoneResult = phoneRegularExpression.test(phone);

  if (!emailResult) {
    emailInput.style.border = "red solid 2px";
  } else {
    emailInput.removeAttribute("style");
  }
  if (!DNIResult) {
    dniInput.style.border = "red solid 2px";
  } else {
    dniInput.removeAttribute("style");
  }
  if (!usernameResult) {
    usernameInput.style.border = "red solid 2px";
  } else {
    usernameInput.removeAttribute("style");
  }
  if (!phoneResult) {
    phoneInput.style.border = "red solid 2px";
  } else {
    phoneInput.removeAttribute("style");
  }

  if (emailResult && DNIResult && usernameResult && phoneResult) {
    return true;
  } else {
    return false;
  }
});
