$(document).ready(function() {
    var input = $("#psw");
    var message = $("#strength");
    input.keyup(function() {
        var psw = input.val();
        if (psw.length < 5) {
            message.text("No segura");
        } else if(psw.length > 5 && psw.length < 8) {
            message.text("Medianamente segura");
        } else if(psw.length > 8) {
            message.text("Segura");
        }
    });
});