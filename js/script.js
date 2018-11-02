$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
    });

    $(".button__nav").on("click", function() {
        var target = $(this).data("target");
        $(target).toggleClass("nav__list--open");
    })
});