
/*=============================================
Table Of Contents
================================================

 PRELOADER JS
 MENU JS
 TIMER JS
 SECTIONS BACKGROUNDS
 TESTIMONIAL SLIDER JS
 BLOG SLIDER JS
 SPONSORS SLIDER JS
 VENOBOX JS
 WOW ANIMATION JS
 SNOW FALL JS
 

Table Of Contents end
================================================
*/
(function($) {
    'use strict';

    jQuery(document).on('ready', function() {

        /* PRELOADER JS */
		
		$(window).on('load', function() {
            $('.loadscreen').fadeOut();
            $('.preloader').delay(0).fadeOut('slow');
        });
		
	
        /* MENU JS */
		
        $(window).scroll(function() {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        });
		
        $('a.js-scroll-trigger').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 48
            }, 1000);
            e.preventDefault();
        });
		
        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 54
        });

    /* VENOBOX JS */

    $('.venobox').venobox({
        numeratio: true,
        titleattr: 'data-title',
        titlePosition: 'bottom',
        spinner: 'wave'
    });

    /* WOW ANIMATION JS */

    new WOW().init();

	/*  SNOW FALL JS */
	
	$('.home-static-2').snowfall({
	  round: true,
	  flakeCount : 300,
	  maxSpeed : 5,
	  maxSize : 5
	});
	
})(jQuery);