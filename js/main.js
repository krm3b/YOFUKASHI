$(function () {
    hamburger();
    slick();
    accordion();
    scrollHeader(); 
    pagetop();
    headermask();
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
スリックスライダー
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
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: "linear",
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 769, settings: { speed: 8000, slidesToShow: 2 } },
            { breakpoint: 426, settings: { speed: 5000, slidesToShow: 1 } },
        ],
    };

    $(".slick-top").slick(commonSettings);
    $(".slick-bottom").slick(commonSettings);
}


/*=================================================
    Q%A アコーディオン
==================================================*/
function accordion() {
    $('.accordion-area .title').on('click', function () {
        const $box = $(this).next(".box");
        $(this).toggleClass('close');
        $box.stop(true).slideToggle();
    });

    $(window).on('load', function () {
        $(".open").each(function () {
            $(this).children('.title').addClass('close');
            $(this).children('.box').stop(true).slideDown(500);
        });
    });
}


/*=================================================
    ヘッダースクロール
==================================================*/
function scrollHeader() {
    let lastScrollTop = 0;
    const $header = $('header');

    $(window).on('scroll', function () {
        // メニューが開いている場合はヘッダーを隠さない
        if ($header.hasClass('open')) {
            return;
        }

        const st = $(this).scrollTop();
        if (st > lastScrollTop && st > 50) {
            $header.addClass('hide');
        } else {
            $header.removeClass('hide');
        }
        lastScrollTop = st;
    });
}


/*=================================================
  ページトップ
==================================================*/
function pagetop() {
    // 必要の場合い追加
}


/*=================================================
  Panel Active
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
