function myFunction() {
    // Declare variables
    // Pure JS way to hide / show matched search queries 
    // Doesn't use Jquery
    var url = "https://www.w3schools.com/howto/howto_js_filter_lists.asp";
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    console.log("I found this script at " + url);
}



