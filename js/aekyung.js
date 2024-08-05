$(function () {
    var scrollThreshold = 50;
    var SearchArea = false;
    var isBtnWClicked = false;

    $('.gnb_area').on('mouseover focusin', function () {
        if (isBtnWClicked) return;

        $(this).css("transition", "all 0.7s");
        $(this).css("width", "900px");
        $(this).css("height", "70px");
        $(".logo_w").css("display", "none");
        $(".logo_b").css("display", "block");
        $(".gnb_h").css("color", "black");
        $("header").css("backgroundColor", "white");
        $(".btn_w").css("display", "none");
        $(".btn_b").css("display", "block");
        $(".kr_box").css("color", "black");
        $(".btn_kr").css("border-color", "black");

        $('.bgGnb').stop().fadeIn(100);
        $('.gnb_area .sub').stop().fadeIn(100);
    });

    $('.gnb_area').on('mouseleave', function () {
        if (isBtnWClicked) return;

        $('.bgGnb').stop().fadeOut(100, function () {
            $('.gnb_area .sub').stop().fadeOut(100);
        });
        $(this).css("transition", "all 0.7s");
        $(this).css("width", "700px");
        $(this).css("height", "10px");
        $(".logo_w").css("display", "block");
        $(".logo_b").css("display", "none");
        $("header").css("backgroundColor", "");
        $(".gnb_h").css("color", "white");
        $(".btn_w").css("display", "block");
        $(".btn_b").css("display", "none");
        $(".kr_box").css("color", "white");
        $(".btn_kr").css("border-color", "white");

        if ($(window).scrollTop() >= scrollThreshold) {
            $(".logo_w").css("display", "none");
            $(".logo_b").css("display", "block");
            $(".gnb_h").css("color", "black");
            $("header").css("backgroundColor", "white");
            $(".btn_w").css("display", "none");
            $(".btn_b").css("display", "block");
            $(".kr_box").css("color", "black");
            $(".btn_kr").css("border-color", "black");
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
            $(".btn_w").css("display", "none");
            $(".btn_b").css("display", "block");
            $(".kr_box").css("color", "black");
            $(".btn_kr").css("border-color", "black");
            $(".gnb").css("color", "black");
            $(".btn_kr li > a").css("color", "black");
            $(".m_menu").css("display", "block");
            $(".btn_menu").css("display", "none");

            if (SearchArea) {
                $('.searchArea').fadeOut();
                $('.btn_close').hide();
                $('.btn_w').show();
                $('.grayBox').fadeOut();
                $('.btn_close2').css('display', 'none');
                SearchArea = false;
            }
        } else {
            $header.removeClass('on');
            $(".logo_w").css("display", "block");
            $(".logo_b").css("display", "none");
            $header.css("backgroundColor", "");
            $(".gnb_h").css("color", "white");
            $(".btn_w").css("display", "block");
            $(".btn_b").css("display", "none");
            $(".kr_box").css("color", "white");
            $(".btn_kr").css("border-color", "white");
            $(".btn_kr li > a").css("color", "white");
            $(".m_menu").css("display", "none");
            $(".btn_menu").css("display", "block");
        }
    });

    $('.btn_b').click(function (e) {
        e.preventDefault();

        if (!SearchArea) {
            $('.btn_b').hide();
            $('.btn_w').addClass('on');
            $('.btn_close').show();
            $('.btn_w').hide();
            $('.searchArea').fadeIn();
            $(".logo_w").css("display", "none");
            $(".logo_b").css("display", "block");
            $(".gnb_h").css("color", "black");
            $("header").css("backgroundColor", "white");
            $(".kr_box").css("color", "black");
            $(".btn_kr").css("border-color", "black");
            $(".gnb").css("color", "black");
            $(".m_menu").css("display", "none");
            $('.grayBox').fadeIn();
            SearchArea = true;
        }
    });
    $('.m_serch').click(function () {
        isBtnWClicked = true;
        $('.btn_w').addClass('on');
        $('.btn_w').hide();
        $('.btn_b').hide();
        $('.m_menu').hide();
        $('.m_gnbArea').hide();
        $('.btn_close2').show();
        $('.searchArea').fadeIn();
        $(".logo_w").css("display", "none");
        $(".logo_b").css("display", "block");
        $(".gnb_h").css("color", "black");
        $("header").css("backgroundColor", "white");
        $(".btn_kr li > a").css("color", "black");
        $(".btn_fs li  a").css("color", "black");
        $(".kr_box").css("color", "black");
        $(".btn_kr").css("border-color", "black");
        $(".gnb").css("color", "black");
        $('.grayBox').fadeIn();
        SearchArea = true;
    });
    $('.btn_w').click(function () {
        isBtnWClicked = true;
        $('.btn_w').addClass('on');
        $('.btn_w').hide();
        $('.btn_close2').show();
        $('.searchArea').fadeIn();
        $(".logo_w").css("display", "none");
        $(".logo_b").css("display", "block");
        $(".gnb_h").css("color", "black");
        $("header").css("backgroundColor", "white");
        $(".btn_kr li > a").css("color", "black");
        $(".btn_fs li  a").css("color", "black");
        $(".kr_box").css("color", "black");
        $(".btn_kr").css("border-color", "black");
        $(".gnb").css("color", "black");
        $('.grayBox').fadeIn();
        SearchArea = true;
    });

    $('.btn_close').click(function () {
        $('.searchArea').fadeOut();
        $('.btn_close').hide();
        $('.btn_b').show();
        $('.btn_w').show();
        $(".logo_w").css("display", "none");
        $(".logo_b").css("display", "block");
        $(".gnb_h").css("color", "black");
        $('header').css("backgroundColor", "white");
        $(".kr_box").css("color", "black");
        $(".btn_kr").css("border-color", "black");
        $(".gnb").css("color", "black");
        $(".btn_kr li > a").css("color", "white");
        $(".btn_fs li  a").css("color", "white");
        $(".m_menu").css("display", "block");
        $(".btn_menu").css("display", "none");
        $('.grayBox').fadeOut();
        SearchArea = false;
    });

    $('.btn_close2').click(function () {
        $('.searchArea').fadeOut();
        $('.btn_close').hide();
        $('.btn_b').show();
        $('.btn_w').show();
        $(".logo_w").css("display", "block");
        $(".logo_b").css("display", "none");
        $(".gnb_h").css("color", "white");
        $('header').css("backgroundColor", "");
        $(".kr_box").css("color", "white");
        $(".btn_kr").css("border-color", "white");
        $(".gnb").css("color", "black");
        $(".btn_kr li > a").css("color", "white");
        $(".m_menu").css("display", "none");
        $(".btn_menu").css("display", "block");
        $(".btn_b").css("display", "none");
        $(".btn_close2").css("display", "none");
        $('.grayBox').fadeOut();
        isBtnWClicked = false;
        SearchArea = false;
    });

    $('.btn_menu').on('click', function () {
        $('.m_gnbArea').fadeIn();
        $('.grayBox').fadeIn();
    });

    $('.m_menu').on('click', function () {
        $('.m_gnbArea').fadeIn();
        $('.grayBox').fadeIn();
    });

    $('.m_close').on('click', function () {
        $('.m_gnbArea').fadeOut();
        $('.grayBox').fadeOut();
    });

    $('.acc-cue').on('click', function () {
        $(this).next('.acc-cns').stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next('.acc-cns').siblings('.acc-cns').stop().slideUp(300);
    });

    $('.acc-que').on('click', function () {
        $(this).next('.acc-ans').stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next('.acc-ans').siblings('.acc-ans').stop().slideUp(300);
    });


    $(document).ready(function () {
        $('.btn_kr').click(function () {
            $(this).toggleClass('on');
            $(this).find('ul').slideToggle();
            $('.btn_fs').removeClass('on');
            $('.btn_fs ul').slideUp();
        });

        $('.btn_fs').click(function () {
            $(this).toggleClass('on');
            $(this).find('ul').slideToggle();
            $('.btn_kr').removeClass('on');
            $('.btn_kr ul').slideUp();
        });

        $('.m_btn_kr').click(function () {
            $('.m_btn_kr').toggleClass('on');
            $('.m_btn_kr ul').slideToggle();
        });

        $('.m_btn_fs').on('click', function () {
            $('.m_btn_fs').toggleClass('on');
            $('.m_btn_fs ul').fadeToggle();
        });
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