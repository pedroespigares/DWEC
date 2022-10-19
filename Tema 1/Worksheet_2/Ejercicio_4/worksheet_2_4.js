let celcius;
let fahrenheit;
let celciusToFahrenheit;
let fahrenheitToCelcius;

celcius = 30;
fahrenheit = 67;

celciusToFahrenheit = (celcius * 1.8) + 32;

fahrenheitToCelcius = (fahrenheit - 32)/1.8;

document.write(`${celcius}ºC is ${celciusToFahrenheit}ºF </br>`);
document.write(`${fahrenheit}ºF is ${fahrenheitToCelcius}ºC </br>`);