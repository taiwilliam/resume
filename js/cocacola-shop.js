jQuery(document).ready(function($) {

	$('.pagetop').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
			}, 1000);
	});

	$('.asidemenu ul li a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).parent().find('ul').stop().slideToggle(500);
		$(this).parent().siblings().find('ul').slideUp(500);
	});

	$('.burger-menu').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.asidemenu').toggleClass('open');
	});

	$(".burger-menu").click(function () {
		$(this).toggleClass("menu-on");
	});

	$('.aside ul li').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).find('ul').slideToggle(500);
	});

	$('.topmenu ul li a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
	});

});