"use strict";
var winW;
var winH;
var $window = $(window);
var winSc = $(window).scrollTop();

var $navBtn = $(".btn_nav"),
    $navWrap = $("#nav"),
    $navCloseBtn = $(".btn_nav_close");

var $bottomBar = $(".bottom_navi_wrap"),
    $requestBtn = $bottomBar.find(".btn_request");

$window.load(function () {
    var _this =  $(this);
    winW = _this.width();
    winH = _this.height();
    winSc = _this.scrollTop();
    $window.on("resize", function () {
        winW = _this.width();
        winH = _this.height();
    });
    _this.trigger("resize");
    $(window).scroll(function () {
        winSc = _this.scrollTop();
    });
    layout();
    main();
    member();
    join();
    mypage();
    customer();
});
function customer() {
    var $marketingWrap = $(".marketing_wrap div");
    $marketingWrap.on("click", function(){
        $marketingWrap.toggleClass("active");
    });
}
function join() {
    // 조인 메뉴 고정
    /*var $join = $(".join_wrap"),
        $joinList = $(".join_list_wrap");

    $(window).scroll(function(){
        var $scrolltop = $(this).scrollTop();
        var $headerH = $("#header").outerHeight(),
            $joinTitleH = $(".sub_title_wrap2").outerHeight(),
            $joinHeader = $(".join_top_wrap").outerHeight();

        var _totalHeight = $headerH+$joinTitleH;

        if($scrolltop < _totalHeight){
            if($join.hasClass("join_wrap_fix")){
                $join.removeClass("join_wrap_fix");
                $joinList.css({"margin-top":0})
            }
        }else{
            $join.addClass("join_wrap_fix");
            $joinList.css({"margin-top":$joinHeader})
        }
    });*/

    // 정렬하기
    var $alignBtn = $(".btn_align"),
        $alignWrap = $(".align_wrap"),
        $alignWrapbg = $(".align_wrap .dimmed")

    $alignBtn.on("click", function(){
        $alignWrap.addClass("active");
    });
    $alignWrapbg.on("click", function(){
        $alignWrap.removeClass("active");
    });

    // 필터
   var $filterBtn = $(".btn_filter"),
       $filterWrap = $(".filter_wrap"),
       $filterWrapBg = $(".filter_wrap .dimmed"),
       $filterCloseBtn = $(".filter_wrap .btn_close");

    $filterBtn.on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $filterWrap.addClass("active");
    });
    $filterCloseBtn.on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $filterWrap.removeClass("active");
    });
    $filterWrapBg.on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $filterWrap.removeClass("active");
    });

    // 매칭 요청 팝업
    var $matchPopup = $(".popup_match_wrap");
    $(".match_btn").on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $matchPopup.addClass("match_active");
    });
    $(".popup_match_wrap .dimmed, .popup_match_wrap .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $matchPopup.removeClass("match_active");
    });

    // 매칭 안내 페이지 팝업
    var $matchInfoPopup = $(".popup_match_info_wrap");
    $(".match_info_btn").on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $matchInfoPopup.addClass("match_active");
    });
    $(".popup_match_info_wrap .dimmed, .popup_match_info_wrap .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $matchInfoPopup.removeClass("match_active");
    });

    // 조인 매칭 이용수칙 안내 팝업
    var $matchGuidePopup = $(".popup_match_guide_wrap");
    $(".match_guide_btn").on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $matchGuidePopup.addClass("match_active");
    });
    $(".popup_match_guide_wrap .dimmed, .popup_match_guide_wrap .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $matchGuidePopup.removeClass("match_active");
    });

    // 날짜선택
    $(".datepicker").datepicker({
        dateFormat: 'yy.mm.dd (D)',
        showMonthAfterYear:true,  //년도-월 순서
        yearSuffix: ".",
        minDate: "-0D",
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showOn: "both",
        buttonText: "날짜선택",
        beforeShow : function(){
            $("#ui-datepicker-div").after(' <p class="datepicker_dimmed"></p>');
        },
        onClose : function (dateText, inst) {
            $(".datepicker_dimmed").remove();
        },
    });

    //이미지 업로드 슬라이드
    var swiper = new Swiper(".silde_photo_wrap", {
        // slidesPerView: 4,
        // spaceBetween: 10,
        slidesPerView: "auto",
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //댓글 입력
    var $textareaWrap = $(".textarea_wrap"),
        $textareaWrapArea = $textareaWrap.find("textarea");
    $textareaWrapArea.focus(function(){
        $textareaWrap.addClass("focus");
    });
    $textareaWrapArea.blur(function(){
        $textareaWrap.removeClass("focus");
    });

    //후기 별점
    var $star = $(".comments_star div button");
    $star.on("click", function(){
        $(this).parent().children('button').removeClass('active');
        $(this).addClass('active').prevAll('button').addClass('active');
    });
}
function layout() {
    // nav
    $navBtn.click(function(){
        // TweenMax.to($navWrap, .3, { opacity:1, visibility:"visible" });
        TweenMax.to($navWrap, .3, { left:0 });
        TweenMax.to("body,html", .3, { "overflow-y":"hidden" });
    });

    $navCloseBtn.click(function(){
        TweenMax.to($navWrap, .3, { left:"100vw" });
        TweenMax.to("body,html", .3, { "overflow-y":"auto" });
    });

    // bottomBar
    $requestBtn.on("click", function(){
        $bottomBar.toggleClass("navi_active");
    });

    // tabMenu
    var $tabMenu = $(".tab_menu li"),
        $tabCont = $(".tab_contents > div");

    $tabMenu.click(function(){
        var _idx = $(this).index();
        $tabMenu.removeClass("active");
        $tabCont.hide();

       $(this).addClass("active");
        $tabCont.eq(_idx).show();
    });
}
function main() {
    var swiper_schedule = new Swiper(".schedule_slide", {
        pagination: {
            el: ".swiper-pagination"
        },
    });

    var swiper_recuit = new Swiper(".recruit_slide", {
        // spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination"
        },
    });

    var swiper_review = new Swiper(".review_slide", {
        pagination: {
            el: ".swiper-pagination"
        },
    });

    var swiper_review_photo = new Swiper(".review_photo_slide", {
        slidesPerView: "auto",
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
function member() {
    // 서비스 이용수칙 안내 팝업
    var $serviePopup = $(".popup_service_info");
    /*$(".service_info_btn").on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $serviePopup.addClass("active");
    });*/
    $(".popup_service_info .dimmed, .popup_service_info .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $serviePopup.removeClass("active");
    });
}
function mypage() {
    /*var $termsWrap = $(".payment_agree_wrap"),
        $termsAllBtn = $(".payment_agree_all button"),
        $termsContent = $(".payment_agree_singly");

    $termsAllBtn.click(function(){
        if ($termsWrap.hasClass("active")) {
            $termsWrap.removeClass("active");
            TweenMax.to($termsContent, .3, {height: "auto"});
        } else {
            $termsWrap.addClass("active");
            TweenMax.to($termsContent, .3, {height: 0});
        }
    });*/
}