// Se muestre una imagen random de entre 3 posibles

let images = ["images/close-cat.png","images/open-cat.png","images/simp-card.jpg"];

let randomNum = Math.floor(Math.random() * images.length);

document.write(`<img src="${images[randomNum]}" width="305" height="312">`);