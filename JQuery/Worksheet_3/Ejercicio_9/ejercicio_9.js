$(document).ready(function() {
    $("#start").click(function() {
        $("div").animate({
            left: '+=200px',
            backgroundColor: '#0000FF',
            top : '-=500px'
        }, 3000);
    });

    $("#stop").click(function() {
        $("div").stop();
    });
});