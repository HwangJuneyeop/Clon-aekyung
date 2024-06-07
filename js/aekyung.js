    $(function () {
        var scrollThreshold = 200;
    
        $('.gnb_area').on('mouseover focusin', function () {
            $(this).css("transition","all 0.7s");
            $(this).css("width","900px");
            $(this).css("height","70px");
            $(".logo_w").css("display", "none");
            $(".logo_b").css("display", "block");
            $(".gnb_h").css("color", "black");
            $("header").css("backgroundColor", "white");
            $(".btn_w").css("display","none");
            $(".btn_b").css("display","block");
            $(".kr_box").css("color","black");
            $(".btn_kr").css("border-color","black");
    
            $('.bgGnb').stop().fadeIn(100);
            $('.gnb_area .sub').stop().fadeIn(100);
        });
    
        // mouseleave 이벤트 핸들러 수정
        $('.gnb_area').on('mouseleave', function () {
            $('.bgGnb').stop().fadeOut(100, function() {
                $('.gnb_area .sub').stop().fadeOut(100);
            });
            $(this).css("transition","all 0.7s");
            $(this).css("width","700px");
            $(".gnb_area").css("height","10px")
            $(".logo_w").css("display", "block");
            $(".logo_b").css("display", "none");
            $("header").css("backgroundColor", "");
            $(".gnb_h").css("color", "white");
            $(".btn_w").css("display","block");
            $(".btn_b").css("display","none");
            $(".kr_box").css("color","white");
            $(".btn_kr").css("border-color","white");
    
            if ($(window).scrollTop() >= scrollThreshold) {
                $(".logo_w").css("display", "none");
                $(".logo_b").css("display", "block");
                $(".gnb_h").css("color", "black");
                $("header").css("backgroundColor", "white");
                $(".btn_w").css("display","none");
                $(".btn_b").css("display","block");
                $(".kr_box").css("color","black");
                $(".btn_kr").css("border-color","black");
                $(".gnb").css("color", "black");
            }
        });
    
        $(window).on('scroll', function () {
            var $header = $('header');
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= scrollThreshold) {
                $header.addClass('on');
                $(".logo_w").css("display", "none");
                $(".logo_b").css("display", "block");
                $(".gnb_h").css("color", "black");
                $header.css("backgroundColor", "white");
                $(".btn_w").css("display","none");
                $(".btn_b").css("display","block");
                $(".kr_box").css("color","black");
                $(".btn_kr").css("border-color", "black");
                $(".gnb").css("color", "black");
                $(".btn_kr li > a").css("color", "black");
                $(".m_menu").css("display", "block");
                $(".btn_menu").css("display", "none");
            } else {
                $header.removeClass('on');
                $(".logo_w").css("display", "block");
                $(".logo_b").css("display", "none");
                $header.css("backgroundColor", "");
                $(".gnb_h").css("color", "white");
                $(".btn_w").css("display","block");
                $(".btn_b").css("display","none");
                $(".kr_box").css("color","white");
                $(".btn_kr").css("border-color","white");
                $(".btn_kr li > a").css("color", "white");
                $(".m_menu").css("display", "none");
                $(".btn_menu").css("display", "block");
            }
        });
    });
    

    
    function showCont(cont_header) {
    if (cont_header === '환경') {
    $('.cont_box01').show();
    $('.cont_box02').hide();
    $('.cont_box03').hide();
    $('.cont_text01').css("text-decoration", "underline")
    $('.cont_text02').css("text-decoration", "none")
    $('.cont_text03').css("text-decoration", "none")
    } else if (cont_header === '사회') {
    $('.cont_box01').hide();
    $('.cont_box02').show();
    $('.cont_box03').hide();
    $('.cont_text01').css("text-decoration", "none")
    $('.cont_text02').css("text-decoration", "underline")
    $('.cont_text03').css("text-decoration", "none")
    } else if (cont_header === '지배구조') {
    $('.cont_box01').hide();
    $('.cont_box02').hide();
    $('.cont_box03').show();
    $('.cont_text01').css("text-decoration", "none")
    $('.cont_text02').css("text-decoration", "none")
    $('.cont_text03').css("text-decoration", "underline")
    }
    }
    
    
    $(document).ready(function() {
        $('.btn_kr').click(function() {
            $('.btn_kr').toggleClass('on');
            $('.btn_kr ul').slideToggle();
        });

        $('.btn_fs').click(function() {
            $('.btn_fs').toggleClass('on')
            $('.btn_fs ul').slideToggle();
        });
    });
    /* serch */
    $(document).ready(function() {
        $('.btn_w').click(function() {
            $('.btn_w').addClass('on');
            $('.btn_w').hide();
            $('.btn_close').show();
            $('.searchArea').fadeIn();
            $(".logo_w").css("display", "none");
            $(".logo_b").css("display", "block");
            $(".gnb_h").css("color", "black");
            $("header").css("backgroundColor", "white");
            $(".kr_box").css("color","black");
            $(".btn_kr").css("border-color", "black");
            $(".gnb").css("color", "black");
        });
        $('.btn_close').click(function(){
            $('.btn_w').removeClass('on');
            $('.btn_close').hide();
            $('.btn_w').show();
            $('.searchArea').fadeOut();
            $(".logo_w").css("display", "block");
            $(".logo_b").css("display", "none");
            $("header").css("backgroundColor", "");
            $(".gnb_h").css("color", "white");
            $(".kr_box").css("color","white");
            $(".btn_kr").css("border-color","white");
        })
    });


    $(function(){
        $('.btn_menu').on('click', function(){
            $('.m_gnbArea').fadeIn();
            $('.grayBox').fadeIn();
        })
    
        $('.m_close').on('click', function(){
            $('.m_gnbArea').fadeOut();
            $('.grayBox').fadeOut();
        })
    });
    $(function(){
        $('.acc-cue').on('click',function(){
            $(this).next('.acc-cns').stop().slideToggle(300);
            //현재 클릭된 .acc-que에게 toggleClass(on)을 적용
            //형제 요소는 on 제거
            $(this).toggleClass('on').siblings().removeClass('on');
            $(this).next('.acc-cns').siblings('.acc-cns').stop().slideUp(300)
        })
    })
    $(function(){
        $('.acc-que').on('click', function(){
            $(this).next('.acc-ans').stop().slideToggle(300);
            //현재 클릭된 .acc-que에게 toggleClass(on)을 적용
            //형제 요소는 on 제거
            $(this).toggleClass('on').siblings().removeClass('on');
            $(this).next('.acc-ans').siblings('.acc-ans').stop().slideUp(300)
        })
    })