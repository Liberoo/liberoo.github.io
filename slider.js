var current = 0,
    slides = document.getElementsByClassName('text');
slides2 = document.getElementsByClassName('pdp');


setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        slides2[i].style.opacity = 0;

    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
    slides2[current].style.opacity = 1;

}, 6000);