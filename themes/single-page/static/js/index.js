
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 700,
    easing: 'easeInOutCubic',
    offset: 160
});

$('.img-holder').imageScroll({
    coverRatio: 0.8,
    mediaWidth: 1200,
    mediaHeight: 600
});
