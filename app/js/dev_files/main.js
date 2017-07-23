$(document).ready(function(){
	// fixed navbar
	/*$(window).scroll(function(){
		var menu = $('.header'),
				menuParent= menu.parent(),
				menuScrollClass = 'header-fixed',
				headerHeight = menu.outerHeight();

		if ($(this).scrollTop() > 0) {
			menu.addClass(menuScrollClass);
			menuParent.css('padding-top', headerHeight + 'px');

		} else {
			menu.removeClass(menuScrollClass);
			menuParent.css('padding-top', '0');
		};
	});*/

	// go to anchor
	/*$(".nav__ul").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),
				headerHeight = $('.header').outerHeight();

		$(".nav__ul").children('li').removeClass('active');
		$(this).parent('li').addClass('active');

			var anchor = $(id).offset().top - headerHeight;
			$('body, html').animate({scrollTop: anchor}, 600);
	});*/

	// burger ico
	$('#menuButton').on('click', function (event){
		event.preventDefault();
		$(this).toggleClass('is-active');
		$('.nav__ul').toggleClass('nav-visible');

		if ($("#menuButton").hasClass("is-active")) {
				$(".nav__ul").on("click","a", function (event) {
				event.preventDefault();
				$(".nav__ul").removeClass('nav-visible');
				$('#menuButton').removeClass('is-active')
		});
		} else { return; }
	});

});