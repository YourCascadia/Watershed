(function ($) {
    $.fn.buttonPosition = function (clickedlr, cm, t) {
        clickedlr = clickedlr || false;
        if (!clickedlr) { return false; }
        $(document).sizes();
        var x,
            t200 = 200,
            t500 = 500,
            slow = "slow",
            leftclass = $("#button").hasClass("left"), 
            middleclass = $("#button").hasClass("middle"), 
            rightclass = $("#button").hasClass("right");

        if (t == 0) {
            t200 = 0;
            t500 = 0;
            slow = 0;
        }

        if ((cm == 1) || (leftclass)) { 
            x = 1
        } 
        if ((cm == 2) || ((middleclass && clickedlr === "left"))) { 
            x = 2 
        } 
        if ((cm == 3) || ((middleclass && clickedlr === "right"))) { 
            x = 3
        } 
        if (cm == 4) {
            x = 1;
        }
        if (rightclass) {
            x = 4;
        }
        
        if (mobile === false) { //if mobile is false (if it's in desktop mode);
            //left button, right click  //button moves to middle
            if (x === 1) {
                
                $("#button").removeClass("left");
                $("#button").addClass("middle");
                $("#brightarrow").removeClass("bounceright");
                if (t == 0) {
                    $(document).resizecontent(0);
                    $(".profiletext").show(); 
                    $(".profileinfo").show();
                    $("#pic").profilepic(0);
                    $("#pic").addClass("leftshadow"); 
                    $("#content").canvasRight();
                    $("#profile").canvasLeft();
                    $("#button").css({ left: buttonPos33 });
                    $(document).resizecontent();  
                    $("#brightarrow").addClass("bounceright"); 
                    $("#bleftarrow").show(); 
                    $("#bleftarrow").addClass("bounceleft"); 
                    $("#buttonleft").show(); 
                    $("#button").addClass("rightshadow"); 
                    $("#button").removeClass("leftshadow");
                } else {
                    $(document).resizecontent();
                    $(".profiletext").show(t200); 
                    $(".profileinfo").show(t200);
                    $("#pic").profilepic(t200);
                    $("#pic").addClass("leftshadow", t500); 
                    $("#content").canvasRight(t500);
                    $("#profile").canvasLeft(t500);
                    $("#button").animate({ left: buttonPos33 }, function () { $(document).resizecontent();  $("#brightarrow").addClass("bounceright"); $("#bleftarrow").show(); $("#bleftarrow").addClass("bounceleft"); $("#buttonleft").show(); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); }, t500);
                }

                window.location.hash = 'home';
                $("#button").addClass("middle");
                $("#profilemenu").hide();
                $(document).reanimate();
            }

                //middle button, left click //button moves to left
            if (x === 2) {
                $(document).resizecontent();
                $(".profiletext").hide();
                $(".profileinfo").hide();
                $("#profile").hide();
                $("#pic").removeClass("leftshadow"); 
                if (t == 0) {
                    $("#pic").profilesmall(0); // ?
                    $("#content").canvasFull(0);
                    $("#bleftarrow").hide();
                    $("#brightarrow").removeClass("bounceright");
                    $("#button").css({ left: buttonPosLeft });
                    $(document).resizecontent(); 
                    $("#brightarrow").addClass("bounceright"); 
                    $("#buttonleft").hide(); 
                    $("#button").addClass("rightshadow"); 
                    $("#button").removeClass("leftshadow");

                    window.location.hash = 'content';
                } else {
                    $("#pic").profilesmall(t500);
                    $("#content").canvasFull(t500);
                    $("#bleftarrow").hide(t500);
                    $("#button").animate({ left: buttonPosLeft }, function () { $(document).resizecontent();  $("#brightarrow").addClass("bounceright"); $("#buttonleft").hide(); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); }, t500);
                }
                
                $("#button").removeClass("middle");
                $("#button").addClass("left");
                $("#brightarrow").removeClass("bounceright");
                window.location.hash = 'content';
            }
                //middle button, right click // button moves to right
            if (x === 3) {
                $(document).resizecontent();
                $("#button").removeClass("middle");
                $("#button").addClass("right");
                if (t == 0) {
                    $("#content").canvasNone(0);
                    $("#profile").canvasFull(0);
                    $("#button").css({ left: buttonPosRight });
                    $(document).resizecontent(); 
                    $("#buttonright").hide(); 
                    $("#button").addClass("leftshadow"); 
                    $("#buttonleft").show(); 
                    $("#buttonleft").addClass("white"); 
                    $("#bleftarrow").addClass("darkblue"); 
                    $("#bleftarrow").addClass("bounceleft");      
                } else {
                    $("#content").canvasNone(t500);
                    $("#profile").canvasFull(t500);
                    $("#button").animate({ left: buttonPosRight }, function () { $(document).resizecontent(); $("#buttonright").hide(); $("#button").addClass("leftshadow"); $("#buttonleft").show(); $("#buttonleft").addClass("white"); $("#bleftarrow").addClass("darkblue"); $("#bleftarrow").addClass("bounceleft"); }, t500);

                }
                $("#bleftarrow").removeClass("bounceleft");
                $("#buttonleft").hide();
                $("#buttonright").hide();
                $("#brightarrow").hide();
                $("#button").removeClass("rightshadow");
                window.location.hash = 'profile'; 
            }

                //right button, left click //button moves to middle
            if (x === 4) {
                $(document).resizecontent();
                $("#button").removeClass("right");
                $("#button").addClass("middle");
                $("#buttonleft").removeClass("white");
                $("#content").canvasRight(t500);
                $("#profile").canvasLeft(t500);
                $("#bleftarrow").removeClass("bounceleft");
                $("#brightarrow").removeClass("bounceright");
                $("#bleftarrow").removeClass("darkblue");
                $(document).reanimate();
                $("#button").animate({ left: buttonPos33 }, function () { $(document).resizecontent(); $("#brightarrow").show(); $("#buttonright").show(); $("buttonright").show(); $("#buttonright").show(); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); $("#bleftarrow").addClass("bounceleft"); $("#brightarrow").addClass("bounceright"); }, t500);
                window.location.hash = 'home';
                clickedlr = "null"; 
            }
        }
        //mobile code moved to mobile.js
    };
})(jQuery);