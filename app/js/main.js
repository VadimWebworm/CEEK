$(function () {
    function setHeiHeight() {
        $(".screen-height").height($(window).height());
    };
    setHeiHeight();
    $(window).resize(setHeiHeight);

    $(".periodOne").click(function () {
        $(".periodOne").addClass("hiden")
        // $("#main").delay(200).fadeOut(1500);
        // $("#periodInfoOne").fadeIn(200);
        // $("#main").fadeOut(2000)
        // $("#periodInfoOne").delay(2000).fadeIn(200)
        setTimeout(function () {
            $("#main").addClass("invisible");
            $("#periodInfoOne").removeClass("invisible");
        }, 500)

    });
    $(".boxCrossOne").click(function () {
        $("#periodInfoOne").addClass("invisible");
        $("#main").removeClass("invisible");
        $(".periodOne").removeClass("hiden")
    });

});