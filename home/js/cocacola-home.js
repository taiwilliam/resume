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

	$('.tag-taiwan a img').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.tag-taiwan a img').toggleClass('animated bounce')
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.tag-taiwan a img').toggleClass('animated bounce')
	});


	$('.tag-taiwan a img').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.map-taiwan').stop().toggleClass('open')
		$('.tag-taiwan img').stop().toggleClass('open')
		$('.map-main').stop().toggleClass('open')
	});

	$('.topmenu ul li a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
	});

});