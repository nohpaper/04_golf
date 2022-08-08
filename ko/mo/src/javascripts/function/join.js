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