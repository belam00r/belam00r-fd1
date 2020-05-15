// Acc
$(document).on("click", ".brand .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".brand .menu div").removeClass("active");
        $(".brand ul li").removeClass("active");

        $(this).addClass("active");
        $(".brand ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".brand ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        // $(".brand ul").height(listItemHeight + "px");
    }
});
$(document).on("click", ".btn_menu", function(e) {
    e.preventDefault;
    $(".btn_menu").addClass("active");

});


$(document).on("click", ".btn_phone", function(e) {
    e.preventDefault;
    $(".btn_phone").addClass("active");

});