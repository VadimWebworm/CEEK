$(function () {
    function setHeiHeight() {
        $(".screen-height").height($(window).height());
    };
    setHeiHeight();
    $(window).resize(setHeiHeight);

    // $('[data-fancybox="gallery"]').fancybox({
    //     animationEffect: "zoom",
    //     transitionEffect: "fade",
    //     buttons: [
    //         "zoom",
    //         "slideShow",
    //         "fullScreen",
    //         "thumbs",
    //         "close"
    //     ],
    // });
});