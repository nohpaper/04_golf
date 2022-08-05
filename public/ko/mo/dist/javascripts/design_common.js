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
    var popupAddress = $(".popup_address");
    var addressHeight1 = popupAddress.height(),
        addressHeight2 = popupAddress.eq(0).find("div").height(),
        addressHeight3 = $(".address_filter").outerHeight(),
        addressHeightAll = addressHeight1 - (addressHeight2 + addressHeight3);

    $(".address_list").css("height", addressHeightAll);
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