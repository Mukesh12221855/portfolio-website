$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if (window.scrollY > 60) $('#scroll-top').addClass('active');
        else $('#scroll-top').removeClass('active');

        $('section').each(function () {
            const height = $(this).outerHeight();
            const offset = $(this).offset().top - 200;
            const top = $(window).scrollTop();
            const id = $(this).attr('id');
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    $('a[href^="#"]').on('click', function (e) {
        const target = $(this).attr('href');
        if ($(target).length) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $(target).offset().top }, 500, 'linear');
        }
    });
});

document.addEventListener('visibilitychange', function () {
    document.title = document.visibilityState === 'visible'
        ? 'Chandana Mukesh | Data Analyst'
        : 'Chandana Mukesh | Data Portfolio';
});

var typed = new Typed('.typing-text', {
    strings: ['data analytics', 'SQL analysis', 'Power BI dashboards', 'Python & ETL', 'data engineering'],
    loop: true,
    typeSpeed: 55,
    backSpeed: 28,
    backDelay: 900
});

if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.tilt'), { max: 10, speed: 500, glare: true, 'max-glare': 0.12 });
}

if (typeof ScrollReveal !== 'undefined') {
    const srtop = ScrollReveal({ origin: 'top', distance: '60px', duration: 900, reset: false });
    srtop.reveal('.home .content', { delay: 150 });
    srtop.reveal('.home .image', { delay: 250 });
    srtop.reveal('.about .content', { delay: 150 });
    srtop.reveal('.skills .container', { delay: 150 });
    srtop.reveal('.skills .bar', { interval: 100 });
    srtop.reveal('.experience-card', { delay: 150 });
    srtop.reveal('.project-card', { interval: 150 });
    srtop.reveal('.education .box', { interval: 150 });
    srtop.reveal('.certificates .timeline .container', { interval: 150 });
    srtop.reveal('.contact-card', { delay: 150 });
}
