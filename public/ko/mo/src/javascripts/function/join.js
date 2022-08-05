function join() {
    var popupAddress = $(".popup_address");
    var addressHeight1 = popupAddress.height(),
        addressHeight2 = popupAddress.eq(0).find("div").height(),
        addressHeight3 = $(".address_filter").outerHeight(),
        addressHeightAll = addressHeight1 - (addressHeight2 + addressHeight3);

    $(".address_list").css("height", addressHeightAll);
}