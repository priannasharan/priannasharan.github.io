$(document).ready(function(){
	$('#menu').slicknav({
			prependTo:'header',
			duration: 500,
	});
});

$(document).ready(function(){
	jQuery('#home-slider').flexslider({
	    animation: "slide",
	    controlNav: true, 
	    directionNav: true,
	    slideshowSpeed: 5000,
	    animationSpeed: 2000,
	    start: function(slider){
	        jQuery('body').removeClass('loading');
	    }
	});
});