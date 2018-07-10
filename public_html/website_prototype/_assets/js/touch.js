$(document).ready(function () {

    var contextMatrix = ["<h2>Barry Snicklefritz</h2>", "<p>Paragraph Text</p>"];
    console.log(contextMatrix);
    $("#profiletext").each(function () {
        $(this).html(contextMatrix[0]);
    });


    //remember to make these happen on resize, as well
    var clickedlr;
    var docwidth = $(document).width();
    var buttonPosLeft = docwidth - 37;
    var buttonPos33 = (docwidth - (((docwidth - 48) * .66) + 48));
    $("#button").css({ left: buttonPos33 });
    //functions
    (function ($) {
        $.fn.baranimate = function (speed) {
            //find value of html code, including <span> tags
            var barwidth = $(this).html();

            //sets default animation to 1000ms, unless parameter is passed to function
            speed = speed || 1000;

            //remove span tags from html code - makes it just a number
            barwidth = barwidth.replace("<span>", "");
            barwidth = barwidth.replace("</span>", "");

            //adds background color based on value of barwidth
            if (barwidth > 70) {
                $(this).addClass("green");
            }
            else if (barwidth > 30) {
                $(this).addClass("yellow");
            }
            else {
                $(this).addClass("red");
            }

            //animates width of bar based on barwidth
            $(this).animate({ width: barwidth + "%" }, speed);
        };
    })(jQuery);

    (function ($) {
        $.fn.customerinfo = function (customernumber) {

        };
    })(jQuery);

    (function ($) {
        $.fn.canvasFull = function () {
            $(this).animate({ width: "100%" });
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasLeft = function () {
            $(this).removeClass("invisible");
            $(this).animate({ width: "32.5%" });
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasRight = function () {
            $(this).removeClass("invisible");
            $(this).animate({ width: "66%" });
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasNone = function () {
            $(this).animate({ width: '0%', right: "0", display: "none" }, function () { $(this).addClass("invisible"); });
        };
    })(jQuery);

    (function ($) {
        $.fn.rotate180 = function () {
            $(this).css({
                '-webkit-transform': 'rotate(180Deg)',
                '-moz-transform': 'rotate(180deg)',
                '-ms-transform': 'rotate(180deg)',
                'transform': 'rotate(180deg)'
            });
        };
    })(jQuery);

    (function ($) {
        $.fn.buttonPosition = function (clicklr) {
            //write to the console that the button was clicked
            console.log("button clicked");


            //collect values of button position - values are boolean
            var leftclass = $("#button").hasClass("left");
            var middleclass = $("#button").hasClass("middle");
            var rightclass = $("#button").hasClass("right");

            //left button, right click
            //button moves to middle
            if (leftclass === true) {
                console.log("left clicked");
                $("#button").removeClass("left");
                $("#button").addClass("middle");
                $("#pageone").canvasRight();
                $("#pagetwo").canvasLeft();
                $("#brightarrow").removeClass("bounceright");
                $("#button").animate({ left: buttonPos33 }, function () { $("#brightarrow").addClass("bounceright"); $("#bleftarrow").removeClass("invisible"); $("#bleftarrow").addClass("bounceleft"); $("#buttonleft").addClass("exists"); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); });


            }

                //middle button, left click
                //button moves to left
            else if ((middleclass === true) && (clickedlr === "left")) {
                console.log("middle left clicked");
                $("#button").removeClass("middle");
                $("#button").addClass("left");
                $("#pageone").canvasFull();
                $("#pagetwo").canvasNone();
                $("#bleftarrow").addClass("invisible");
                $("#brightarrow").removeClass("bounceright");
                $("#button").animate({ left: "-1px" }, function () { $("#brightarrow").addClass("bounceright"); $("#buttonleft").removeClass("exists"); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); });
            }


                //middle button, right click
                // button moves to right
            else if ((middleclass === true) && (clickedlr === "right")) {
                console.log("middle right clicked");
                $("#button").removeClass("middle");
                $("#button").addClass("right");
                $("#pageone").canvasNone();
                $("#pagetwo").canvasFull();
                $("#bleftarrow").removeClass("bounceleft");
                $("#brightarrow").addClass("invisible");
                $("#button").animate({ left: buttonPosLeft }, function () { $("#buttonright").removeClass("exists"); $("#button").addClass("leftshadow"); $("#button").removeClass("rightshadow"); $("#buttonleft").addClass("white"); $("#bleftarrow").addClass("darkblue"); $("#bleftarrow").addClass("bounceleft"); });
            }

                //right button, left click
                //button moves to middle
            else if (rightclass === true) {
                console.log("right clicked");
                $("#button").removeClass("right");
                $("#button").addClass("middle");
                $("#buttonleft").removeClass("white");
                $("#pageone").canvasRight();
                $("#pagetwo").canvasLeft();
                $("#bleftarrow").removeClass("bounceleft");
                $("#brightarrow").removeClass("bounceright");
                $("#bleftarrow").removeClass("darkblue");

                $("#button").animate({ left: buttonPos33 }, function () { $("#brightarrow").removeClass("invisible"); $("#buttonright").addClass("exists"); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); $("#bleftarrow").addClass("bounceleft"); $("#brightarrow").addClass("bounceright"); });
            }

        };

    })(jQuery);
    //bar graph animation 
    $(".bar").each(function () {
        $(this).baranimate(1000);
    });

    //button click
    $('#buttonleft').click(function () {
        clickedlr = "left";
        $(this).buttonPosition(clickedlr);
    });

    $('#buttonright').click(function () {
        clickedlr = "right";
        $(this).buttonPosition(clickedlr);
    });

});