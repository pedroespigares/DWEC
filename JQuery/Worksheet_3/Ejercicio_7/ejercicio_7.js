$(document).ready(function() {
    $("#start").click(function() {
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        }, 5000);
    })
    
    $("#stop").click(function() {
        $("div").stop();
    });
});