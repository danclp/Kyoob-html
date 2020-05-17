// Google Map
/*global google:true*/
var map,
	desktopScreen = Modernizr.mq( "only screen and (min-width:1024px)" ),
	zoom = desktopScreen ? 18 : 17,
	scrollable = draggable = !Modernizr.hiddenscroll || desktopScreen,
	isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));

function initMap() {
	var myLatLng = {lat: 1.282878, lng: 103.84256490000007};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: zoom,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: scrollable,
		draggable: false,
		styles: [{"stylers": [{ "saturation": -100 }]}],
	});

	var locations = [
		{
			title: 'PEPSized Coffee',
			position: {lat: 1.282878, lng: 103.84256490000007},
			icon: {
				url: isIE11 ? "images/mark.png" : "images/mark.svg",
				scaledSize: new google.maps.Size(90, 90)
			}

		}				
	];
	
	locations.forEach( function( element, index ){	
		var marker = new google.maps.Marker({
			position: element.position,
			map: map,
			title: element.title,
			icon: element.icon,
		});
	});	
}
// End of Google Map

// gsap animation
jQuery(document).ready(function($) {
	var controller = new ScrollMagic.Controller(),
			animateIn = new TimelineMax();

	animateIn
	.from(".about-section_contents", 1, {autoAlpha: 0, x:60, ease: Power1.easeOut})

	// Make a scrollMagic Scene
	var scene = new ScrollMagic.Scene({
		triggerElement: ".about-section",
		// duration: "80%",
		triggerHook: 0.35
	})

	// .addIndicators()
	.setTween(animateIn).addTo(controller);

	var controller = new ScrollMagic.Controller(),
			slideUp = new TimelineMax();

	slideUp
	.from(".work-section_category", 1, {autoAlpha: 0, y:60, ease: Power1.easeIn})

	var scene = new ScrollMagic.Scene({
		triggerElement: ".work-section",
		triggerHook: 0.5
	})

	// .addIndicators()
	.setTween(slideUp).addTo(controller);

	var controller = new ScrollMagic.Controller(),
			fadeIn = new TimelineMax();

	fadeIn
	.from(".contact-section", 1, {autoAlpha: 0, y:60, ease: Power1.easeIn})

	var scene = new ScrollMagic.Scene({
		triggerElement: ".contact-section",
		triggerHook: 0.6
	})

	// .addIndicators()
	.setTween(fadeIn).addTo(controller);
});