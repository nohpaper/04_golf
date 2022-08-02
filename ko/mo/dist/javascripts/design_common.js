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
}
function main() {
}
function member() {
}
function mypage() {
    var mypageWrap = $(".mypage_wrap");
    var paymentAgreeWrap = mypageWrap.find(".membership_list_wrap .payment_agree_wrap");
    var paymentAgreeAll = paymentAgreeWrap.find(".payment_agree_all");

    paymentAgreeAll.find(".form_type03_2 > button").click(function(e){
        if(paymentAgreeAll.hasClass("active")){
            paymentAgreeAll.find(".form_type03_2 > button").text("열기");
            $(".payment_agree_singly").slideDown(function(){
                paymentAgreeAll.removeClass("active");
            });
        }else {
            paymentAgreeAll.find(".form_type03_2 > button").text("접기");
            $(".payment_agree_singly").slideUp(function(){
                paymentAgreeAll.addClass("active");
            });
        }
        e.preventDefault();
    });

}