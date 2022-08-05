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