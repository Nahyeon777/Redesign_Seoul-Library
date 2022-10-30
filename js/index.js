$(document).ready(function () {
    
    // 메인베너 슬릭
    $(".slick").slick({
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        speed : 2000,
        arrows : true,
        autoplay : true, 
        autoplaySpeed : 3000,
        pauseOnHover : true,
        vertical : false,
        draggable : true,
        fade: true,

        responsive: [ 
					{  
						breakpoint: 1280,
						settings: {
							arrows: false,
						} 
					}
					
				]
    })

    // new slick
    $(".slide").slick({
        slidesToShow: 1,
        autoplay: true,
        asNavFor: '.slide-nav, .main-book-title',
        draggable : true,

        responsive: [ 
            {  
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    variableWidth: true,
                },
                // breakpoint: 376,
                // settings: {
                //     slidesToShow: 1,
                //     centerMode: true,
                // }, 
            }
        ]
    })
    $(".slide-nav").slick({
        slidesToShow: 3,
        autoplay: true,
        asNavFor: '.slide, .main-book-title',

        responsive: [ 
            {  
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                },        
            }
        ]
    })
    $(".main-book-title").slick({
        slidesToShow: 1,
        autoplay: true,
        asNavFor: '.slide, .slide-nav'
    })

    // best slick
    $(".best-slick").slick({
        infinite : true,
        slidesToShow : 6,
        slidesToScroll : 1,
        speed : 500,
        arrows : true,
        // autoplay : true, 
        autoplaySpeed : 2000,
        pauseOnHover : true,
        vertical : false,
        draggable : true,

        responsive: [ 
            {  
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                },
            }
        ],
    })

    // recommend slick
    $(".recommend-slick").slick({
        infinite : true,
        slidesToShow : 4,
        slidesToScroll : 1,
        speed : 500,
        arrows : true,
        autoplay : true, 
        autoplaySpeed : 2000,
        pauseOnHover : true,
        vertical : false,
        draggable : true,

        responsive: [ 
            {  
                breakpoint: 1280,
                settings: {
                    arrows: false,
                },
            }
        ]
    })

    // banner slick
    $(".banner-slick").slick({
        dots: true,
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        speed : 500,
        // arrows : true,
        autoplay : true, 
        autoplaySpeed : 3000,
        pauseOnHover : true,
        vertical : false,
        draggable : true,
    })

    // m-nav
    $(".ham").click(function (e) { 
        e.preventDefault();
        // $(this).addClass('on');
        $(this).toggleClass('on');
        $(".menu").toggleClass('on');
        $(".black").toggleClass('on');
    });
});