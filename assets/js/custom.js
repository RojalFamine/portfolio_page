(function ($) {
	
	"use strict";

	$(function() {
        $("#tabs").tabs();
    });

	var logoB = $(".logo-b");
	var logoW = $(".logo-w");
	var media = window.matchMedia("(min-width: 770px)");

	if(
		(media.matches) &&
		document.location.pathname === "/portfolio_page/" ||
		document.location.pathname === "/portfolio_page/index.html"
	) {
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

	  if(
		  document.location.pathname === "/portfolio_page/" ||
		  document.location.pathname === "/portfolio_page/index.html"
	    ) {
		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
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

// Comment functionality 

document
    .querySelector('.comment_form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        request.post(this, function (response, form) {
            displayComment(response.entity.id, response.entity);
            form.querySelector('input').value = '';
            form.querySelector('textarea').value = '';
        });
    });

request.get('https://skola-comment.000webhostapp.com/api.php?api=get', function (response) {
    for (const [id, data] of Object.entries(response.entities) ) {
        displayComment(id, data);
    }
});


/**
 * Parāda uz ekrāna jau esošo komentāru
 */
function displayComment(id, data) {
    let comment_block = document.querySelector('#comment_list'),
        template = comment_block.querySelector('.template'),
        new_comment = template.cloneNode(true);
        new_comment.classList.remove('template');

    let description = new_comment.querySelector('.comment__description');
    description.textContent = data.comment;

    let author = new_comment.querySelector('.comment__author');
    author.textContent = data.author;
    
    new_comment.setAttribute('data-id', id);

    comment_block.prepend(new_comment);
}

function myScroll(event) {
	event.preventDefault();
	document.querySelector('#my-skills').scrollIntoView({ 
		behavior: 'smooth' 
	});
}