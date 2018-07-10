$(document).ready(function() {
	$('.window').click(function() {
		$(this).css("box-shadow", "0px 0px 50px 0px rgba(112,112,112,.5)");
	});

	var hashval = location.hash.toLowerCase();
    if (hashval === "#music") {
       $( ".music" ).insertBefore( $( ".main" ) );
    }
    else if (hashval === "#merch")
	{
		 $( ".merch" ).insertBefore( $( ".main" ) );
	}
	else if (hashval === "#videos")
	{
		 $( ".videos" ).insertBefore( $( ".main" ) );
	}
	else if (hashval === "#pics")
	{
		 $( ".pics" ).insertBefore( $( ".main" ) );
	}
	else if (hashval === "#secret")
	{
		$("<h1>You found a <a href='secret.html'>little secret</a>!</h1>").insertBefore( $(".canvas"));
	}
	else if (hashval === "#signup")
	{
		$("<h1>Sign up <input type='text'>name</input></h1>").insertBefore( $(".canvas"));
	}

});