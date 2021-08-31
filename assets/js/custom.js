(function ($) {
	
	"use strict";

	$(function() {
        $("#tabs").tabs();
    });

	var logoB = $(".logo-b");
	var logoW = $(".logo-w");

	if(document.location.pathname === "/home.php") {
		logoW.addClass("hide-logo");
		
	}
	else {
		logoB.addClass("hide-logo");
	}

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $(window).height();
	  var header = $('header').height();
	  var section = $('.section').height();
	  var logoB = $(".logo-b");
	  var logoW = $(".logo-w");
	  
	 

	  if(document.location.pathname === "/home.php") {
		if (scroll >= box - header) {
			$("header").addClass("background-header");
			logoB.ramoveClass("hide-logo");
			logoW.addClass("hide-logo");
		} else {
			$("header").removeClass("background-header");
			logoB.addClass("hide-logo");
		}
	  }
	  else {
		if (scroll >= box - section) {
			$("header").addClass("background-header");
			logoW.addClass("hide-logo");
			logoB.removeClass("hide-logo");
		} else {
			$("header").removeClass("background-header");
			logoB.addClass("hide-logo");
			logoW.removeClass("hide-logo");
		}
	  }
	});
	

	$('.schedule-filter li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.schedule-filter li').removeClass('active');
        $(this).addClass('active');
        if (tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function() {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);

// Go Down Button 

jQuery(document).ready(function (){

	jQuery("#click").click(function (e){
		e.preventDefault();
		if(jQuery(window).scrollTop() + jQuery(window).height() == jQuery(document).height())  {
				jQuery('html, body').animate({scrollTop : 0},1500);
					// return false; 
				}
		else {jQuery('html, body').animate({ scrollTop: window.pageYOffset + jQuery(window).height() + 50}, 2000);}
	});

	jQuery(window).scroll(function() {
	var ele = jQuery('.icon-to-change');
	if(jQuery(window).scrollTop() + jQuery(window).height() == jQuery(document).height()) {
			(ele.hasClass('fa-angle-double-down'))
				ele.removeClass('fa-angle-double-down')
				.addClass('fa-angle-double-up')         
	}
	else{
			ele.addClass('fa-angle-double-down')
			.removeClass('fa-angle-double-up')
		}
	});
});