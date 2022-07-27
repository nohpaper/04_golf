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
}