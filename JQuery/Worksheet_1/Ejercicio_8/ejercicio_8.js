$(document).ready(function() {
    $("div:nth-child(1)").css("font-size", "20px");
    $("div:nth-child(2)").css("font-size", "22px");
    $("div:nth-child(3)").css("font-size", "24px");

    $("h3").click(function() {
        $(this).siblings().toggle("slow");
    });

    $("p").mouseover(function() {
        $(this).css("background-color", "yellow");
    });

    $("p").mouseout(function() {
        $(this).css("background-color", "white");
    });
});