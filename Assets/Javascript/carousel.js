$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        }
    },
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
})