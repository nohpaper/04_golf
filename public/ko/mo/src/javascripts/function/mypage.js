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