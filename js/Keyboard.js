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

    /**
     * Animates the pressed key
     */
    var animateKey = function(key, startPosition) {
        if ($('.' + key + '-copy').length === 0) {
            $originalLetter = $('.' + key);
            $animatedLetter = $originalLetter.clone().addClass(key + '-copy');

            $animatedLetter.css(startPosition);
            $originalLetter.after($animatedLetter);
            
            TweenMax.to($animatedLetter, 0.4, {
                z : 500,
                ease : Cubic.easeIn, 
                onComplete : keyAnimated, 
                onCompleteParams : [$('.' + key + '-copy')]
            });
        }
    };

    /**
     * Remove the animated key when it's done animating
     */
    var keyAnimated = function($key) {
        $key.remove();
    };

    /**
     * Execute when a key it's pressed
     */
    var onKeyUp = function(e) {
        switch(e.keyCode) {
            case 27 : // esc
                animateKey('key-esc', { position : 'absolute', top : '42px', left : '15px' });
                break;

            case 192 : // ~
                animateKey('press-tilde', { position : 'absolute', top : '74px', left : '15px' });
                break;

            case 49 : // 1
                animateKey('key-1', { position : 'absolute', top : '74px', left : '68px' });
                break;

            case 50 : // 2
                animateKey('key-2', { position : 'absolute', top : '74px', left : '124px' });
                break;

            case 51 : // 3
                animateKey('key-3', { position : 'absolute', top : '74px', left : '180px' });
                break;

            case 52 : // 4
                animateKey('key-4', { position : 'absolute', top : '74px', left : '236px' });
                break;

            case 53 : // 5
                animateKey('key-5', { position : 'absolute', top : '74px', left : '292px' });
                break;

            case 54 : // 6
                animateKey('key-6', { position : 'absolute', top : '74px', left : '348px' });
                break;

            case 55 : // 7
                animateKey('key-7', { position : 'absolute', top : '74px', left : '404px' });
                break;

            case 56 : // 8
                animateKey('key-8', { position : 'absolute', top : '74px', left : '460px' });
                break;

            case 57 : // 9
                animateKey('key-9', { position : 'absolute', top : '74px', left : '516px' });
                break;

            case 48 : // 0
                animateKey('key-0', { position : 'absolute', top : '74px', left : '572px' });
                break;

            case 189 : // -
                animateKey('key-minus', { position : 'absolute', top : '74px', left : '628px' });
                break;

            case 187 : // +
                animateKey('key-plus', { position : 'absolute', top : '74px', left : '684px' });
                break;

            case 9 : // tab
                animateKey('press-tab', { position : 'absolute', top : '132px', left : '15px' });
                break;

            case 81 : // q
                animateKey('letter-q', { position : 'absolute', top : '132px', left : '98px' });
                break;

            case 87 : // w
                animateKey('letter-w', { position : 'absolute', top : '132px', left : '154px' });
                break;

            case 69 : // e
                animateKey('letter-e', { position : 'absolute', top : '132px', left : '210px' });
                break;

            case 82 : // r
                animateKey('letter-r', { position : 'absolute', top : '132px', left : '266px' });
                break;

            case 84 : // t
                animateKey('letter-t', { position : 'absolute', top : '132px', left : '322px' });
                break;

            case 89 : // y
                animateKey('letter-y', { position : 'absolute', top : '132px', left : '378px' });
                break;

            case 85 : // u
                animateKey('letter-u', { position : 'absolute', top : '132px', left : '434px' });
                break;

            case 73 : // i
                animateKey('letter-i', { position : 'absolute', top : '132px', left : '490px' });
                break;

            case 79 : // o
                animateKey('letter-o', { position : 'absolute', top : '132px', left : '546px' });
                break;

            case 80 : // p
                animateKey('letter-p', { position : 'absolute', top : '132px', left : '602px' });
                break;

            case 219 : // [
                animateKey('press-left-bracket', { position : 'absolute', top : '132px', left : '658px' });
                break;

            case 221 : // ]
                animateKey('press-right-bracket', { position : 'absolute', top : '132px', left : '714px' });
                break;

            case 220 : // /
                animateKey('press-slash', { position : 'absolute', top : '132px', left : '770px' });
                break;

            case 20 : // caps lock
                animateKey('press-caps', { position : 'absolute', top : '190px', left : '15px' });
                break;

            case 65 : // a
                animateKey('letter-a', { position : 'absolute', top : '190px', left : '111px' });
                break;

            case 83 : // s
                animateKey('letter-s', { position : 'absolute', top : '190px', left : '167px' });
                break;

            case 68 : // d
                animateKey('letter-d', { position : 'absolute', top : '190px', left : '223px' });
                break;

            case 70 : // f
                animateKey('letter-f', { position : 'absolute', top : '190px', left : '279px' });
                break;

            case 71 : // g
                animateKey('letter-g', { position : 'absolute', top : '190px', left : '335px' });
                break;

            case 72 : // h
                animateKey('letter-h', { position : 'absolute', top : '190px', left : '391px' });
                break;

            case 74 : // j
                animateKey('letter-j', { position : 'absolute', top : '190px', left : '447px' });
                break;

            case 75 : // k
                animateKey('letter-k', { position : 'absolute', top : '190px', left : '503px' });
                break;

            case 76 : // l
                animateKey('letter-l', { position : 'absolute', top : '190px', left : '559px' });
                break;

            case 186 : // ;
                animateKey('press-colon', { position : 'absolute', top : '190px', left : '615px' });
                break;

            case 222 : // '
                animateKey('press-quote', { position : 'absolute', top : '190px', left : '671px' });
                break;

            case 13 : // return
                animateKey('press-return', { position : 'absolute', top : '190px', left : '727px' });
                break;

            case 16 : // shift
                animateKey('press-shift', { position : 'absolute', top : '248px', left : '15px' });
                break;

            case 90 : // z
                animateKey('letter-z', { position : 'absolute', top : '248px', left : '139px' });
                break;

            case 88 : // x
                animateKey('letter-x', { position : 'absolute', top : '248px', left : '195px' });
                break;

            case 67 : // c
                animateKey('letter-c', { position : 'absolute', top : '248px', left : '251px' });
                break;

            case 86 : // v
                animateKey('letter-v', { position : 'absolute', top : '248px', left : '307px' });
                break;

            case 66 : // b
                animateKey('letter-b', { position : 'absolute', top : '248px', left : '363px' });
                break;

            case 78 : // n
                animateKey('letter-n', { position : 'absolute', top : '248px', left : '419px' });
                break;

            case 77 : // m
                animateKey('letter-m', { position : 'absolute', top : '248px', left : '475px' });
                break;

            case 188 : // ,
                animateKey('press-comma', { position : 'absolute', top : '248px', left : '531px' });
                break;

            case 190 : // .
                animateKey('press-dot', { position : 'absolute', top : '248px', left : '587px' });
                break;

            case 191 : // ?
                animateKey('press-question', { position : 'absolute', top : '248px', left : '643px' });
                break;

            case 17 : // control
                animateKey('press-ctrl', { position : 'absolute', top : '306px', left : '68px' });
                break;

            case 18 : // option
                animateKey('press-option', { position : 'absolute', top : '306px', left : '124px' });
                break;

            case 91 : // command
                animateKey('press-command', { position : 'absolute', top : '306px', left : '180px' });
                break;

            case 32 : // spacebar
                animateKey('press-spacebar', { position : 'absolute', top : '306px', left : '236px' });
                break;

            case 37 : // arrow left
                animateKey('press-left', { position : 'absolute', top : '306px', left : '654px' });
                break;

            case 38 : // arrow up
                animateKey('press-up', { position : 'absolute', top : '310px', left : '713px' });
                break;

            case 39 : // arrow right
                animateKey('press-right', { position : 'absolute', top : '306px', left : '766px' });
                break;

            case 40 : // arrow down
                animateKey('press-down', { position : 'absolute', top : '340px', left : '713px' });
                break;
        }
    };

    /**
     * Rotate whole keyboard on mouse movement
     */
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
