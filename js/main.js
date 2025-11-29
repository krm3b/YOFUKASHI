$(function () {
    splash();
    hamburger();
    slick();
    accordion();
    scrollHeader();
    mainVisualSlider();
    modal();
    fadeIn();
    headerMask();
    reservationFadeIn();
});


/*=================================================
ローディングアニメーション
==================================================*/
function splash() {
    $(window).on('load', function () {
        //ロゴタイピング表示　spanタグを追加する
        var element = $(".text-typing");
        element.each(function () {
            var text = $(this).html();
            var textbox = "";
            text.split('').forEach(function (t) {
                if (t !== " ") {
                    textbox += '<span>' + t + '</span>';
                } else {
                    textbox += t;
                }
            });
            $(this).html(textbox);
            
        });

        TextTypingAnime();/* アニメーション用の関数を呼ぶ*/

        // ロゴを1.2秒（1200ms）でフェードアウト
        $(".splash-logo").delay(1200).fadeOut('slow', function() {
            $("#splash").delay(100).fadeOut('slow');
            //appearクラスを付与して上下背景伸びるアニメーション
            $('body').addClass('appear');
        });
    });   
}

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.text-typing').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}

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
        responsive: [
            { breakpoint: 769, settings: { speed: 8000, slidesToShow: 2, centerMode: false } },
            { breakpoint: 426, settings: { speed: 5000, slidesToShow: 1, centerMode: false } },
        ],
    };

    $('.slick-top').slick(commonSettings);
    $('.slick-bottom').slick(commonSettings);

    $(".event-slick").slick({
        ...commonSettings,
        centerMode: true,
        swipe: false,
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
        { src: 'img/mainvisial/mainvisial-center.webp' },
        { src: 'img/mainvisial/mainvisial-left.webp' },
        { src: 'img/mainvisial/mainvisial-right.webp' }
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
        // ふわっ（下から）
        $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top + 100;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
            }
            });
        // ふわっ（左から）
        $('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
            var elemPos = $(this).offset().top + 100;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
            }else{
            $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
            }
            });
        // ふわっ（右から）
        $('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
            var elemPos = $(this).offset().top + 100;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
            }else{
            $(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
            }
            });	
    });
}


/*=================================================
ヘッダースクロールしたら表示しない
==================================================*/
function headerMask() {
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
function reservationFadeIn() {
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
