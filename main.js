$(function () {
    'use strict';
    //Adjust Slider Height
    var winH    = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
$('.slider .carousel-inner').height(winH - ( upperH + navH ));
});
