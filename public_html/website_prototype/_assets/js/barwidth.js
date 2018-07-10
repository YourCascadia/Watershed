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

