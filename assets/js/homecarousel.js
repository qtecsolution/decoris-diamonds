let slider = tns({
    container: '.home-slider',
    slideBy: 1,
    controlsContainer: '#controls',
    navAsThumbnails: false,
    nav: false,
    autoplayButtonOutput: false,
    autoplayResetOnVisibility: false,
    autoplay: true,
    loop: true,
    speed: 400,
    mouseDrag: true,
    responsive: {
        360: {
            gutter: 0,
            items: 1
        },

        480: {
            gutter: 14,
            items: 2
        },
        
        900: {
            gutter: 24,
            items: 3
        }
    }
});