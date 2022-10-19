let alerts = ["Hey, you are awesome", "You are so wondeful", "What a marvel you are", "You're so lovely", "You're so sweet I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];

showAlert = (name) => {
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);
}

showAlert("Pedro")