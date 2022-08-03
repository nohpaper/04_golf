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
    var paymentHeight1, paymentHeight2, paymentHeight3,
        paymentHeightAll,
        paymentHeightMath;
    var paymentAgreeFalse = false;
    var mypageWrap = $(".mypage_wrap"),
        paymentAgreeAll = mypageWrap.find(".payment_agree_all"),
        paymentAgreeBtn = paymentAgreeAll.find(".form_type03_2 > button");
    var paymentAgreeSingly = $(".payment_agree_singly").height();


    paymentHeight();
    $window.resize(function(){
        paymentHeight();
        paymentAgreeDown();
    })

    paymentAgreeBtn.click(function(e){
        paymentAgreeDown();
    });

    function paymentAgreeDown() {
        if(paymentAgreeAll.hasClass("active") && !paymentAgreeFalse){
            paymentAgreeFalse = true;
            paymentAgreeBtn.text("열기");
            paymentAgreeAll.removeClass("active");

            $(".payment_agree_singly").animate({ height: paymentAgreeSingly }, { duration:300, complete: function(){ paymentAgreeFalse = false; }});
        }else if(!paymentAgreeAll.hasClass("active") && !paymentAgreeFalse){
            paymentAgreeFalse = true;
            paymentAgreeBtn.text("접기");
            paymentAgreeAll.addClass("active");

            $(".payment_agree_singly").animate({ height: 0 }, { duration:300, complete: function(){ paymentAgreeFalse = false; }});
        }
    }
    function paymentHeight() {
        paymentHeight1 = $(".page_wrap").height(),
        paymentHeight2 = $(".my_profile").height(),
        paymentHeight3 = $(".payment_txt").height();
        paymentHeightAll = paymentHeight1 + paymentHeight2 + paymentHeight3;
        paymentHeightMath = winH - paymentHeightAll - 30;

        $(".payment_wrap.list_no").css("height", paymentHeightMath);
    }
}