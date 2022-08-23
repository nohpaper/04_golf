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

    var clipboard = new ClipboardJS('.btn_copy');

    clipboard.on('success', function() {
        $(".copied_txt").addClass("active");
        setTimeout(function (){
            $(".copied_txt").removeClass("active");
        },1800);
    });

    // 클립보드
    var $copyBtn = new ClipboardJS('.btn_copy'),
        $copyInfoTxt = $(".copied_txt");

    clipboard.on('success', function() {
        TweenMax.to($copyInfoTxt, .5, { opacity:1, visibility:"visible", y:0 });
        setTimeout(function(){
            $copyInfoTxt.removeAttr("style")
        },2500)
    });
}