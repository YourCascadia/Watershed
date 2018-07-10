$(document).ready(function() { 
    
    var $p2a = $('#pagetwo:after');

    var buttonval;
    
    (function( $ ){
    $.fn.baranimate = function() {
            var barwidth = $(this).html();
            barwidth = barwidth.replace("<span>","");
            barwidth = barwidth.replace("</span>", "");
            if (barwidth > 70) {
                $(this).addClass("green");
            }
            else if (barwidth > 30) {
                $(this).addClass("yellow");
            }
            else {
                $(this).addClass("red");
            }

            $(this).animate({
                width: barwidth + "%",
                opacity: "1"
            }, 1500);
    }; 
})( jQuery ); 



    $(".bar").each(function() {
        $(this).baranimate();

        /*var barwidth = $(this).html();
        barwidth = barwidth.replace("<span>","");
        barwidth = barwidth.replace("</span>", "");
        if (barwidth > 70) {
            $(this).addClass("green");
        }
        else if (barwidth > 30) {
            $(this).addClass("yellow");
        }
        else {
            $(this).addClass("red");
        }

        $(this).animate({
            width: barwidth + "%",
            opacity: "1"
        }, 1500);
        */
    }); 

    $('#button').click(function() {
        $("#pagetwo").toggleClass("expanded");

        if (buttonval === 1) {
            //button moves to left side - default
            $('#pageone').animate({
                width: "66%",
                overflow: "visible"
            });
            $('#pagetwo').animate({ 
                width: "32.5%"
            });
            $( "#pagetwo" ).fadeTo( "fast" , 1, function() {
                $("#pagetwo").toggleClass("insetshadow");
            });
            
            $(this).animate({ 
                left: "33%"
            });
            $("#button").html("&nbsp;>");
            
            $("#button").toggleClass("rightshadow");
            $("#button").toggleClass("leftshadow");

            

            buttonval = 0;     
        }
        else {
            //button moves to right side
            $('#pageone').animate({
                width: '0%', 
                right: "0",
                overflow: "hidden"
            });
            $('#pagetwo').animate({ 
                width: "97.5%"
            });
            
            $( "#pagetwo" ).fadeTo( "fast" , 1, function() {
                $("#pagetwo").toggleClass("insetshadow");
            });
            $(this).animate({ 
                left: "95%"
            });
            $("#button").html("&nbsp;<");
            $("#button").toggleClass("rightshadow");
            $("#button").fadeTo( "fast", 1, function() {
                $("#button").toggleClass("leftshadow");
            });

            
            buttonval = 1;
        }
    });
});