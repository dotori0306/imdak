// 메인만을 위한

// 메인슬라이드

var mainslide = new Swiper(".main_slide", {
    loop:true,

    navigation: {
      nextEl: ".main_slide .next",
      prevEl: ".main_slide .prev",
    },

    pagination: {
        el: ".main_slide .fraction",
        type: "fraction",
      },

      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    

  });


//   $('.control_btns').click(function(e){
//       e.preventDefault()

//       if( $('.control_btns .pause').css('display') == 'none'){
//           $('.control_btns .play').removeClass('active');
//           $('.control_btns .pause').addClass('active');
//       }else{
//           $('.control_btns .play').addClass('active');
//           $('.control_btns .pause').removeClass('active');
//       }

//     //   if( $('.control_btns .pause').css('display') == 'none'){
//     //     $('.control_btns .play').hide();
//     //     $('.control_btns .pause').show();
//     //  }else{
//     //     $('.control_btns .play').show();
//     //     $('.control_btns .pause').hide();
//     // }

//   })

$('.control_btns').click(function(e){
    e.preventDefault();
    $('.control_btns .pause, .control_btns .play').hide();
    
    if($(this).hasClass('on') ){
        $(this).removeClass('on');
        $('.control_btns .pause').show();
        mainslide.autoplay.start(); //스와이퍼에서 제공

    }else{
      $(this).addClass('on');
      $('.control_btns .play').show();
      mainslide.autoplay.stop(); //스와이퍼에서 제공
    }
})

$('.event_banner .btn_all').click(function(e){
    e.preventDefault();
    $('body').addClass('bg');
    $('.pop-up-area').show();
})
$('.event_banner .pop-wrap', 'body').click(function(e){
    e.preventDefault();
    $('body').removeClass('bg');
    $('.pop-up-area').hide();
}) 


// 리뷰영역
var swiper = new Swiper(".sc-review .swiper", {
    slidesPerView: 2,
    loop:'true',
    grid: {
      rows: 2,
    },
    navigation:{
      nextEl:".wrap .btn.next",
      prevEl:".wrap .btn.prev",
    },
   
  });


cateArr = ['혼합세트','소시지','빅볼/큐브/스테이크','샐러드','단백질 간식','간편 한끼','고구마','도시락/라이스'
]

  //카테고리
  var swiper = new Swiper(".sc-category-best .swiper", {
    loop:'true',
    effect:'fade',

    navigation: {
      nextEl: ".category .next",
      prevEl: ".category .prev",
    },

    pagination: {
      el: ".sc-category-best .category-list",
      clickable: true,
      renderBullet: function (index, className) {
        return '<li class="' + className + '">' + cateArr[index] + "</li>";
      },
    },
  });





  ///첫구매 추천상품
  var swiper = new Swiper(".recommand-swiper", {
    loop: 'true',
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    navigation: {
      prevEl: ".btn.prev",
      nextEl: ".btn.next",
    },
  });


  // 아임닭 신상품
  var swiper = new Swiper(".new-prd.swiper", {
    loop: 'true',
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    navigation: {
      prevEl: ".btn.prev",
      nextEl: ".btn.next",
    },
  });

  