$(document).ready(function () {
    //main JavScript for the LEDDA project

    /* NOTES
    
    // Fixed in Version 3.12 //fixed margin / padding. Now completely controlled by CSS. //fixed flash on mobile > desktop, //fixed flash on desktop > mobile //fixed button movement - no longer repeats //fixed left alignment of window and button //decided to zip backup copies
    
    //
    //Version 3.2
    //
    //
    //
    //
    //
    //fix padding for profile and content layers 
    //add multiple layers for #content contents
    //add "states" to transition directly to certain layers on load
    //break things down into more functions
    
    VERSION 4 plans

    //Graphs!
    //Feed
    //Profile Page
    //Menus (maybe make it higher priority)
    //Animations
    //Loading exact states / animations
    //
    //
    //

    Version 5 plans 
    //make back and forward buttons work within app
    //
    //.htaccess

    */

    //runs the main "Program" function on initial page load 
    //might have to split function into multiple steps (like initialization, resizing, etc, to fix new bug)
    $(document).ready(function () {
        $(this).Program();
    });
    //reruns the main "Program" function when the page is resized
    $(window).resize(function () {
        console.log("resize triggered");
        $(document).Program();
        // #flashes used for testing - will hopefully be able to be removed, as it causes an unsightly page refresh    
        //location.reload();
    });



    //moved all functions into main "Program" function
    (function ($) {
        $.fn.Program = function () {

    
    
    
    //initializing variables
    //initialize the variable for deciphering which button was clicked;
    var clickedlr = "null";
    var mobile;

    //padding
    //paddingstring = a string value of the padding of the canvas, including "px" - default is 12;
    var paddingstring = $(".canvas").css("padding");
    //paddingstring = paddingstring without px;
    paddingstring = paddingstring.replace("px", "");
    //padding = the integer of the padding value - default is 12;
    var padding = parseInt(paddingstring);
    
    //margin
    //marginstring = a string value of the margin of the canvas, including "px" - default is 12;
    var marginstring = $(".canvas").css("margin");
    //marginstring = marginstring without px;
    marginstring = marginstring.replace("px", "");
    //margin = the integer of the padding value - default is 12;    
    var margin = parseInt(marginstring);


    //getting widths
    //canvaswidth = the width of the canvas, without margins or padding;
    var docwidth = $("body").width();
    var docheight = $("body").height();
    
    var canvaswidth;
    var canvasheight;

    canvaswidth = docwidth - ((2 * padding) + (2 * margin));
    canvasheight = docheight - ((2 * padding) + (2 * margin));
    
     $(".canvas").width(canvaswidth);
     $(".canvas").height(canvasheight);
    //buttonwidth = the width of the button;
    var buttonwidth = $("#button").width();
    

    console.log(buttonwidth);
    //default screen sizes
    //a = the width of the canvas divided by the golden ratio
    var a = canvaswidth / 1.618;
    //b = the width of the canvas minus a (-minus 1, to account for rounding issues);
    var b = canvaswidth - a - 1;


    //button
    //halfbutton width = buttonwidth divided by 2 (useful in showing half of the button at a time);
    var halfbuttonwidth = buttonwidth / 2;
    console.log(halfbuttonwidth);
    //buttonPosRight = the distance of the button from the left of the screen when the left side is fully extended;
    //buttonPosRight = canvaswidth + margin + padding - halfbuttonwidth;
    var buttonPosRight = (canvaswidth + margin + padding - halfbuttonwidth);
    //buttonPos33 = the default position of the button (from the left side of the screen);
    //buttonPos33 = b + margin + padding - halfbuttonwidth;
    var buttonPos33 = b + margin + padding - halfbuttonwidth;
    //initial location of button is buttonPos33;

    var buttonPosLeft = margin + padding;

    //initialize login screen - Still in Beta
    //$(".canvas").hide();
    //$(".canvas").show().slideToggle();

    //initialize ? mobile
    //if document is wider than 800px...
    if (canvaswidth > 800) {
        console.log("initializing for desktop");

        //#content (div on the right side in the initial state) becomes the width of a, in pixels;
        $("#content").width(a + "px");
        $("#content").show();
        //#profile (div on the left side in the intial state) becomes the width of b, in pixels;
        $("#profile").width(b + "px");
        $("#profile").show();
        $("#buttonleft").show();
        $("#buttonright").show();
        $("#bleftarrow").removeClass("darkblue");
        $("#brightarrow").show();
        $("#bleftarrow").show();
        $("#buttonleft").removeClass("white");
        $("#button").removeClass("leftshadow");
        $("#button").addClass("rightshadow");

        //puts #button in the correct (middle) position;
        $("#button").css({ left: buttonPos33 });

        //declares that mobile is false. This is used for initializing the view and controlling the interactions;
        mobile = false;

        //sets window hash to "#home" - the default view for desktop;
        window.location.hash = 'home';
    }
    else {
        console.log("initializing for mobile");
        
        //#profile becomes full width;
        $("#profile").width("100%");
        //#content becomes 0% width and hidden;
        $("#content").width("0%");
        $("#content").hide();

        //put #button in the correct (right) location;
        $("#button").css({ left: buttonPosRight });

        //declares that mobile is true. This is used for initializing the view and controlling the interactions
        mobile = true;

        //sets window hash to "#profile" - the default view for mobile;
        //NOTE - remember to create a function to select proper content based on initializion / hash
        window.location.hash = 'profile';

        //initializing button on the right side
        $("#button").removeClass("middle");
        $("#button").addClass("right");
        $("#buttonright").hide();
        $("#brightarrow").hide();
        $("#button").removeClass("rightshadow");
        $("#buttonright").hide();
        $("#profilepic").addClass("autowidth"); 
        $("#button").addClass("leftshadow"); 
        $("#buttonleft").addClass("white"); 
        $("#bleftarrow").addClass("darkblue"); 
        $("#bleftarrow").addClass("bounceleft");
    }

    //Trying to make animated charts
    //keyword is trying...

    /*
    var ctx = document.getElementById("ebtchart");
    var data = {
        labels: [
            "Red",
            "Blue",
            "Yellow"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };
    
    var ebtchart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: options
    });
    */

    
    //functions

    /* (function ($) {
        $.fn.sethash = function (hashval) {
            hashval = hashval || "home";
            window.location.hash = hashval;
        };
    })(jQuery); */

    (function ($) {
        $.fn.baranimate = function (speed) {
            
            //find value of html codes

            //barnumerator = the html value of the class "number": value is a number;
            var barnumerator = $(this).find(".number").html();
            //bardenominator = the html value of the class "over": value is a number;
            var bardenominator = $(this).find(".over").html();
            //barwidth is a percentage, determined by dividing the barnumerator by the bardenominator;
            var barwidth = (barnumerator / bardenominator) * 100;

            //sets default animation to 1000ms, unless parameter is passed to function
            speed = speed || 1000;
            var initialwidth = "0px";

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


            $(this).find("bar").width(initialwidth);

            //animates width of bar based on barwidth
            $(this).find(".bar").animate({ width: barwidth + "%" }, speed);
        };
    })(jQuery);

    /*
    //This function is not currently in use: will potentially be used later for loading customer data from a matrix or database; 
    (function ($) {
        $.fn.customerinfo = function (customernumber) {

        };
    })(jQuery); 
    */

    (function ($) {
        $.fn.canvasFull = function () {
            $(this).show();
            var thiswidth = canvaswidth - 25;   
            $(this).animate({ width: thiswidth + "px" });
            $(this).addClass("expanded");
            
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasLeft = function () {
            $(this).show();
            $(this).animate({ width: b + "px" });
            $(this).removeClass("expanded");
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasRight = function () {
            $(this).show();
            $(this).animate({ width: a + "px" });
            $(this).removeClass("expanded");
        };
    })(jQuery);

    (function ($) {
        $.fn.canvasNone = function () {
            $(this).animate({ width: '0%', right: "0", display: "none" }, function () { $(this).hide(); $(this).removeClass("expanded"); });
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
        $.fn.longestnumber = function() {
            var maxwidth = 0;
            $(".number").each(function() {
                if ( this.width > maxwidth ) {
                    maxwidth = this.width;
                }
            });
            return maxwidth;
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

            //if mobile is false (if it's in desktop mode);
            if (mobile === false) {

                //left button, right click
                //button moves to middle
                if (leftclass === true) {
                    console.log("left clicked");
                    $("#button").removeClass("left");
                    $("#button").addClass("middle");
                    $("#content").canvasRight();
                    $("#profile").canvasLeft();
                    $("#brightarrow").removeClass("bounceright");
                    $("#button").animate({ left: buttonPos33 }, function () { $("#brightarrow").addClass("bounceright"); $("#bleftarrow").show(); $("#bleftarrow").addClass("bounceleft"); $("#buttonleft").show(); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); });
                    window.location.hash = 'home';
                    clickedlr = "null";
                    leftclass = false;
                    middleclass = false;
                    rightclass = false;
                    $(document).reanimate();
                }

                    //middle button, left click
                    //button moves to left
                else if ((middleclass === true) && (clickedlr === "left")) {
                    console.log("middle left clicked");
                    $("#button").removeClass("middle");
                    $("#button").addClass("left");
                    $("#content").canvasFull();
                    $("#profile").canvasNone();     
                    $("#bleftarrow").hide();
                    $("#brightarrow").removeClass("bounceright");
                    $("#button").animate({ left: buttonPosLeft }, function () { $("#brightarrow").addClass("bounceright"); $("#buttonleft").hide(); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); });
                    window.location.hash = 'content';
                    clickedlr = "null";
                    leftclass = false;
                    middleclass = false;
                    rightclass = false;
                }


                    //middle button, right click
                    // button moves to right
                else if ((middleclass === true) && (clickedlr === "right")) {
                    console.log("middle right clicked");
                    $("#button").removeClass("middle");
                    $("#button").addClass("right");
                    $("#content").canvasNone();
                    $("#profile").canvasFull();
                    $("#bleftarrow").removeClass("bounceleft");
                    $("#buttonleft").hide();
                    $("#buttonright").hide();
                    $("#brightarrow").hide();
                    $("#button").removeClass("rightshadow");
                    $("#button").animate({ left: buttonPosRight }, function () { $("#buttonright").hide(); $("#button").addClass("leftshadow"); $("#buttonleft").show(); $("#buttonleft").addClass("white"); $("#bleftarrow").addClass("darkblue"); $("#bleftarrow").addClass("bounceleft"); });
                    window.location.hash = 'profile';
                    clickedlr = "null";
                    leftclass = false;
                    middleclass = false;
                    rightclass = false;
                }

                    //right button, left click
                    //button moves to middle
                else if (rightclass === true) {
                    console.log("right clicked");
                    $("#button").removeClass("right");
                    $("#button").addClass("middle");
                    $("#buttonleft").removeClass("white");
                    $("#content").canvasRight();
                    $("#profile").canvasLeft();
                    $("#bleftarrow").removeClass("bounceleft");
                    $("#brightarrow").removeClass("bounceright");
                    $("#bleftarrow").removeClass("darkblue");

                    $("#button").animate({ left: buttonPos33 }, function () { $("#brightarrow").show(); $("#buttonright").show(); $("buttonright").show(); $("#buttonright").show(); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); $("#bleftarrow").addClass("bounceleft"); $("#brightarrow").addClass("bounceright"); });
                    window.location.hash = 'home';
                    clickedlr = "null";
                    leftclass = false;
                    middleclass = false;
                    rightclass = false;
                }
            }

            //otherwise, if it is in mobile mode
            else if (mobile === true) {


                //MOBILE MODE
                //STILL TESTING

                //NOT FINAL CODE
                //left button, right click
                //button moves to right side
                if (leftclass === true) {
                    console.log("mobile button - left to right");
                    $("#button").removeClass("left");
                    $("#button").addClass("right");
                    $("#content").canvasNone();
                    $("#profile").canvasFull();
                    $("#bleftarrow").removeClass("bounceleft");
                    $("#buttonleft").hide();
                    $("#buttonright").hide();
                    window.location.hash = "profile";
                    $("#brightarrow").hide();
                    $("#button").removeClass("rightshadow");
                    $("#button").animate({ left: buttonPosRight }, function () { $("#bleftarrow").show(); $("#buttonright").hide(); $("#button").addClass("leftshadow"); $("#buttonleft").show(); $("#buttonleft").addClass("white"); $("#bleftarrow").addClass("darkblue"); $("#bleftarrow").addClass("bounceleft"); });
                    clickedlr = "null";
                    leftclass = false;
                    middleclass = false;
                    rightclass = false;
                    $(document).reanimate();

                }
                        //mobile.. still testing... not final
                    //middle button, left click
                    //button moves to left
                else if (rightclass === true) {
                    console.log("mobile button - right to left");
                    $("#content").show();
                    $("#button").removeClass("middle");
                    $("#button").addClass("left");
                    $("#button").removeClass("right");
                    $("#buttonleft").hide();
                    $("#buttonleft").removeClass("white");
                    $("#buttonright").show();
                    $("#buttonright").show();
                    $("#content").canvasFull();
                    $("#profile").canvasNone();
                    $("#buttonleft").hide();
                    $("#button").removeClass("leftshadow");
                    window.location.hash = "content";
                    $("#bleftarrow").hide();
                    $("#brightarrow").removeClass("bounceright");
                    $("#brightarrow").show();
                    $("#button").animate({ left: buttonPosLeft }, function () { $("#brightarrow").addClass("bounceright");  $("#button").addClass("rightshadow");  });
                    clickedlr = "null";
                    leftclass = false;
                    middleclass = false;
                    rightclass = false;
                }

            }

            return false;
        };
    })(jQuery);
    //bar graph animation 
    (function ($) {
        $.fn.reanimate = function () {
            $(".prebars").each(function () {
                $(this).baranimate(1000);
            });
        };
    })(jQuery);

    $(document).reanimate();

    //profile picture click
    (function ($) {
        $.fn.small = function () {
            //profile picture click
            // $("#profilepic").click(function () {
                //$("#profilepic").small();
                $(this).addClass("profilesmall");
                $(this).removeClass("leftshadow"); 
                $(this).animate({ 
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    overflow: "hidden",
                    position: "absolute",
                    border: "4px solid blue",
                    top: "0px",
                    left: "-12px"
                }, 200, "linear");
            //});

        };
    })(jQuery);

    $("#profilepic").click(function () {
        $(this).addClass("profilesmall");
        $(this).removeClass("leftshadow"); 
        $(this).animate({ 
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            overflow: "hidden",
            position: "absolute",
            border: "4px solid blue",
            top: "0px",
            left: "-12px",
            display: "block",
            zIndex: 999
        }, 200, "linear");
    });

    //button click
    //unbind makes it so the button can only be clicked once at a time
    $('#buttonleft').unbind().click(function () {
        clickedlr = "left";
        $(this).buttonPosition(clickedlr);
        clickedlr = "null";
    });

    $('#buttonright').unbind().click(function () {
        clickedlr = "right";
        $(this).buttonPosition(clickedlr);
        clickedlr = "null";
    });

        };
    })(jQuery);

});