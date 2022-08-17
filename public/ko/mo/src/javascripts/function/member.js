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