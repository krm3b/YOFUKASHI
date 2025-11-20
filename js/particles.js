$(function () {

    /*=================================================
        FAOの背景　パーティクルズJS
    ===================================================*/
    particlesJS("particles-js", {
        "particles":{
            "number":{
                "value":40,     //この数値を変更すると幾何学模様の数が増減できる
                "density":{"enable":true,"value_area":800}
            },
            "color":{
                "value":"#3688d6"
            },
            "shape":{
                "type":"polygon",       //形状はpolygonを指定
                "stroke":{"width":0},
                "polygon":{"nb_sides":5},
                "image":{"width":100,"height":100}
            },
            "opacity":{
                "value":0.5,
                "random":false,
                "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}
            },
            "size":{
                "value":4.008530152163807,
                "random":true,
                "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}
            },
            "line_linked":{
                "enable":true,
                "distance":150,
                "color":"#3688d6",
                "opacity":0.4,
                "width":1
            },
            "move":{
                "enable":true,
                "speed":3,              //この数値を小さくするとゆっくりな動きになる
                "direction":"none",     //方向指定なし
                "random":false,         //動きはランダムにしない
                "straight":false,       //動きをとどめない
                "out_mode":"out",       //画面の外に出るように描写
                "bounce":false,         //跳ね返りなし
                "attract":{"enable":false,"rotateX":600,"rotateY":1200}
            }
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{
                "onhover":{"enable":true,"mode":"repulse"},
                "onclick":{"enable":true,"mode":"push"},
                "resize":true
            },
            "modes":{
                "grab":{"distance":400,"line_linked":{"opacity":1}},
                "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
                "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},
                "remove":{"particles_nb":2}
            }
        },
        "retina_detect":true
    });
    var count_particles, stats, update; stats = new Stats; stats.setMode(0); 
    stats.domElement.style.position = 'absolute'; 
    stats.domElement.style.left = '0px'; 
    stats.domElement.style.top = '0px'; 
    document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); 
    update = function() { stats.begin(); stats.end(); 
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
        } 
        requestAnimationFrame(update); 
    }; 
    requestAnimationFrame(update);;

});