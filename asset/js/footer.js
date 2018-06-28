$(document).ready(function () {
    var
        fContent = $('.f-content'),
        fTitle = $(".f-title-sp");
    $(".navbar-toggler").click(function () {
        $(this).toggleClass("isactive");
    });
    $(window).resize(function () {
        var fContent = $('.f-content'),
            nDocWidth = $(document).width();
        if (nDocWidth > 580) {
            fContent.addClass("isShow");
        }
    })
    fTitle.on("click", function () {
        var nDocWidth1 = $(document).width();
        if (nDocWidth1 <= 580) {
            $(this).next(".f-content").toggleClass("isShow");
        }
    });
})