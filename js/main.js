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



$(function () {

    /*=================================================
    メインビジュアル　スライドショー
    ===================================================*/
    var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
        var responsiveImage = [//PC用の画像
            { src: '/img/mainvisial/mainvisial-center.webp'},
            { src: '/img/mainvisial/mainvisial-left.webp'},
            { src: '/img/mainvisial/mainvisial-right.webp'}
        ];
    } else {
        var responsiveImage = [//タブレットサイズ（768px）以下用の画像
            { src: '/img/mainvisial/mainvisial-center.webp'},
            { src: '/img/mainvisial/mainvisial-left.webp'},
            { src: '/img/mainvisial/mainvisial-right.webp'}
        ];
    }

    //Vegas全体の設定

    $('.slider').vegas({
        overlay: false,                 //画像の上に網線やドットのオーバーレイパターン画像を指定。
        transition: 'fade2',            //切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
        transitionDuration: 1500,       //切り替わりのアニメーション時間をミリ秒単位で設定
        delay: 2500,                    //スライド間の遅延をミリ秒単位で。
        animationDuration: 1000,        //スライドアニメーション時間をミリ秒単位で設定
        animation: 'random',            //スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
        slides: responsiveImage,        //画像設定を読む
        timer:false,                    //プログレスバー非表示
    });

    
    /*=================================================
    モーダル
    ===================================================*/
    // // 2秒遅れて表示
    // setTimeout(function(){
    //     $('.modal').fadeIn();
    // }, 2000);
    
    $('.modal-close').on('click', function(){
        $(this).parent().hide();
    });


function hamburger() {
    $(".ham").on("click", function () {
        $("header").toggleClass("open"); // ★キーポイント：headerに.openが付く
    });

    // #maskのエリアをクリックした時にメニューを閉じる
    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });

    // リンクをクリックした時にメニューを閉じる
    $("nav").on("click", function () {
        $("header").removeClass("open");
    });
}

    /*=================================================
    プロナビとは スライダー
    ===================================================*/
    $(".event-slick").slick({
        autoplay: true,                   // 自動でスクロール
        autoplaySpeed: 0,                 // 再生速度（1000=1秒）
        speed: 7000,                     // スライドが流れる速度を設定
        cssEase: "linear",                // スライドの流れ方を等速に設定
        infinite: true,                   // 無限ループON
        slidesToShow: 3,                  // 1スライダーの表示数
        swipe: false,                     // 操作による切り替えはさせない
        arrows: false,                    // 矢印非表示
        pauseOnFocus: false,              // スライダーをフォーカスした時にスライドを停止させるか
        pauseOnHover: false,              // スライダーにマウスホバーした時にスライドを停止させるか
        centerMode: true,                 // 中央寄せにして両端を見せる

        responsive: [
            {
                breakpoint: 769, // 769px以下のとき
                settings: {
                    speed: 8000,
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 426, // 426px以下のとき
                settings: {
                    speed: 5000,
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    });

    /*=================================================
    生徒作品 スライダー
    ===================================================*/
    // 左側：上方向に流れる
    $('.slick-top').slick({

        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });


    $('.slick-bottom').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    /*=================================================
        FAQ
    ===================================================*/
    //アコーディオンをクリックした時の動作
    $('.accordion-area .title').on('click', function () {//タイトル要素をクリックしたら
        var findElm = $(this).next(".faq-box");//直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle();//アコーディオンの上下動作
        if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
            $(this).removeClass('close');//クラス名を除去し
            findElm.slideUp();
        } else {//それ以外は
            $(this).addClass('close');//クラス名closeを付与
        }
    });

    //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
    $(window).on('load', function () {
        $(".open").each(function (index, element) {	//openクラスを取得
            var Title = $(element).children('.title');	//openクラスの子要素のtitleクラスを取得
            $(Title).addClass('close');				//タイトルにクラス名closeを付与し
            var Box = $(element).children('.faq-box');	//openクラスの子要素boxクラスを取得
            $(Box).slideDown(500);					//アコーディオンを開く
        });
    });
});

    /*=================================================
        フェードイン
    ===================================================*/
    $(window).scroll(function () {

        $(".js-fade").each(function () {
    
            var scroll = $(window).scrollTop();
            var target = $(this).offset().top;
            var windowHeight = $(window).height();
    
            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("show");
            }
        });
    });

function headermask() {
    var lastScrollTop = 0;
    var $header = $('header');
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 50) {
            // 下スクロールかつ50px以上スクロールしたらヘッダー非表示
            $header.addClass('hide');
        } else {
            // 上スクロール、またはページ上部付近ならヘッダー表示
            $header.removeClass('hide');
        }
        lastScrollTop = st;
    });
}

const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
