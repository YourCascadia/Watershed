$(document).ready(function () {
	// $(".right h1").click(function(){
	// 	console.log("right h1 clicked");
	// 	var position = $(this).offset();
 //        $("#contextmenu").css({
 //            top: position.top,
 //            left: position.left
 //        });	
 //        $("#contextmenu").show( "scale", { percent: 50 }, 200);
 //        $("#contextmenu").draggable();
	// });
	//$(".profileinfo").sortable();
	//$("#right").sortable(); //!
	//next line added to progam.js
	//$("#badgemenu").draggable();
	//$(".feed").jScrollPane({ contentWidth: '0px' });
});

$(document).mouseup(function (e)
{
	var container = $("#badgemenu");

	if (!container.is(e.target) 
	    && container.has(e.target).length === 0) 
	{
	    $( "#badgemenu" ).hide( "scale", { percent: 50 }, 200 );
	}
});

