(function($) {
    'use strict';

    /* 1. Preloder */
    $(window).on('load', function() {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            overflow: 'visible',
        });
    });

    /* 2. slick Nav */
    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
        menu.slicknav({
            prependTo: '.mobile_menu',
            closedSymbol: '+',
            openedSymbol: '-',
        });
    }

    /* 3. MainSlider-1 */
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find(
                '[data-animation]'
            );
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on(
            'beforeChange',
            function(e, slick, currentSlide, nextSlide) {
                var $animatingElements = $(
                    '.single-slider[data-slick-index="' + nextSlide + '"]'
                ).find('[data-animation]');
                doAnimations($animatingElements);
            }
        );
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
            ],
        });

        function doAnimations(elements) {
            var animationEndEvents =
                'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay,
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    // recent-active
    $('.customar-active').slick({
        dots: true,
        infinite: true,
        speed: 600,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"> <span class="flaticon-arrow"></span></button>',
        nextArrow: '<button type="button" class="slick-next"> <span class="flaticon-arrow"><span></button>',
        autoplay: false,
        initialSlide: 3,
        centerMode: true,
        loop: true,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    });

    /* 4.  Custom Sticky Menu  */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        //  console.log(scroll);
        // console.log("hello people");
        if (scroll < 245) {
            $('.header-sticky').removeClass('sticky-bar');
        } else {
            $('.header-sticky').addClass('sticky-bar');
        }
    });

    /* 5.  Adding Active class  */

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll <= 770) {
            $('#h').addClass('active');
        } else {
            $('#h').removeClass('active');
        }

        if (770 < scroll && scroll <= 1536) {
            $('#f').addClass('active');
        } else {
            $('#f').removeClass('active');
        }

        if (1536 < scroll && scroll <= 3500) {
            $('#s').addClass('active');
        } else {
            $('#s').removeClass('active');
        }

        if (3500 <= scroll && scroll <= 5000) {
            $('#p').addClass('active');
        } else {
            $('#p').removeClass('active');
        }

        if (5000 <= scroll) {
            $('#c').addClass('active');
        } else {
            $('#c').removeClass('active');
        }
    });
})(jQuery);