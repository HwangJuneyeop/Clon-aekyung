
/* header */
$(function () {
    $('.gnb_area').on('mouseover focusin', function () {
        $(".gnb_area").css("transition", "all 0.7s");
        $(".gnb_area").css("width", "900px");
        $(".gnb_area").css("height", "70px");
        $(".gnb_h").css("color", "black");
        $("header").css("backgroundColor", "white");
        $(".kr_box").css("color", "black");
        $(".kr_box").css("border-color", "black");
        $('.bgGnb').stop().fadeIn(100);
        $('.gnb_area .sub').stop().fadeIn(100);
    });
    $('.gnb_area').on('mouseleave', function () {
        $('.bgGnb').stop().fadeOut(100, function () {
            $(this).fadeOut(100);
            $('.gnb .sub').fadeOut(100);
            $(".gnb_area").css("transition", "all 0.7s");
            $(".gnb_area").css("width", "700px");
            $('.gnb_area').css("height",'10px');
            $("header").css("backgroundColor", "");
        })
    });
})

/* 모바일메뉴 */
$(function(){
    $('.m_menu').on('click', function(){
        $('.m_gnbArea').fadeIn();
        $('.grayBox').fadeIn();
    })

    $('.m_close').on('click', function(){
        $('.m_gnbArea').fadeOut();
        $('.grayBox').fadeOut();
    })
});
$(function(){
    $('.acc-que').on('click', function(){
        $(this).next('.acc-ans').stop().slideToggle(300);
        //현재 클릭된 .acc-que에게 toggleClass(on)을 적용
        //형제 요소는 on 제거
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next('.acc-ans').siblings('.acc-ans').stop().slideUp(300)
    })
})

/* serch */
 $(document).ready(function() {
    $('.btn_b').click(function() {
        $('.btn_b').addClass('on');
        $('.btn_b').hide();
        $('.btn_close').show();
        $('.searchArea').fadeIn();
        $('.grayBox').fadeIn();
       
    });
    $('.btn_close').click(function(){
        $('.btn_b').removeClass('on');
        $('.btn_close').hide();
        $('.btn_b').show();
        $('.searchArea').fadeOut();
        $('.grayBox').fadeOut();
    })

    /* kr_box */
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
})
$(document).ready(function() {
    $('.m_btn_kr').click(function() {
        $('.m_btn_kr').toggleClass('on');
        $('.m_btn_kr ul').slideToggle();
    });
})

$(function(){
    $('.m_btn_fs').on('click', function(){
        $('.m_btn_fs').toggleClass('on');
        $('.m_btn_fs ul').fadeToggle();
    })
})

/* 링크 */
document.addEventListener("DOMContentLoaded", function() {
var btnGreeting = document.querySelector('.btnGreeting');
var btnIntroduction = document.querySelector('.btnIntroduction');
var btnDesign = document.querySelector('.btnDesign');
var btnDevelopment =document.querySelector('.btnDevelopment');

btnGreeting.addEventListener('click', function() {
    btnGreeting.classList.add('on');
    btnIntroduction.classList.remove('on');
    btnDesign.classList.remove('on');
    btnDevelopment.classList.remove('on');
});

btnIntroduction.addEventListener('click', function() {
    btnIntroduction.classList.add('on');
    btnGreeting.classList.remove('on');
    btnDesign.classList.remove('on');
    btnDevelopment.classList.remove('on');
});
btnDesign.addEventListener('click', function() {
    btnDesign.classList.add('on');
    btnGreeting.classList.remove('on');
    btnIntroduction.classList.remove('on');
    btnDevelopment.classList.remove('on');
});
btnDevelopment.addEventListener('click', function() {
    btnDevelopment.classList.add('on');
    btnGreeting.classList.remove('on');
    btnIntroduction.classList.remove('on');
    btnDesign.classList.remove('on');
});

var subIntroduction = document.querySelector('.subIntroduction');
var subRoad = document.querySelector('.subRoad');
var subHistory = document.querySelector('.subHistory');

subIntroduction.addEventListener('click', function() {
    subIntroduction.classList.add('on');
    subRoad.classList.remove('on');
    subHistory.classList.remove('on');
});
subRoad.addEventListener('click', function() {
    subRoad.classList.add('on');
    subIntroduction.classList.remove('on');
    subHistory.classList.remove('on');
});
subHistory.addEventListener('click', function() {
    subHistory.classList.add('on');
    subIntroduction.classList.remove('on');
    subRoad.classList.remove('on');
});
})


