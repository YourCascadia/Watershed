$(document).ready(function () {

    //just trying out some content loading. Don't mind me
    /* var contextMatrix = ["<h2>Barry Snicklefritz</h2>","<p>Paragraph Text</p>"];
    console.log(contextMatrix);
    $(".profiletext").each(function() { 
        $(this).html(contextMatrix[0]);
    }); */

//add multiple layers for #pageone contents
    //remember to make these happen on resize, as well
    var clickedlr;
    var docwidth = $(document).width();

    //49 = 25 (width of half of the button) + 12 (margin) + 12 (padding);
    var buttonPosLeft = docwidth - 49;
    //var pageonewidth = $("#pageone").width();
    //console.log("width" + pageonewidth);
    //(width of document) - (width of #pageone) - 48 (margins and padding);
    //var buttonPos33 = (docwidth - pageonewidth - 48);
    //$("#button").css({left: buttonPos33});

    // (function ($) {
       // $.fn.goldenratio = function() {
            var a = (docwidth - 48) / 1.618;
            var b = docwidth - 48 - a;
            $("#pageone").width(a + "px");
            $("#pagetwo").width(b + "px");
            var buttonPos33 = (b + 1);
            $("#button").css({left: buttonPos33});
        // };
   // })(jQuery);


    //functions
    (function ($) {
        $.fn.baranimate = function (speed) {
            //CHANGE THIS NOTE
            //find value of html code, including <span> tags
            
            var barnumerator = $(this).find(".number").html();
            console.log(barnumerator);
            var bardenominator = $(this).find(".littlebits").html();
            console.log("bottom number" + bardenominator);
            var barwidth = (barnumerator / bardenominator) * 100;
            console.log("actual number" + barwidth);

                // number / littlebits / bar (animate)
            //sets default animation to 1000ms, unless parameter is passed to function
            speed = speed || 1000;

            //remove span tags from html code - makes it just a number


            //adds background color based on value of barwidth
            if (barwidth > 70) {
                $(this).find(".bar").addClass("green");
                $(this).find(".number").css("color", "green");
            }
            else if (barwidth > 30) {
                $(this).find(".bar").addClass("yellow");
                $(this).find(".number").css("color", "yellow");
            }
            else {
                $(this).find(".bar").addClass("red");
                $(this).find(".number").css("color", "red");
            }
            //animates width of bar based on barwidth
            $(this).find(".bar").animate({ width: barwidth + "%"}, speed);
        };
    })(jQuery);

    (function ($) {
        $.fn.customerinfo = function (customernumber) {
            
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasFull = function () {
            $(this).animate({ width: "100%" });
            $(this).addClass("expanded");
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasLeft = function () {
            $(this).removeClass("invisible");
            $(this).animate({ width: b + "px" });

            $(this).removeClass("expanded");
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasRight = function () {
            $(this).removeClass("invisible"); 
            $(this).animate({ width: a + "px"  });
            $(this).removeClass("expanded");
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasNone = function () {
            $(this).animate({ width: '0%', right: "0",  display: "none" }, function() { $(this).addClass("invisible"); $(this).removeClass("expanded"); } );
        };
    })(jQuery);

    (function ($) {
        $.fn.rotate180 = function() {
            $(this).css({'-webkit-transform' : 'rotate(180Deg)',
                '-moz-transform' : 'rotate(180deg)',
                '-ms-transform' : 'rotate(180deg)',
                'transform' : 'rotate(180deg)'});
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
                $("#button").animate({left: buttonPos33}, function() { $("#brightarrow").addClass("bounceright"); $("#bleftarrow").removeClass("invisible"); $("#bleftarrow").addClass("bounceleft"); $("#buttonleft").addClass("exists"); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); });
                

            }

                //middle button, left click
                //button moves to left
            else if (( middleclass === true ) && (clickedlr === "left")) {
                console.log("middle left clicked");
                $("#button").removeClass("middle");
                $("#button").addClass("left");
                $("#pageone").canvasFull();
                $("#pagetwo").canvasNone();
                $("#bleftarrow").addClass("invisible");
                $("#brightarrow").removeClass("bounceright");
                $("#button").animate({left: "-1px"}, function() { $("#brightarrow").addClass("bounceright"); $("#buttonleft").removeClass("exists"); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); }); 
            }
            

                //middle button, right click
                // button moves to right
            else if (( middleclass === true ) && (clickedlr === "right")) {
                console.log("middle right clicked");
                $("#button").removeClass("middle");
                $("#button").addClass("right");
                $("#pageone").canvasNone();
                $("#pagetwo").canvasFull();
                $("#bleftarrow").removeClass("bounceleft");
                $("#buttonleft").addClass("invisible");
                $("#buttonright").addClass("invisible");
                $("#brightarrow").addClass("invisible");
                $("#button").removeClass("rightshadow");
                $("#button").animate({left: buttonPosLeft}, function() { $("#buttonright").removeClass("exists"); $("#button").addClass("leftshadow"); $("#buttonleft").removeClass("invisible"); $("#buttonleft").addClass("white"); $("#bleftarrow").addClass("darkblue"); $("#bleftarrow").addClass("bounceleft");}); 
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
                
                $("#button").animate({left: buttonPos33}, function() { $("#brightarrow").removeClass("invisible"); $("#buttonright").removeClass("invisible"); $("buttonright").removeClass("invisible"); $("#buttonright").addClass("exists"); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); $("#bleftarrow").addClass("bounceleft"); $("#brightarrow").addClass("bounceright"); }); 
            }

        };

    })(jQuery);
        //bar graph animation 
        $(".prebars").each(function () {
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