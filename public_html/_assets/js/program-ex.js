        
        

$(document).ready(function () {
    /* NOTES
    //main JavaScript for the LEDDA project
    //Version 4.0

    //ADDED RECENTLY :
    // Opening screen with username / password
    // New User screen
    // Functions to animate the first screen
    // Animated profile pic
    // Enhanced badge list (needs more CSS enhancements)
    // Added Angular controls to most of the content loading
    // Reduced loading times for the initial load
    // Graphics fixes
    // Initial cookie support (functions aren't completely setup yet)
    // Initial URL directives 
    // Done - functions only run when necessary - this will speed up the whole program
    // DONE - turn profile pic into a button
    // DONE - cookies, starter page, profile creation, opening animation
    // 
    // Fixed in Version 3.12 //fixed margin / padding. Now completely controlled by CSS. //fixed flash on mobile > desktop, //fixed flash on desktop > mobile //fixed button movement - no longer repeats //fixed left alignment of window and button //decided to zip backup copies // Fixed in Version 3.3 //added mouse position - useful for context menus //added basic menu and menu animations //added static context menu --- needs to be able to be generated dynamicall //added profile menu //fixed animations for profile menu //force animation on tab //fixed padding for profile and content layers // Fixed in Version 3.4 //fixed global variables //added badges //fixed menu dragging //added needs/wants section // Fixed in Version 3.5 // Fixed feed width on resize //  FIXED - xbutton is not working on #badgemenu//  FIXED - Xbutton is not working on #contextmenu //  FIXED - touch support has been added to jquery ui FIXED - hover issue on xbutton //  FIXED - close issue on xbutton //  FIXED - rewrote mainmenu function completely //  FIXED - Profile picture can no longer be dragged  //  FIXED - Changed all references of "unbind" to "off", since unbind has been deprecated //  FIXED - Button issues on load //  FIXED - badgelist issues have been fixed // FIXED - make resizecontent use the new values, rather than the old values, when calculating for animations. Then the code can be moved to happen during the rest of the animations
    //
    // VERSION 4 plans
    // add multiple layers for #content contents
    // add "states" to transition directly to certain layers on load
    // Move program until after all of the above, unless cookie is verified
    // Add local values to database
    // chart high number to lower number, equally distribute, or other options
    //
    // BUGS 
    // - functions within code (i.e. "viewBadges") is not working currently. //fix has been identified and has been used successfully for xbutton
    // - pushing data to global array isn't working
    // - if node.js will be used, functions will have to be rewritten as asynchronous - first aysynchronous steps are already complete
    //
    //auto - populate common items, or able to type items you want / need, etc.
    // highlight ones that other peope have

    Version 5 plans 
    //make back and forward buttons work within app
    //.htaccess
    //calendar
    //make something look like this: https://consider.it/examples
    //
    //
    //

    */


    var customerInfo = [
        {
            firstName:'Ethan',
            lastName:'Shaffer',
            location:"Portland, Oregon",
            profileImage: 'bearman.jpg',
            age:27,
            profileData:'',
            bars: [ ["Tokens", 598.65, 1000, 5], ["Reputation", 73.6, 100, 7], ["Votes Cast", 21, 100, 2], ["Exchanges", 427, 500, 11] ],
            graphData: [33, 26.5, 17, 10.5, 6.7, 6.3],
            graphLegend: ["Education", "Environment", "Public Welfare", "Health Services", "Business Loans", "LEDDA Admin"],
            graphColors: ["#FF6384", "#336699", "#abcdef", "#456456", "#123123", "#123456"],
            profileIntro:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            profileQuote:"I sure would like some ice cream right about now",
            badge: [0, 1, 2, 3, 4, 5, 6, 7, 5, 5, 5, 8, 9],
            ad: [ ["Needs", "lorem Ipsum", "lorem ipsum"], ["Wants", "lorem noralkj", "normalized text"], ["Has", "something else", "something"], ["Will", "what?", "something or another"] ],
            friends: [1, 2]
        },
        
        {
            firstName:'Elliott',
            lastName:'Karten',
            location:"Portland, Oregon",
            profileImage: 'bearman.jpg',
            age:27,
            profileData:'',
            bars: [ ["Tokens", 598.65, 1000, 5], ["Reputation", 73.6, 100, 7], ["Votes Cast", 21, 100, 2], ["Exchanges", 427, 500, 11] ],
            graphData: [33, 26.5, 17, 10.5, 6.7, 6.3],
            graphLegend: ["Education", "Alphabet Soup", "Public Welfare", "Health Services", "Business Loans", "LEDDA Admin"],
            graphColors: ["#FF6384", "#336699", "#abcdef", "#456456", "#123123", "#123456"],
            profileIntro:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            profileQuote:"I sure would like some jamba juice right about now",
            badge: [2,7],
            ad: [ ["needs", "lorem Ipsum", "lorem ipsum"], ["wants", "lorem noralkj", "normalized text"], ["has", "something else", "something"], ["will", "what?", "something or another"] ],
            friends: [0, 2]
        }
    ];

    var globalbuffer = [];
    var imagepath = "_assets/images/";
    var menuIntro = "<div class=\"xbutton\"><h3>X</h3></div><div class=\"innercontent\">";
    var graphLength, n, text, badge, needs, wants, has, will, firstName, lastName, location, profileImage, age, profileData, tokens, tokensPCT, tockensLVL, reputation, reputationPCT, reputationLVL, votes, votesPCT, votesLVL, exchanges, exchangesPCT, exchangesLVL, graphData, graphLegend, graphColors, profileIntro, profileQuote, mouseX, mouseY;
    var menu = $("#contextmenu");
    var badgeData = [ 
        {
            bgImgName:'1.png',
            badgeTitle:'Lv 1 - Token Badge',
            badgeInfo:'Receive your first Token wage',
            badgeDetails: ['juice: +2', 'Tokens gained: 500/mo']   
        },
        
        {
            bgImgName:'1.png',
            badgeTitle:'Lv 2 - Token Badge',
            badgeInfo:'Receive your second Token wage',
            badgeDetails: ['jamba: +2', 'Tokens gained: 125/mo']
        },
        {
            bgImgName:'2.png',
            badgeTitle:'Lv 3 - Token Badge',
            badgeInfo:'Receive your second Token wage',
            badgeDetails: ['badges: +2', 'Tokens gained: 356/mo']
        },
        {
            bgImgName:'3.png',
            badgeTitle:'Lv 4 - Token Badge',
            badgeInfo:'Receive your second Token wage',
            badgeDetails: ['hash: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName:'4.png',
            badgeTitle:'Lv 5 - Token Badge',
            badgeInfo:'Receive your second Token wage',
            badgeDetails: ['dummy: +2', 'Tokens gained: 129/mo']
        },
        {
            bgImgName:'5.png',
            badgeTitle:'Lv 6 - Token Badge',
            badgeInfo:'Receive your second Token wage',
            badgeDetails: ['action: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName:'6.png',
            badgeTitle:'Lv 7 - Token Badge',
            badgeInfo:'get your seasadcond Tokreen wage',
            badgeDetails: ['VERSION: +2', 'Tokens gained: 467/mo']
        },
        {
            bgImgName:'7.png',
            badgeTitle:'Lv 8 - Token Badge',
            badgeInfo:'Receive adjust second Token wage',
            badgeDetails: ['Rennaissance: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName:'8.png',
            badgeTitle:'Lv 9 - Token Badge',
            badgeInfo:'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName:'9.png',
            badgeTitle:'Lv 10 - Token Badge',
            badgeInfo:'Receive your second Tollamaken wage',
            badgeDetails: ['Reputation: +1', 'Tokens gained: 500/mo']
        },
        {
            bgImgName:'10.png',
            badgeTitle:'Lv 11 - Token Badge',
            badgeInfo:'Receive your second Token wage',
            badgeDetails: ['Dexterity: +2', 'Tokens gained: 500/mo']
        }
    ];

    $(window).resize(function() {
        console.log("resized");
        var x = $(".openScreen");
        console.log(x);
        if (x.is(':visible')) {
            x.centerVH(115);
        }
    });

    

    (function ($) {
        $.fn.centerVH = function (animation, bouncepast) {
            var width, height, pw, ph, x, y, xv, xy;
            var w = $(this).width();
            var h = $(this).height();
            var p = $(this).parent();
            var pt = parseInt($(this).css("padding-top"));
            var pl = parseInt($(this).css("padding-left"));
            var pr = parseInt($(this).css("padding-right"));
            var pb = parseInt($(this).css("padding-bottom"));
            var pvh = ((pt + pb) / 2);
            var pwh = ((pl + pr) / 2);

            if (p) { pw = $(this).parent().width(); ph = $(this).parent().height(); } else { pw = window.width(); ph = window.height(); }
            x = ((pw / 2) - (w / 2) - pwh);
            y = ((ph / 2) - (h / 2) - pvh);

            if (x<=0 || y<=0) { 
                xv = "100%"; xy = "100%"; 
                if (animation) { 
                    $(this).animate({width: "100%", height: "100%"}, animation);
                } else { 

                    $(this).css({width: "100%", height: "100%"}); 
                } 
            } 
            else { 
                xv = x; xy = y; 
                if (animation) { 
                    $(this).animate({ marginTop: xy, marginLeft: xv }, animation);
                    if (bouncepast) {
                        var fa = animation / 50;
                        var fx = x / 50;
                        var fy = y / 50;
                        x = fx + x;
                        y = fy + y;
                        $(this).animate({ marginTop: y, marginLeft: x}, fa, function() {$(this).animate({ marginTop: xy, marginLeft: xv}), fa});
                    }
                } else {
                    $(this).css({ marginTop: xy, marginLeft: xv }); 
                }
            }
        };
    })(jQuery);

    
    (function ($) {
        //passing a parameter to a function
        $.fn.loadOpenScreen = function (customerNumber) {
            //cookie
            var cond = getCookie("username");
            //$(document).setcookie("username", user, "password", pass);

            if (cond) { $(document).continueLoading(); }
            
        };
    })(jQuery); 

    (function ($) {
        $.fn.newUser = function (speed, callback) {
            var x;
            speed = speed || 250;
            $(".c1").slideToggle(speed);
            $(".c2").slideToggle(speed);
            x = function() { $(".openScreen").centerVH(speed); }
            setTimeout(x, speed);
        };
    })(jQuery);

    // comment this line out after. It's just for testing
    

    (function ($) {
        $.fn.continueLoading = function (speed) {
            speed = speed || 500;
            $(".contentS").fadeOut(speed);
            var x = $("body").width(), y = $("body").height();
            x -= 24;
            y -= 24;    
            if (speed != 500) {
                if (speed = 0) {
                    $(".openScreen").hide();
                    $(document).loadcustomerinfo(0);
                } else {
                    var s10 = speed / 10
                    $(".openScreen").hide(s10);
                }
            }  else {      
                $(".openScreen").addClass("osdarkblue", speed); 
                setTimeout(function() { 
                    var s10 = speed / 10
                    $(".openScreen").hide(s10);
                    $(document).loadcustomerinfo(0);
                }, speed);
            }
        };
    })(jQuery);

    //$(document).continueLoading(0);

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var username = getCookie("username");
        if (username != "") {
            alert("Welcome again " + username);
        } else {
            //change to a submit button and window.
            username = prompt("Please enter your name:", "");
            if (username != "" && username != null) {
                setCookie("username", username, 365);
            }
        }
    }

    //This function is not currently in use: will potentially be used later for loading customer data from a matrix or database; 
    (function ($) {
        //passing a parameter to a function
        $.fn.loadcustomerinfo = function (customerNumber) {
            //console.log("customer number " + customerNumber);
            var i = customerNumber;
            graphLength = customerInfo[i]["graphData"].length;
            firstName = customerInfo[i]["firstName"];
            lastName = customerInfo[i]["lastName"];
            location = customerInfo[i]["location"];
            profileImage = customerInfo[i]["profileImage"];
            age = customerInfo[i]["age"];
            profileData = customerInfo[i]["profileData"];
            tokens = customerInfo[i]["tokens"];
            reputation = customerInfo[i]["reputation"];
            votes = customerInfo[i]["votes"];
            exchanges = customerInfo[i]["exchanges"];
            graphData = customerInfo[i]["graphData"];
            graphLegend = customerInfo[i]["graphLegend"];
            graphColors = customerInfo[i]["graphColors"];
            profileIntro = customerInfo[i]["profileIntro"];
            profileQuote = customerInfo[i]["profileQuote"];
            badges = customerInfo[i]["badges"];
            badge = customerInfo[i].badge;
            ad = customerInfo[i]["ad"];
            friends = customerInfo[i]["friends"];
            console.log(badge + " ad");

            (function ($) {
                $.fn.dselect = function () {
                    var canvas = document.querySelector("canvas#line-chart"),
                        context = canvas.getContext("2d");

                    var margin = {top: 20, right: 20, bottom: 30, left: 50},
                        width = canvas.width - margin.left - margin.right,
                        height = canvas.height - margin.top - margin.bottom;

                    var parseTime = d3.timeParse("%d-%b-%y");

                    var x = d3.scaleTime()
                        .range([0, width]);

                    var y = d3.scaleLinear()
                        .range([height, 0]);

                    var line = d3.line()
                        .x(function(d) { return x(d.date); })
                        .y(function(d) { return y(d.close); })
                        .curve(d3.curveStep)
                        .context(context);

                    context.translate(margin.left, margin.top);

                    d3.requestTsv("data.tsv", function(d) {
                      console.log("parsing data");
                      d.date = parseTime(d.date);
                      d.close = +d.close;
                      return d;
                    }, function(error, data) {
                      if (error) throw error;

                      x.domain(d3.extent(data, function(d) { return d.date; }));
                      y.domain(d3.extent(data, function(d) { return d.close; }));

                      xAxis();
                      yAxis();

                      context.beginPath();
                      line(data);
                      context.lineWidth = 1.5;
                      context.strokeStyle = "steelblue";
                      context.stroke();
                    });

                    function xAxis() {
                      var tickCount = 10,
                          tickSize = 6,
                          ticks = x.ticks(tickCount),
                          tickFormat = x.tickFormat();

                      context.beginPath();
                      ticks.forEach(function(d) {
                        context.moveTo(x(d), height);
                        context.lineTo(x(d), height + tickSize);
                      });
                      context.strokeStyle = "black";
                      context.stroke();

                      context.textAlign = "center";
                      context.textBaseline = "top";
                      ticks.forEach(function(d) {
                        context.fillText(tickFormat(d), x(d), height + tickSize);
                      });
                    }

                    function yAxis() {
                      var tickCount = 10,
                          tickSize = 6,
                          tickPadding = 3,
                          ticks = y.ticks(tickCount),
                          tickFormat = y.tickFormat(tickCount);

                      context.beginPath();
                      ticks.forEach(function(d) {
                        context.moveTo(0, y(d));
                        context.lineTo(-6, y(d));
                      });
                      context.strokeStyle = "black";
                      context.stroke();

                      context.beginPath();
                      context.moveTo(-tickSize, 0);
                      context.lineTo(0.5, 0);
                      context.lineTo(0.5, height);
                      context.lineTo(-tickSize, height);
                      context.strokeStyle = "black";
                      context.stroke();

                      context.textAlign = "right";
                      context.textBaseline = "middle";
                      ticks.forEach(function(d) {
                        context.fillText(tickFormat(d), -tickSize - tickPadding, y(d));
                      });

                      context.save();
                      context.rotate(-Math.PI / 2);
                      context.textAlign = "right";
                      context.textBaseline = "top";
                      context.font = "bold 10px sans-serif";
                      context.fillText("Price (US$)", -10, 10);
                      context.restore();
                    }
                };
            })(jQuery); 

            (function ($) {
                $.fn.loadgraph = function () { // this function creates the html elements for the graph. The values are currently set in arrays within this program file, but will be moved to external JSON files
                    //moved variables to global variables
                    ////console.log("graphData " + graphData + "\ngraphLegend " + graphLegend + "\ngraphColors " + graphColors);
                    text = "<h1>My CBFS</h1>";
                    text += "<ul>";
                    for (var n = 0; n < graphLength; n++) {
                        text += "<li>" + graphLegend[n] + " <span>" + graphData[n] + "%</span><input type=\"text\" placeholder=\"" + graphData[n] + "\"></li>";
                    }
                    text += "</ul><button id=\"update\" type=\"button\">Update</button>";
                    ////console.log("chart info" + text); //removed since debugging is complete
                    $(".chart-info").html(text);

                    //move these to functions
                    $(".chart-info ul li").click(function() {
                        //when one list item is clicked, all are shown as editable
                        //console.log("clicked");
                        $(".chart-info ul li").find("input").show();
                        $(".chart-info ul li").find("span").hide();
                        $("#update").show();
                    });
                    $("#update").click(function() {
                        $(document).updateGraph();
                        ////console.log("updategraph ran");
                    });

                    return text;
                };
            })(jQuery);
            //
            console.log("loading the main program");
            //
            $(document).Program();
            
            $(document).loadgraph();
            ////console.log("should generate feed now");
            //$(document).generateFeed();
            $(document).dselect();
            //$(document).needs(); //replaced with angular code in index.html
            $(document).makeChart(); 
            console.log("I made the chart");
            //$("#right").jScrollPane();
            
        };
    })(jQuery)
    
    //runs the main "Program" function on initial page load 
    //might have to split function into multiple steps (like initialization, resizing, etc, to fix new bug)
    $(document).ready(function () {
        //create a new function to load the login screen, before the customer info
        //detect cookies in a function here.
        $(".openScreen").centerVH();

        $(this).loadOpenScreen();
        //$(this).loadcustomerinfo(0); //temp commented out //loadcustomerinfo should only be used for LOADING the data. All display elements should be moved to the Program function.
    });

    (function ($) {
        $.fn.Program = function () {   


        //$("*").draggable(); //don't uncomment this line unless you want some serious FUN

        $("#contextmenu").draggable({ cancel: ".innercontent" });
        //initializing LOCAL variables //variables that are native to the Progam function
        var clickedlr = "null", mobile; //initialize the variable for deciphering which button was clicked;
        
        $(document).mousemove( function(e) {
           mouseX = e.pageX; //getting mouse X position
           mouseY = e.pageY; //getting mouse Y position
        }); 

        (function ($) {
            $.fn.mainMenu = function (content, override) { //this function was completely rewritten to fix all of the issues //now, the menu will open in the correct place 100% of the time.
                var m = menu; //most of the variables created in this function are created to avoid overriting global variables
                override = override || false; //sets the override variable to false if it's not already set
                if (override) { m.hide( "scale", { percent: 50 }, 200); } //close the currently open menu
                if (!m.is(':visible') || (override)) { //if the menu is not visible, run the rest of the function. This avoids having it popup accidentally
                    if (content) { m.html(content); } // if there is a content parameter passed into the function, change the html of the menu to match that content
                    var h = m.height(), w = m.width(), d = docheight, dw = docwidth, y = mouseY - 50, x = mouseX - 50, ry = d - h - 100, cy = d - y, h0 = h + 100, w0 = w + 100, cx = dw - x, rx = dw - w - 100; //declaring variables
                    if (cy < h0) { y = ry; } if (cx < w0) { x = rx; } if (y < 50) { y = 50; } if (x < 50) { x = 50; } //if the x or y values make the menu appear close to the edge of the page, adjust the x or y values
                    m.css({ top: y, left: x }); //set position of the menu to the calculated values
                    m.show( "scale", { percent: 50 }, 200); //animate the opening of the menu
                    m.xbutton(true); //calls the next function, which allows the window to be closed //this part was redesigned to make the program run faster
                    //console.log(x, y);
                    return content;
                }   
            };
        })(jQuery);

        $("#profilemenu").click(function() {
            $(document).mainMenu(endresult);
        });

        $(".profilepic").click(function() {
            $(document).mainMenu(endresult);
        });
        
        (function ($) {
            $.fn.badgePopUp = function () {
                var b = $("#badgemenu");
                !b.is(':visible') ? ( b.css({ top: mouseY, left: mouseX }), b.show( "scale", { percent: 50 }, 200), b.draggable({ cancel: ".innercontent" }), b.xbutton(true)) : false;
            };
        })(jQuery);

        $(".badges").click(function() {
            $(document).badgePopUp();
        });
        
        //remember to annotate this section
        (function ($) {
            $.fn.badgeHighlight = function (number) {
                if (badgeData[number]) {
                    var endResult = "", b = badgeData[number], ba = b["badgeTitle"];
                    console.log(number);
                    endResult += "<img src=\"" + imagepath + number + ".png" + "\">";
                    endResult += "<h1>" + ba + "</h1>";
                    endResult += "<h3 class=\"info\">" + b["badgeInfo"] + "</h3>";
                    
                    var badgeLength = b["badgeDetails"].length;

                    for (var i = 0; i < badgeLength; i++) { 
                        endResult += "<h3 class=\"details\">" + b["badgeDetails"][i] + "</h3>";
                    };      

                    $(".badgehighlight").html(endResult);
                    return endResult;
                }
            };
        })(jQuery);

        (function ($) {
            $.fn.badgeClick = function (number) {
                $(document).badgeHighlight(number);
                return true;
            };
        })(jQuery);

        $(".badge").hover(function(){ // when a badge is hovered over, find out which one
            var i, c = $(this).attr("class"), d;
            c = c.replace("roundhighlight", ""), c = c.replace("badge", ""), d = c.replace("b", ""), d = d.replace(" ", ""), c = c.replace(" ", ""), i = Number(d), $("." + c).toggleClass("roundhighlight"), $(document).badgeClick(i);
        });

        var currenthtml = $("#right").html();
        var adminhtml = "<h1>Administration</h1><h3>(options)...</h3><p>This page is the home for a particular community's temporarily assigned admin team, who make decisions amongst themselves for the community which are vieweed as relatively uncontroversial, or that no one seems to care enough to vote on. Such decisions can be raised to the public level of decision-making if enough people decide it should be put to the public vote. Members are chosen from applicants by random lot.</p>";
        var edithtml = "<h1>Edit Profile</h1><h3>(options)...</h3>"; 

        //unsure if this should be moved to the global section
        //this should be moved to the global section... but it's a delicate operation
        //creating the heading value for the default context menu
        var profileMenuHeading = "Edit Profile";
        //creating the menu item for the default menu items
        var profileMenuItems = {
          "editProfile": "Edit Profile",
          "viewProfile": "View Profile",
          "addFriend": "Add Friend",
          "viewBadges": "View Your Badges"
        };

        var endresult = menuIntro + "<h2>" + profileMenuHeading + "</h2><ul>";
        var thisLine;
        var debugText = "";

        //add hash change on context menu selection...
        //when you press a button, it should navigate AND change the hash
        $.each( profileMenuItems, function( key, value ) {
            thisLine = '<li class=\"' + key + '\">' + value + '</li>'
            endresult += thisLine;
        });

        //Comment out the following line to turn off the debug option
        debugText = "<p>If you encounter a bug with this program, please email <a href=\"mailto:ethanpatrickshaffer@gmail.com?subject=Error with Ledda site\">Ethan</a>";

        endresult += "</ul>" + debugText +  "</div>"; 
        ////console.log(endresult);
        contextmenuhtml = endresult;

        $("#contextmenu").html(contextmenuhtml); 

        var padding, margin, docwidth, docheight, canvaswidth, canvasheight, buttonwidth,
            a, b, goldenratio, halfbuttonwidth, buttonPosRight, buttonPos33, buttonPosLeft, buttonwidth;

        (function ($) {
            $.fn.sizes = function () {
                //PADDING
                padding = 12, 
                margin = 12, 
                docwidth = $("body").width(), 
                docheight = $("body").height(), 
                canvaswidth = docwidth - ((2 * padding) + (2 * margin)), 
                canvasheight = docheight - ((2 * padding) + (2 * margin)),
                goldenratio = 1.61803399, 
                a = canvaswidth / goldenratio, 
                b = canvaswidth - a - 1, 
                buttonwidth = $("#button").width(),
                halfbuttonwidth = (buttonwidth / 2), 
                buttonPosRight = (canvaswidth + margin + padding - halfbuttonwidth), 
                buttonPos33 = b + margin + padding - halfbuttonwidth, 
                buttonPosLeft = margin + padding + 10; //initial location of button is buttonPos33;

                console.log("padding " + padding + ": margin " + margin + 
                    ": docwidth " + docwidth + ": docheight " + docheight + ": canvaswidth " + canvaswidth +
                    ": canvasheight " + canvasheight + ": goldenratio" + goldenratio + ": a " + a + ": b " +
                    b + ": halfbuttonwidth " + halfbuttonwidth + ": buttonPosRight " + buttonPosRight + ": buttonPos33 " +
                    buttonPos33 + ": buttonPosLeft " + buttonPosLeft );
                $(".canvas").width(canvaswidth);
                $(".canvas").height(canvasheight);
                 //buttonwidth = the width of the button;

                //a = the width of the canvas divided by the golden ratio

                //initialize ? mobile
                //if document is wider than 800px...
                console.log(canvaswidth + " canvaswidth");

            };
        })(jQuery);
        $(document).sizes();
        console.log(buttonwidth);
        console.log("padding " + padding + ": margin " + margin + 
                    ": docwidth " + docwidth + ": docheight " + docheight + ": canvaswidth " + canvaswidth +
                    ": canvasheight " + canvasheight + ": goldenratio" + goldenratio + ": a " + a + ": b " +
                    b + ": halfbuttonwidth " + halfbuttonwidth + ": buttonPosRight " + buttonPosRight + ": buttonPos33 " +
                    buttonPos33 + ": buttonPosLeft " + buttonPosLeft );

        // if (canvaswidth > 800) {
        //     //console.log("initializing for desktop");

        //     //#content (div on the right side in the initial state) becomes the width of a, in pixels;
        //     $("#content").width(a + "px");
        //     $("#content").show();
        //     //#profile (div on the left side in the intial state) becomes the width of b, in pixels;
        //     $("#profile").width(b + "px");
        //     $("#profile").show();
        //     $("#buttonleft").show();
        //     $("#buttonright").show();
        //     $("#bleftarrow").removeClass("darkblue");
        //     $("#brightarrow").show();
        //     $("#bleftarrow").show();
        //     $("#buttonleft").removeClass("white");
        //     $("#button").removeClass("leftshadow");
        //     $("#button").addClass("rightshadow");

        //     //puts #button in the correct (middle) position;
        //     $("#button").css({ left: buttonPos33 });

        //     //declares that mobile is false. This is used for initializing the view and controlling the interactions;
        //     mobile = false;

        //     //sets window hash to "#home" - the default view for desktop;
        //     window.location.hash = 'home';
        // }
        // else {
        //     //console.log("initializing for mobile");
            
        //     //#profile becomes full width;
        //     $("#profile").width("100%");
        //     //#content becomes 0% width and hidden;
        //     $("#content").width("0%");
        //     $("#content").hide();

        //     //put #button in the correct (right) location;
        //     $("#button").css({ left: buttonPosRight });

        //     //declares that mobile is true. This is used for initializing the view and controlling the interactions
        //     mobile = true;

        //     //sets window hash to "#profile" - the default view for mobile;
        //     //NOTE - remember to create a function to select proper content based on initializion / hash
        //     window.location.hash = 'profile';
            
        //     //initializing button on the right side
        //     $("#button").removeClass("middle");
        //     $("#button").addClass("right");
        //     $("#buttonright").hide();
        //     $("#brightarrow").hide();
        //     $("#button").removeClass("rightshadow");
        //     $("#buttonright").hide();
        //     $("#profilepic").addClass("autowidth"); 
        //     $("#button").addClass("leftshadow"); 
        //     $("#buttonleft").addClass("white"); 
        //     $("#bleftarrow").addClass("darkblue"); 
        //     $("#bleftarrow").addClass("bounceleft");
        // }
        
        var chartheight = $(".chart-box").width();
        $("#myChart").height(chartheight);
        //functions

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
         

        (function ($) {
            $.fn.canvasFull = function (t500) {
                t500 = t500 | 500;
                $(this).show();
                var thiswidth = canvaswidth - 35;   
                $(this).animate({ width: thiswidth + "px" }, t500);
                $(this).addClass("expanded");
                return true;
            };
        })(jQuery);

        (function ($) {
            $.fn.canvasLeft = function (t500) {
                t500 = t500 | 500;
                $(this).show();
                $(this).animate({ width: b + "px" }, t500);
                $(this).removeClass("expanded");
                $(this).css({left:"24px"});
                return true;
            };
        })(jQuery);

        $(".ad ul").click(function(){
            var populate = $(this).html();
            $(document).adPopUp(populate);
            return populate;
        });

        (function ($) {
            $.fn.adPopUp = function (x) {
                //console.log(x);
                var i, a = x.split("\n"), b, endResult, result = "";
                //console.log(a[0]);
                for (i = 2; i < a.length - 2; i++)  {
                    b = a[i].replace("<li>", "");
                    b = b.replace("</li>", "");
                    b = b.replace(/\s+/g, ''); //replaces whitespace
                    result += "<input type=\"text\" placeholder=\"" + b + "\">"; //A is the string after switching out characters
                }
                endResult = menuIntro + a[1] + result + "</div>";
                $(document).mainMenu(endResult);
                return endResult;
            };
        })(jQuery);

        (function ($) {
            $.fn.needs = function (needs) {
                var text = "";
                var a = ad, aL = a.length;
                for (var i=0; i<aL; i++) {
                    var ai = a[i], z = ai[0], zTL = z.toLowerCase();
                    text += "<ul class=\"" + zTL + "\">\n<h1>" + z + "</h1>\n";
                    for (var n=1; n<ai.length; n++) {
                        text += "<li>" + ai[n] + "</li>\n";
                    } 
                    text += "</ul>";
                }
                $(".ad").html(text); 
                return text;
            };
        })(jQuery);

        (function ($) { 
            $.fn.canvasRight = function (t500) { 
                t500 = t500 || 500;
                $(this).show(); $(this).animate({ 
                    width: a + "px" }, t500); 
                    $(this).removeClass("expanded"); 
                    return true; 
                }; 
        })(jQuery);

        (function ($) { $.fn.canvasNone = function (t500) {
                t500 = t500 || 500;
                $(this).animate({ width: '0%', right: "0", display: "none" }, t500, function () { $(this).hide(); $(this).removeClass("expanded"); });
                return true;
            };
        })(jQuery);

        (function ($) {
            $.fn.profilesmall = function (speed) {
                speed = speed || 200;
                //if the menu is visible, process the click; otherwise do notheing 
                if (speed == 0) {
                    $(this).css({
                        borderRadius:"50%",
                        width: "70px",
                        height: "70px",
                        border: "4px solid darkblue",
                        top: "20px",
                        left: "20px"
                     });
                     $(this).toggleClass("profilepic"); 
                     $(this).toggleClass("profilesmall");

                    return true;
                } else { 
                    $(this).animate({
                        borderRadius:"50%",
                        width: "70px",
                        height: "70px",
                        border: "4px solid darkblue",
                        top: "20px",
                        left: "20px"
                    }, speed, function(){ $(this).toggleClass("profilepic"); $(this).toggleClass("profilesmall"); } )
                    return true;
                }
            };
        })(jQuery);

        (function ($) {
            $.fn.profilepic = function (speed) {
                //if the menu is visible, process the click; otherwise do notheing 
                speed = speed || 200;
                if (speed == 0) {
                    $(this).css({
                        borderRadius:"12px",
                        top: "30px",
                        left: "30px",
                        width: "125px",
                        height: "125px"
                     });
                     $(this).toggleClass("profilepic"); 
                     $(this).toggleClass("profilesmall");

                    return true;
                } else {
                    $(this).animate({
                        borderRadius:"12px",
                        top: "30px",
                        left: "30px",
                        width: "125px",
                        height: "125px"
                     }, speed, function(){ $(this).toggleClass("profilepic"); $(this).toggleClass("profilesmall"); })
                    return true;
                }
                
            };
        })(jQuery);

        // function assert(condition, message) {
        //     if (!condition) {
        //         message = message || "Assertion failed";
        //         if (typeof Error !== "undefined") {
        //             throw new Error(message);
        //         }
        //         throw message; // Fallback
        //     }
        // }   

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
                    $("#content").width(a + "px");
                    $("#profile").width(b + "px");
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

        //bar graph animation 
        (function ($) {
            $.fn.reanimate = function () {
                $(".prebars").each(function () {
                    $(this).baranimate(1000);
                });
            };
        })(jQuery);

        (function ($) {
            $.fn.xbutton = function (override) { //
                $(document).menuOpen(true);
                $(".xbutton h3").click(function () { //
                    if (override) { //
                        var x = $(this).parent(); //
                        x.parent().hide( "scale", { percent: 50 }, 200); //
                        //console.log("Window Closed!"); //
                    }
                });

                $(".xbutton").off().hover(function() { //
                    if (!($("#contextmenu").hasClass("ui-draggable-dragging")) || ($("#badgemenu").hasClass("ui-draggable-dragging"))) {
                        $(this).toggleClass("xactive", 100); //
                        $(this).parent().toggleClass("xxx", 100); //
                    }
                }); 
            };
        })(jQuery);

        $(".canvas").fadeIn("slow", function () { $(document).reanimate(); });
        
        //button click //off makes it so the button can only be clicked once at a time
        $('#buttonleft').off().click(function () { clickedlr = "left", $(this).buttonPosition(clickedlr), clickedlr = "null"; });

        $('#buttonright').off().click(function(){ clickedlr="right",$(this).buttonPosition(clickedlr), clickedlr="null"; });

        
        (function ($) {
            $.fn.resizecontent = function (t, b) {
                t = t || 100;
                b = b || false;
                $("*").toggleClass("overflow");
                var x = $(".openScreen");
                console.log(x);
                if (x.is(':visible')) {
                    $(".openScreen").centerVH(t, b);
                }                
            };
        })(jQuery);

        //flag
        //functions for menus
        //context menu
        //function for when the editProfile button is clicked
        $(".editProfile").click(function() {
            $(".right").html("<h1>Edit Profile</h1>");
            $("#contextmenu").hide( "scale", { percent: 50 }, 200);
            window.location.hash = "edit";
        });

        $(".viewBadges").click(function() {
            $(document).badgePopUp();
        });

        (function($){$.fn.awl=function(w,l){if(w){$(this).animate({width:w});}if(l){$(this).animate({left:l});}};})(jQuery); //this function is just

        //$(document).resizecontent();


        //charts
        //global chart values 
        //Chart.defaults.global.defaultFontSize = 24;
        //Chart.defaults.global.defaultFontFamily = "'Open Sans', sans-serif";

        function over100 (graphData) {
            graphData = graphData || graphData;
            ////console.log(graphData);
            var sum = graphData.reduce((a, b) => a + b, 0);
            sum != 100 ? alert("You can't have values that don't add up to 100!!") : true;
            ////console.log(sum);
        }

        var ctx = document.getElementById("myChart");
        //graphData, graphLegend, graphColors
        //canvas js or chart js
        (function ($) {
            $.fn.makeChart = function () {
                Chart.defaults.global.legend.display = false;
                console.log(graphLegend);
                console.log(graphData);

                var myChart = new Chart(ctx, {
                    type: 'doughnut',
                        data: { 
                        //variable
                        graphLegend,
                        datasets: [
                            {
                                graphData,
                                backgroundColor: [
                                    "#336699",
                                    "#36A2EB",
                                    "#FFCE56"
                                ],
                                hoverBackgroundColor: [
                                    "#336699",
                                    "#36A2EB",
                                    "#FFCE56"
                                ]
                            }]
                    },
                    options: {
                        animation: {
                            animateScale:false
                        },
                        responsive: true,
                        maintainAspectRatio: false
                }
                });
            };
        })(jQuery);

        //this section needs work
        (function ($) {
            $.fn.updateGraph = function () { 
                var tempHtml, x, colors = graphColors, initialgraph = [], tempgraph = [], tempLi, n = 0; // initializing variables
                
                //when update button is clicked, all are put back, and it reanimates
                $(".chart-info ul li").each(function() { // 
                    tempLi = graphData[n], tempHtml = $(this).find("input").val(); // 
                    initialgraph.push(tempHtml);
                    if (tempHtml) { // 
                        $(this).find("span").html(tempHtml + "%"); // 
                        tempgraph.push(parseFloat(tempHtml)); // 
                    } 
                    else { tempgraph.push(parseFloat(tempLi)); }
                    n++;
                });
                x = over100(tempgraph);
                ////console.log(x);
                if (x) {
                    graphData = tempgraph;
                    $(".chart-info ul li").find("input").hide(), $(".chart-info ul li").find("span").show();
                    $(document).makeChart();
                    $("#update").hide();
                }
            };
        })(jQuery);

        $(document).buttonPosition(1, 4, 0);  
        

        //end of main program
    };
})(jQuery);

        //function added to remove context menu on click away from context menu div
        (function ($) { $.fn.menuOpen = function (val) { val = val || false; if (val) { $(document).mouseup(function (e) { var container = $("#contextmenu"); if (!container.is(e.target) && container.has(e.target).length === 0) { $( "#contextmenu" ).hide( "scale", { percent: 50 }, 200 ), val = false; } }); }}; })(jQuery);
});