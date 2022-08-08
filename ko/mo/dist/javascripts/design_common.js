"use strict";
var winW;
var winH;
var $window = $(window);
var winSc = $(window).scrollTop();

var $popupBtn = $(".btn_popup"),
    $popupBox = $(".popup"),
    $popupBg = $(".dimmed"),
    $closePopupBtn = $(".btn_popup_close")

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
}
function join() {
    // 매칭 요청 팝업
    var $matchPopup = $(".popup_match_wrap");
    $(".match_btn").on("click", function(){
        $matchPopup.addClass("match_active");
    });
    $(".popup_match_wrap .dimmed, .popup_match_wrap button").on("click", function(){
        $matchPopup.removeClass("match_active");
    });

    // 날짜선택
    $(".datepicker").datepicker({
        dateFormat: 'yy.mm.dd (D)',
        showMonthAfterYear:true,  //년도-월 순서
        yearSuffix: ".",
        minDate: "-0D",
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        onClose : function (dateText, inst) {
            $(".datepicker_dimmed").remove();
            $("html, body").css({
                "overflow": "inherit",
                "touch-action": "inherit"
            });
        },
    });
    $(".datepicker").on("click", function(){
        var TopAll = ( ($(window).height() - $("#ui-datepicker-div").outerHeight()) / 2 ) + $(window).scrollTop();
        $("#ui-datepicker-div").after(' <p class="datepicker_dimmed"></p>');
        $("html, body").css({
            "overflow": "hidden",
            "touch-action": "none",
        });
        $("#ui-datepicker-div").css({
            "top": TopAll + "px"
        });

    });




    /*$(".datepicker").on("touchend", function(e){
        var endX = e.changedTouches[0].clientX;
        var endY = e.changedTouches[0].clientY;
        console.log(endX);
        console.log(endY);


        //BodyScrollDisAble();


        var TopAll = ( ($(window).height() - $("#ui-datepicker-div").outerHeight()) / 2 ) + $(window).scrollTop();
        $("#ui-datepicker-div").after(' <p class="datepicker_dimmed"></p>');
        $("html, body").css("overflow", "hidden");
        $("#ui-datepicker-div").css({
            "top": TopAll + "px"
        },false);
    });*/

/*    $(".datepicker").on("touchend", function(e){
        // 터치 종료 객체 ID 확인
        var EndTouchId = e.target.getAttribute("id");

        // 종료 좌표값 확인
        var endX = e.originalEvent.changedTouches[0].clientX;
        var endY = e.originalEvent.changedTouches[0].clientY;

        var TopAll = ( ($(window).height() - $("#ui-datepicker-div").outerHeight()) / 2 ) + $(window).scrollTop();
        $("#ui-datepicker-div").after(' <p class="datepicker_dimmed"></p>');
        $("html, body").css("overflow", "hidden");
        $("#ui-datepicker-div").css({
            "top": TopAll + "px"
        },false);
    });*/
}
function layout() {
    // popup
    var _seletePopup;
    $popupBtn.on("click", function(e){
        $popupBox.css({"display":"none"});
        _seletePopup = $(this).data("popup");
        $("."+_seletePopup).css({"display":"flex"});
        $("."+_seletePopup).focus();
        $("body,html").css({"overflow-y":"hidden"});

        var _this = $(this);
        $closePopupBtn.on("click focusout", function(){
            _this.focus();
            $popupBox.fadeOut();
            $("body,html").css({"overflow-y":"auto"});
        });
        $popupBg.on("click", function(){
            _this.focus();
            $popupBox.fadeOut();
            $("body,html").css({"overflow-y":"auto"});
        });
        e.preventDefault();
    });

    // bottomBar
    $requestBtn.on("click", function(){
        $bottomBar.toggleClass("navi_active")
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
}
function member() {
}
function mypage() {
    var $termsWrap = $(".payment_agree_wrap"),
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
    });
}