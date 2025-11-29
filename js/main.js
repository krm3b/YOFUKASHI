$(function () {
    hamburger();
    slick();
    accordion();
    scrollHeader();
    mainVisualSlider();
    modal();
    fadeIn();
    headermask();
    reservationfadeIn();
});


/*=================================================
 ハンバーガーメニュー
==================================================*/
function hamburger() {
    const $header = $("header");

    $(".hamburger").on("click", () => {
        $header.toggleClass("open");
    });

    $(".mask, nav").on("click", () => {
        $header.removeClass("open");
    });
}


/*=================================================
 スリックスライダー（共通設定に統一）
==================================================*/
function slick() {
    $(".slick").slick({
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: "linear",
        responsive: [
            { breakpoint: 769, settings: { speed: 8000, slidesToShow: 2, centerMode: false } },
            { breakpoint: 426, settings: { speed: 5000, slidesToShow: 1, centerMode: false } },
        ],
    });

    const commonSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        pauseOnFocus: false,
        pauseOnHover: false,
    };

    $('.slick-top').slick(commonSettings);
    $('.slick-bottom').slick(commonSettings);

    $(".event-slick").slick({
        ...commonSettings,
        centerMode: true,
        swipe: false
    });
}


/*=================================================
 Q&Aアコーディオン
==================================================*/
function accordion() {
    $('.accordion-area .title').on('click', function () {
        $(this).toggleClass('close').next(".faq-box").stop(true).slideToggle();
    });

    $(window).on('load', function () {
        $(".open").each(function () {
            $(this).children('.title').addClass('close');
            $(this).children('.faq-box').slideDown(500);
        });
    });
}


/*=================================================
 ヘッダーの表示・非表示（スクロール）
==================================================*/
function scrollHeader() {
    let lastScrollTop = 0;
    const $header = $('header');

    $(window).on('scroll', function () {
        if ($header.hasClass('open')) return;

        const st = $(this).scrollTop();
        (st > lastScrollTop && st > 50) ? $header.addClass('hide') : $header.removeClass('hide');
        lastScrollTop = st;
    });
}

/*=================================================
 メインビジュアル Vegasスライダー
==================================================*/
function mainVisualSlider() {
    const srcs = [
        { src: '/img/mainvisial/mainvisial-center.webp' },
        { src: '/img/mainvisial/mainvisial-left.webp' },
        { src: '/img/mainvisial/mainvisial-right.webp' }
    ];

    $('.slider').vegas({
        overlay: false,
        transition: 'fade2',
        transitionDuration: 1500,
        delay: 2500,
        animationDuration: 1000,
        animation: 'random',
        slides: srcs,
        timer: false
    });
}


/*=================================================
 モーダル
==================================================*/
function modal() {
    $('.modal-close').on('click', function () {
        $(this).closest('.modal').fadeOut();
    });
}


/*=================================================
 フェードイン
==================================================*/
function fadeIn() {
    $(window).on('scroll', function () {
        $(".js-fade").each(function () {
            const scroll = $(window).scrollTop();
            const target = $(this).offset().top;
            const winH = $(window).height();

            if (scroll > target - winH + $(this).outerHeight()) {
                $(this).addClass("show");
            }
        });
    });
}


/*=================================================
ヘッダースクロールしたら表示しない
==================================================*/
function headermask() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            panels.forEach(p => p.classList.remove('active'));
            panel.classList.add('active');
        });
    });
}



/*=================================================
カウンセリング予約ボタンのフェードイン・アウト
==================================================*/
function reservationfadeIn() {
    let reservation = $(".cta");
    reservation.hide();

    function checkScroll() {
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        let documentHeight = $(document).height();
        let isBottom = scrollTop + windowHeight >= documentHeight - 10;
        let isMobile = $(window).width() < 768;
        
        if (scrollTop > 180 && !isBottom && isMobile) {
            reservation.fadeIn();
        } else {
            reservation.fadeOut();
        }
    }

    $(window).on('scroll resize', checkScroll);
}