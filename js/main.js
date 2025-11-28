$(function () {

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
    PICK UP スライダー
    ===================================================*/
    // カルーセル用 jQueryプラグイン「slick」の設定
    // マニュアル：https://kenwheeler.github.io/slick/
    $(".slick").slick({
        centerMode: true,                 //両端見切れ状態の有無
        slidesToShow: 3,                  //1スライダーの表示数
        autoplay: true,                   //自動再生の有無
        autoplaySpeed: 0,                 //再生速度（1000=1秒）
        speed: 7000,                      // スライドが流れる速度を設定
        cssEase: "linear",                // スライドの流れ方を等速に設定
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
        var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
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
            var Box = $(element).children('.box');	//openクラスの子要素boxクラスを取得
            $(Box).slideDown(500);					//アコーディオンを開く
        });
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
