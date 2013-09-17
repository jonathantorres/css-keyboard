(function(window) {

    var $body,
        $keyboard;

	function Keyboard() { }

	Keyboard.prototype.init = function() {
        cache();

        TweenLite.set($keyboard, { transformPerspective : 1000, transformOrigin : 'center center' });
        $body.on('mousemove', onBodyMouseMove);
        $(window).on('keyup', onKeyUp);
	};

    var animateKey = function() {
        $originalLetter = $('.letter-q');
        $animatedLetter = $originalLetter.clone().addClass('copy');

        $animatedLetter.css({ position : 'absolute', top : '0px', left : '0px', opacity : '1' });
        $originalLetter.after($animatedLetter);

        TweenMax.to($animatedLetter, 0.5, { z : 500, opacity : 1, ease : Cubic.easeIn, onComplete : keyAnimated, onCompleteParams : [$animatedLetter] });
    };

    var keyAnimated = function($letter) {
        $letter.remove();
    };

    var onKeyUp = function(e) {
        // console.log(e.keyCode);
        animateKey();
    };

    var onBodyMouseMove = function(e) {
        var dx = e.clientX - (window.innerWidth * 0.5);
        var dy = e.clientY - (window.innerHeight * 0.5);

        TweenMax.set($keyboard, { rotationX : -dy / 50, rotationY : -dx / 50 });
    };

    /**
     * Cache selectors
     */
    var cache = function() {
        $body = $('body');
        $keyboard = $('#keyboard');
    };

	window.Keyboard = Keyboard;

}(window));
