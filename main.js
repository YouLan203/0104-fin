(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
        dotData: true,
    });

})(jQuery);

