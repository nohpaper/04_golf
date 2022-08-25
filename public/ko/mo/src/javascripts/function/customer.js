function customer() {
    var $marketingWrap = $(".marketing_wrap div");
    $marketingWrap.on("click", function(){
        $marketingWrap.toggleClass("active");
    });

    /* 채팅 입력란 */
    var $chatWrite = $(".chat_write"),
        $chatBtn = $(".chat_write .btn_write"),
        $chatTextArea = $(".chat_write textarea");

    $chatTextArea.on({
        focus: function() {
            $chatWrite.addClass("keyup");
        },
        keyup: function() {
            $chatWrite.addClass("keyup");
            if($chatTextArea.val() !== ""){
                $chatBtn.removeAttr("disabled");
            }else{
                $chatWrite.removeClass("active");
                $chatBtn.attr("disabled","disabled")
            }
        },
        blur: function() {
            $chatWrite.removeClass("keyup");

            if($chatTextArea.val() !== ""){
                $chatWrite.addClass("active");
            }else{
                $chatWrite.removeClass("active");
            }
        }
    });
}