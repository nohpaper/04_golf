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