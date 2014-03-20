(function($, window) {
    'use strict';

    // Dom Ready
    $(function () {

        // Initializes the wallpaper
        $("#cover").wallpaper({
            source: "img/cover.jpg"
        });

        // Initialize the headlines carousel
        $(".headlines").owlCarousel({

            // Most important owl features
            items: 1,
            itemsCustom: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            itemsScaleUp: false,

            // Basic Speeds - set your speeds in milliseconds here!
            slideSpeed: 400,
            paginationSpeed: 800,
            rewindSpeed: 1000,

            // Autoplay
            autoPlay: true,
            stopOnHover: true

        });

        // Do not render for IE 8 or less
        if($('html.lt-ie9').length <= 0) {
            // Initialize all WOW effects
            new WOW().init();
        }
 
        var scrolled = false,
            $profileContainer = $("#cover .profile-container"),
            $window = $(window),
            initCharts = function() {
                $('.chart').each(function() {
                    var $el = $(this);
                    if($.inviewport($el, {threshold : -80})) {
                        setTimeout(function() {
                            $el.easyPieChart({
                                lineWidth: 10,
                                barColor: '#0875C3',
                                trackColor: '#dfe0e0',
                                scaleColor: false,
                                size: 120,
                                onStep: function(from, to, percent) {
                                    $(this.el).find('.percent').text(Math.round(percent));
                                }
                            });
                        }, 300);
                    }
                });
            },
            handleProfileContainer = function() {
                if (1 - $window.scrollTop() / 200 > -20) {
                    $profileContainer.fadeTo(1, 1 - $window.scrollTop() / 500);
                }
            };
 
        $(window).scroll(function () {
            scrolled = true;
        });
 
        window.setInterval(function () {
            if (scrolled) {
                handleProfileContainer();
                initCharts();

                scrolled = false;
            }
        }, 50);
 
        
    });

})(jQuery, window);
