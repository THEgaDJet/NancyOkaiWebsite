/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem, offsetTop=0, offsetLeft=0) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 + offsetTop &&
		distance.left >= 0 + offsetLeft &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

var nancytext = document.getElementById('nancyokai');
var nancylink = document.getElementById('about-link');

window.addEventListener('scroll', function (e) {
	if (isInViewport(nancytext, 35)) {
		nancylink.style.display = 'none';
    }
    else {
        nancylink.style.display = 'initial';
	}
	
	checkOffset();
}, false);

function checkOffset() {
    if($('#social-media-linkbar').offset().top + $('#social-media-linkbar').height() >= $('#contact-page').offset().top - 10) {
		$('#social-media-linkbar').removeClass('sps--abv');
		$('#social-media-linkbar').addClass('sps--blw');
		// $('#social-media-linkbar').css('position', 'absolute');
	}
    if($(document).scrollTop() + window.innerHeight < $('#contact-page').offset().top) {
		$('#social-media-linkbar').removeClass('sps--blw');
		$('#social-media-linkbar').addClass('sps--abv'); // restore when you scroll up
		// $('#social-media-linkbar').css('position', 'fixed'); // restore when you scroll up
	}

    // $('#social-media-linkbar').text($(document).scrollTop() + window.innerHeight);
}

$(document).scroll(function() {
    checkOffset();
});