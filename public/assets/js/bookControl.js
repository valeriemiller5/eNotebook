$(document).ready(function () {
    //"Open" the book on click
    // $(document).on("click", "#bookControl", function () {
    // console.log(this.id)
    setTimeout(function () {
        $(".book").css({
            "margin-left": "47%"
        })
        $(".front").css({
            "transform": "rotateY(-160deg) scale(1)",
            "box-shadow": "0 1em 3em 0 rgba(0, 0, 0, .2)"
        });
        $(".page1").css({
            "transform": "rotateY(-150deg) scale(1)",
            "box-shadow": "0 1em 3em 0 rgba(0, 0, 0, .2)"
        });
        $(".page2").css({
            "transform": "rotateY(-30deg) scale(1)",
            "box-shadow": "0 1em 3em 0 rgba(0, 0, 0, .2)"
        });
        $(".page3").css({
            "transform": "rotateY(-140deg) scale(1)",
            "box-shadow": "0 1em 3em 0 rgba(0, 0, 0, .2)"
        });
        $(".page4").css({
            "transform": "rotateY(-38deg) scale(1)",
            "box-shadow": "0 1em 3em 0 rgba(0, 0, 0, .2)"
        });
        $(".page5").css({
            "transform": "rotateY(-135deg) scale(1)",
            "box-shadow": "0 1em 3em 0 rgba(0, 0, 0, .2)"
        });
        $(".page6").css({
            "transform": "rotateY(-45deg) scale(1)",
            "box-shadow": "0 1em 3em 0 rgba(0, 0, 0, .2)"
        });
        $(".back").css({
            "transform": "rotateY(-20deg) scale(1)",
            "box-shadow": "0 1em 3em 0 rgba(0, 0, 0, .2)"
        });
        $(".page5").attr("id", "newId");
    }, 1500);
    // });

    //"Close" the book on click
    // $(document).on("click", "#newId", function () {
    // console.log(this.id)
    $(".book").css({
        "margin-left": "25%"
    })
    $(".front").css({
        "transform": "rotateY(0deg) scale(1)",
        "box-shadow": "none"
    });
    $(".page1").css({
        "transform": "rotateY(0deg) scale(1)",
        "box-shadow": "none"
    });
    $(".page2").css({
        "transform": "rotateY(0deg) scale(1)",
        "box-shadow": "none"
    });
    $(".page3").css({
        "transform": "rotateY(0deg) scale(1)",
        "box-shadow": "none"
    });
    $(".page4").css({
        "transform": "rotateY(0deg) scale(1)",
        "box-shadow": "none"
    });
    $(".page5").css({
        "transform": "rotateY(0deg) scale(1)",
        "box-shadow": "none"
    });
    $(".page6").css({
        "transform": "rotateY(0deg) scale(1)",
        "box-shadow": "none"
    });
    $(".back").css({
        "transform": "rotateY(0deg) scale(1)",
        "box-shadow": "none"
    });
    $(".page5").attr("id", "bookControl");
    // }):

});