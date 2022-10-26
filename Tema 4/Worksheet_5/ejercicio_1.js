function validateUppercase(string){
    let regularExpression = new RegExp("^[a-z]*[A-Z][a-z]*$")
    return regularExpression.test(string)
}

function validateSpecialCharacters(string){
    let specialCharacters = new RegExp("[!@#$%^&]")
    return specialCharacters.test(string);
}

function validateEmail(string){
    let regularExpression = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$")
    return regularExpression.test(string);
}

function validateCreditNumber(string){
    let regularExpression = new RegExp("^([0-9]{4}[\s-]?){3}([0-9]{4})$");
    return regularExpression.test(string);
}

function validateLength(string){
    let regularExpression = new RegExp("^.{8,}$");
    return regularExpression.test(string);
}

function validateNumber(string){
    return RegExp(".*[0-9].*").test(string);
}

console.log(validateUppercase("holA"));
console.log(validateSpecialCharacters("hola!"))
console.log(validateEmail("pedritoesp04@gmail.com"));
console.log(validateCreditNumber("1234-1234-1234-1234"));
console.log(validateLength("pruebade8caracteres"));
console.log(validateNumber("hola123"));