MAIN = {
	
	init : function () {

		$(document).on('click', 'a[href=""], a[href^="#"]', function (e) {
		    e.preventDefault();
		});

		$('.hamburger-icon').click (function(){
            $(this).toggleClass('open');
            $('header nav').slideToggle();
        });

		$(".scrollTo").on('click', function(e) {
		     e.preventDefault();
		     var target = $(this).attr('href');
		     $('html, body').animate({
		       scrollTop: ($(target).offset().top - 60)
		     }, 500);
		});

	}
}


$(function () {
	
	MAIN.init();
	
});