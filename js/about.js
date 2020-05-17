jQuery(document).ready(function() {
	// Counter
	$('.approach-result_num span').counterUp({
		delay: 10,
		time: 1000
	});

	// Tool Tips
	var toolt = $('.director-name');

	if( $(window).width() < 980 ) {
		toolt.qtip('destroy', true);
	} else {
		toolt.each(function() {
			$(this).qtip({
				// show: 'click',
				// hide: 'click unfocus',
				content: {
					text: $(this).next('div')
				},
				style: {
					classes: 'qtip-bootstrap'
				},
				position: {
					my: 'top center',
					at: 'center center',
					target: 'mouse'
				}
			});
		});
	}

	// // gsap animation
	// // Hero Header
	// var controller = new ScrollMagic.Controller(),
	// 		moveDown = new TimelineMax();

	// moveDown
	// .to(".hero-image h2", 1, {autoAlpha: 0, y:60, ease: Power1.easeOut})

	// // Make a scrollMagic Scene
	// var scene = new ScrollMagic.Scene({
	// 	triggerElement: ".contents",
	// 	duration: "80%",
	// 	triggerHook: 0.85
	// })

	// .addIndicators()
	// .setTween(moveDown).addTo(controller);

	// // Family Photo
	// var controller = new ScrollMagic.Controller(),
	// 		slideUp = new TimelineMax();

	// $(".contents section").each(function() {
	// 	// var block = $(this).find("section");

	// 	slideUp
	// 	.from("section", 1, {autoAlpha: 0, y:60, ease: Power1.easeIn})

	// 	// Make a scrollMagic Scene
	// 	var scene = new ScrollMagic.Scene({
	// 		triggerElement: ".contents section",
	// 		// duration: "80%",
	// 		// triggerHook: 0.35
	// 	})

	// 	// .addIndicators()
	// 	.setTween(slideUp).addTo(controller);

	// });
});