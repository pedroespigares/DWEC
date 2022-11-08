let images = [
  "http://127.0.0.1:5500/Tema%205/Worksheet%201/Ejercicio%206/media/img_1.jpg",
  "http://127.0.0.1:5500/Tema%205/Worksheet%201/Ejercicio%206/media/img_2.jpg",
  "http://127.0.0.1:5500/Tema%205/Worksheet%201/Ejercicio%206/media/img_3.jpg",
  "http://127.0.0.1:5500/Tema%205/Worksheet%201/Ejercicio%206/media/img_4.jpg",
  "http://127.0.0.1:5500/Tema%205/Worksheet%201/Ejercicio%206/media/img_5.png",
  "http://127.0.0.1:5500/Tema%205/Worksheet%201/Ejercicio%206/media/img_6.jpg",
];

let anterior = document.getElementById("anterior");

let siguiente = document.getElementById("siguiente");

let imagen = document.getElementById("img");


anterior.addEventListener("click", () => {
  if (images.indexOf(imagen.src) != 0) {
    imagen.src = images[images.indexOf(imagen.src) - 1];
  }
});

siguiente.addEventListener("click", () => {
  if (images.indexOf(imagen.src) != images.length - 1) {
    imagen.src = images[images.indexOf(imagen.src) + 1];
  }
});
