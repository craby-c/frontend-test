$(document).ready(function(){
    var circle = $(".circle");
    circle.click(function(){
        circle.removeClass("yellow");
        $(this).addClass("yellow");
        if ($(this)[0] == circle.last()[0]){
            $(".right").attr("disabled", true);
            $(".left").attr("disabled", false);
        }
        else if ($(this)[0] == circle.first()[0]){
            $(".left").attr("disabled", true);
            $(".right").attr("disabled", false);
        }
        else {
            $(".right, .left").attr("disabled",false);
        }
    });
    $(".right").click(function(){
        var y = $(".yellow");
        y.next().addClass("yellow");
        y.removeClass("yellow");
        if (y.next()[0] == circle.last()[0]){
            $(".right").attr("disabled", true);
        }
        else {
            $(".right, .left").attr("disabled",false);
        }
    });
    $(".left").click(function(){
        var y = $(".yellow");
        y.prev().addClass("yellow");
        y.removeClass("yellow");
        if (y.prev()[0] == circle.first()[0]){
            $(".left").attr("disabled", true);
        }
        else {
            $(".right, .left").attr("disabled",false);
        }
    });
    $(".plus").click(function(){
        var s = $(this);
        s.attr("disabled", true);
        setTimeout(function(){
            s.attr("disabled", false);
        },3000);
    });
    $(".letter").click(function(){
        $(this).not(".home").removeClass("letter").addClass("red-btn");
    });
    $(".buy").click(function(){
        $(".cart").css({"display": "none"});
        $(".wait").css({"display": "inline-block"});
        setTimeout(function(){
            $(".wait").css({"display": "none"});
            $(".cart").css({"display": "inline-block"});
            $(".buy").attr("disabled", true);
        },3000);
    });
    $(".show").click(function(){
        $(this).css({"display": "none"});
        $(".hide").css({"display": "inline-block"});
        $(".change").attr("type","text");
    });
    $(".hide").click(function(){
        $(this).css({"display": "none"});
        $(".show").css({"display": "inline-block"});
        $(".change").attr("type","password");
    });
});