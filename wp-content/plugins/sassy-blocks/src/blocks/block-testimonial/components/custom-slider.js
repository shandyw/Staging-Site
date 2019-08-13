(function($) {
	var blog = $(".my-blogs");
	blog.owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		// navText: ["Prev", "Next"],
		navText: true,
		dots: true,
		lazyLoad: true,
		center: false,
		autoplay: true,
		autoplayTimeout: 6000,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		items: 1,
		mouseDrag: false
	});
})(jQuery);
