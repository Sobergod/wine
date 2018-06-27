$(document).ready(function () {
    var nDocWidth = $(document).width(),
        rightNowWidth = nDocWidth;
    fContent = $('.f-content'),
        fTitle = $(".f-title"),
        fBtn = $(".f-btn");
    fBtn.hide();
    $(".navbar-toggler").click(function () {
        $(this).toggleClass("isactive")
    })

    // 检测浏览器变化 控制底部显示隐藏 屏幕宽度小于768px就隐藏加上个按钮
    $(window).resize(function () {
        var docWidth = $(document).width();
        rightNowWidth = docWidth;
        checkDocumentWidth(docWidth);
    })
    // 直接判断当前浏览器宽度
    function checkDocumentWidth(width) {
        if (width <= 570) {
            fContent.hide();
            fBtn.show();
            fTitle.addClass("f-title-sp");

        } else {
            fTitle.bind("click");
            fContent.show();
            fContent.removeClass("f-content-sp");
            fTitle.removeClass("f-title-sp");
            fBtn.hide()
        }
    }
    checkDocumentWidth(nDocWidth);
    fTitle.on("click", function () {
        if (rightNowWidth <= 550) {
            $(this).next(".f-content").toggleClass("f-content-sp");
            $(this).next(".f-content").toggle("0.5s");
        } else {
            return false;
        }
    })
})