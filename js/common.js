// 공통 js

$(function(){

    $(window).scroll(function(){
        current = $(this).scrollTop();
        
        // gnbArea = $('.gnb_area').offset().top;

        if(current >= 105){
            $('header').addClass('fixed');
        }else{
            $('header').removeClass('fixed');
        }
    })



    $('header .login_area').hover(function(){
        $('.login_box').stop().fadeIn()
    },function(){
        $('.login_box').stop().fadeOut()
    })

    $('header .search_txt').focus(function(){
        $('.recent_box').show()
    })

    $('.recent_box .btn_close').click(function(e){ //이벤트 a태그에는 항상 써야 새로고침 안된다
        e.preventDefault()
        $('.recent_box').hide()
    })

    // $('.btn_wrap').click(function(e){
    //     e.preventDefault();

    //     $('.allmenu').stop().slideToggle();
    //     $('.btn_wrap').find('.btn_all').addClass('on');
    // })

    $('.btn_wrap').click(function(e){
        e.preventDefault();

        if ($('.allmenu').css('display') == 'none') {
            $(this).find('.btn_all').addClass('on');
            $('.allmenu').stop().slideDown();
            
        } else {
            $(this).find('.btn_all').removeClass('on');
            $('.allmenu').stop().slideUp();
        }
    })


    $('.allmenu .btn_close').click(function(e){
        e.preventDefault();
        $('.allmenu').stop().slideUp();
        $('.btn_all').removeClass('on');
    })
    
    
})


        // $(function(){ 실행

            
        //     $('.login').hover(function(){
        //         $(this).children('.login_box').stop().slideDown();
        //     },function(){
        //         $('.login_box').stop().slideUp();
        //     })

        //     $('.gnb_item').click(function(){
        //         //code
        //         $('.sub_list').addClass('on')
        //     })

        //     $('#closeBtn').click(function(){
        //         //code
        //         $('.menu-area').removeClass('on')
        //     })


        // })

