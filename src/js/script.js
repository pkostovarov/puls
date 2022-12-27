$(document).ready(function(){
    $('.slaider__inner').slick({
        speed: 1000, 
        adaptiveHeight: true, 
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slaider/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slaider/right.svg"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  dots: true,
                  arrows: false
                }
            },

        ]
    });
  });