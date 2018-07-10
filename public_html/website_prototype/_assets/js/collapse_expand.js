$(document).ready(function () {
    /* NOTES
    //main JavScript for the LEDDA project
    //Version 3.5.1
    //
    //
    // Fixed in Version 3.12 //fixed margin / padding. Now completely controlled by CSS. //fixed flash on mobile > desktop, //fixed flash on desktop > mobile //fixed button movement - no longer repeats //fixed left alignment of window and button //decided to zip backup copies
    // Fixed in Version 3.3 //added mouse position - useful for context menus //added basic menu and menu animations //added static context menu --- needs to be able to be generated dynamicall //added profile menu //fixed animations for profile menu //force animation on tab //fixed padding for profile and content layers
    // Fixed in Version 3.4 //fixed global variables //added badges //fixed menu dragging //added needs/wants section // 
    //
    // VERSION <4 plans
    // add multiple layers for #content contents
    // add "states" to transition directly to certain layers on load
    // need to make functions only run when necessary - this will speed up the whole program
    //
    //
    // BUGS 
    // - small issue with buttons not reacting appropriately for the few milliseconds that the program function is still loading
    //  examples: context menus loading in the wrong place (can be fixed by moving javascript to backend)
    // - functions within code (i.e. "viewBadges") is not working currently.
    // - baranimate is not working correctly, since it is being re-formatted
    // - context menus have issues with flashing
    // - flash when images load
    //  FIXED - Xbutton is not working on #contextmenu 
    // 
    //
    //
    profile
    //needs / want section
    //auto - populate common items, or able to type items you want / need, etc.
    // highlight ones that other peope have
    //
    //Graphs! (already added graphs in 3.3 - adding more graphs for 4.)
    //Feed (layout is complete - design and loading needed)
    //Profile Page (started in version 3 - want to complete it in version 4)
    //Menus (moved to version 3 - completed, except for loading dynamically - will be handled by version 3.5)
    //Animations (main animations created)
    //Loading exact states / animations
    //add table of contents
    //ability to turn off animations (add to later version)
    //
    //

    Version 5 plans 
    //make back and forward buttons work within app
    //
    //.htaccess
    //calendar
    //

    */

    //loads customer info before program loads

    var customerInfo = [
        {
            firstName: 'Ethan',
            lastName: 'Shaffer',
            location: "Portland, Oregon",
            profileImage: 'bearman.jpg',
            age: 27,
            profileData: '',
            bars: [["Tokens", 598.65, 1000, 5], ["Reputation", 73.6, 100, 7], ["Votes Cast", 21, 100, 2], ["Exchanges", 427, 500, 11]],
            graphData: [33, 26.5, 17, 10.5, 6.7, 6.3],
            graphLegend: ["Education", "Environment", "Public Welfare", "Health Services", "Business Loans", "LEDDA Admin"],
            graphColors: ["#FF6384", "#336699", "#abcdef", "#456456", "#123123", "#123456"],
            profileIntro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            profileQuote: "I sure would like some ice cream right about now",
            badge: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            needs: ["lorem Ipsum", "lorem ipsum"],
            wants: ["lorem noralkj", "normalized text"],
            has: ["something else", "something"],
            will: ["what?", "something or another"]
        },

        {
            firstName: 'Ethan',
            lastName: 'Shaffer',
            location: "Portland, Oregon",
            profileImage: 'bearman.jpg',
            age: 27,
            profileData: '',
            bars: [["Tokens", 598.65, 1000, 5], ["Reputation", 73.6, 100, 7], ["Votes Cast", 21, 100, 2], ["Exchanges", 427, 500, 11]],
            graphData: [33, 26.5, 17, 10.5, 6.7, 6.3],
            graphLegend: ["Education", "Environment", "Public Welfare", "Health Services", "Business Loans", "LEDDA Admin"],
            graphColors: ["#FF6384", "#336699", "#abcdef", "#456456", "#123123", "#123456"],
            profileIntro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            profileQuote: "I sure would like some ice cream right about now",
            badge: [2, 7],
            needs: ["lorem Ipsum", "lorem ipsum"],
            wants: ["what?", "something or another"],
            has: ["something else", "something"],
            will: ["lorem noralkj", "normalized text"]
        }
    ];

    var imagepath = "_assets/images/";
    var menuIntro = "<div class=\"xbutton\"><h3>X</h3></div><div class=\"innercontent\">";
    var graphLength, n, text, bars, badge, needs, wants, has, will, firstName, lastName, location, profileImage, age, profileData, tokens, tokensPCT, tockensLVL, reputation, reputationPCT, reputationLVL, votes, votesPCT, votesLVL, exchanges, exchangesPCT, exchangesLVL, graphData, graphLegend, graphColors, profileIntro, profileQuote, mouseX, mouseY;
    var menu = $("#contextmenu");
    var badgeData = [
        {
            bgImgName: '0.png',
            badgeTitle: 'Lv 1 - Token Badge',
            badgeInfo: 'Receive your first Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },

        {
            bgImgName: '1.png',
            badgeTitle: 'Lv 2 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName: '2.png',
            badgeTitle: 'Lv 3 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName: '3.png',
            badgeTitle: 'Lv 4 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName: '4.png',
            badgeTitle: 'Lv 5 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName: '5.png',
            badgeTitle: 'Lv 6 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName: '6.png',
            badgeTitle: 'Lv 7 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName: '7.png',
            badgeTitle: 'Lv 8 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName: '8.png',
            badgeTitle: 'Lv 9 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName: '9.png',
            badgeTitle: 'Lv 10 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        },
        {
            bgImgName: '10.png',
            badgeTitle: 'Lv 11 - Token Badge',
            badgeInfo: 'Receive your second Token wage',
            badgeDetails: ['Reputation: +2', 'Tokens gained: 500/mo']
        }
    ];

    //This function is not currently in use: will potentially be used later for loading customer data from a matrix or database; 
    function loadcustomerinfo(customerNumber) {
        console.log("customer number " + customerNumber);
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
        badge = customerInfo[i]["badge"];
        needs = customerInfo[i]["needs"];
        wants = customerInfo[i]["wants"];
        has = customerInfo[i]["has"];
        will = customerInfo[i]["will"];
        bars = customerInfo[i]["bars"];

        function loadgraph() { // this function creates the html elements for the graph. The values are currently set in arrays within this program file, but will be moved to external JSON files
            //moved variables to global variables
            console.log("graphData " + graphData + "\ngraphLegend " + graphLegend + "\ngraphColors " + graphColors);
            text = "<h1>My CBFS</h1>";
            text += "<ul>";
            for (var n = 0; n < graphLength; n++) {
                text += "<li>" + graphLegend[n] + " <span>" + graphData[n] + "%</span><input type=\"text\" placeholder=\"" + graphData[n] + "\"></li>";
            }
            text += "</ul><button id=\"update\" type=\"button\">Update</button>";
            //console.log("chart info" + text); //removed since debugging is complete
            $(".chart-info").html(text);
        };

        loadgraph();
        Program();
    };

    //runs the main "Program" function on initial page load 
    //might have to split function into multiple steps (like initialization, resizing, etc, to fix new bug)
    loadcustomerinfo(0);


    //reruns the main "Program" function when the page is resized
    //removing to focus on desktop. will re-add at a later version

    // $(window).resize(function () {
    //     console.log("resize triggered");
    //     Program();
    //     // #flashes used for testing - will hopefully be able to be removed, as it causes an unsightly page refresh    
    //     //location.reload();
    // });

    //moved all functions into main "Program" function
    function Program() {
        //$("*").draggable(); //don't uncomment this line unless you want some serious FUN

        $("#contextmenu").draggable({ cancel: ".innercontent" });
        //initializing LOCAL variables //variables that are native to the Progam function
        var clickedlr = "null", mobile; //initialize the variable for deciphering which button was clicked;

        $(document).mousemove(function (e) {
            mouseX = e.pageX; //getting mouse X position
            mouseY = e.pageY; //getting mouse Y position
        });

        reanimate();

        function mainMenu(content) {
            if (!menu.is(':visible')) {
                if (content) { menu.html(content); }
                menu.css({
                    top: mouseY,
                    left: mouseX
                });
                menu.show("scale", { percent: 50 }, 200);
            }

            xbutton();
        };

        $("#profilemenu").click(function () {
            mainMenu(endresult);
        });

        $(".profilepic").click(function () {
            mainMenu(endresult);
        });

        function badgePopUp() {
            //only runs if it SHOULD show the menu
            if (!$("#badgemenu").is(':visible')) {
                $("#badgemenu").css({
                    top: mouseY,
                    left: mouseX
                });
                $("#badgemenu").show("scale", { percent: 50 }, 200);
                $("#badgemenu").draggable({ cancel: ".innercontent" });
                console.log("opened the Badge Menu!");
                xbutton();
            }
        };

        $(".badges").click(function () {
            badgePopUp();
        });

        //remember to annotate this section
        function badgeHighlight(number) {
            var endResult = "";
            var i = 0;
            var b = badgeData[number];
            endResult += "<img src=\"" + imagepath + number + ".png" + "\">";
            endResult += "<h1>" + b["badgeTitle"] + "</h1>";
            endResult += "<h3 class=\"info\">" + b["badgeInfo"] + "</h3>";

            var badgeLength = b["badgeDetails"].length;

            for (i = 0; i < badgeLength; i++) {
                endResult += "<h3 class=\"details\">" + b["badgeDetails"][i] + "</h3";
            };

            $(".badgehighlight").html(endResult);
        };


        function badgeClick(number) {
            //if the menu is visible, process the click; otherwise do notheing 
            if ($("#badgemenu").is(':visible')) {
                badgeHighlight(number);
            }
        };

        $(".badge").click(function () { // when a badge is clicked, find out which one
            //this should be changed to a switch statement, rather than a series of if statements
            var i;
            if (this.hasClass("b0")) { i = 0; }
            if (this.hasClass("b1")) { i = 1; }
            if (this.hasClass("b2")) { i = 2; }
            if (this.hasClass("b3")) { i = 3; }
            if (this.hasClass("b4")) { i = 4; }
            if (this.hasClass("b5")) { i = 5; }
            if (this.hasClass("b6")) { i = 6; }
            if (this.hasClass("b7")) { i = 7; }
            if (this.hasClass("b8")) { i = 8; }
            if (this.hasClass("b9")) { i = 9; }
            if (this.hasClass("b10")) { i = 10; }
            console.log("badge " + i + " clicked");
            badgeClick(i);
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
        $.each(profileMenuItems, function (key, value) {
            thisLine = '<li class=\"' + key + '\">' + value + '</li>'
            endresult += thisLine;
        });

        //Comment out the following line to turn off the debug option
        debugText = "<p>If you encounter a bug with this program, please email <a href=\"mailto:ethanpatrickshaffer@gmail.com?subject=Error with Ledda site\">Ethan</a>";

        endresult += "</ul>" + debugText + "</div>";
        console.log(endresult);
        contextmenuhtml = endresult;

        $("#contextmenu").html(contextmenuhtml);


        //PADDING
        var paddingstring = $(".canvas").css("padding"); //paddingstring = a string value of the padding of the canvas, including "px" - default is 12;
        paddingstring = paddingstring.replace("px", ""); //paddingstring = paddingstring without px;
        var padding = parseInt(paddingstring); //padding = the integer of the padding value - default is 12;

        //MARGIN
        var marginstring = $(".canvas").css("margin"); //marginstring = a string value of the margin of the canvas, including "px" - default is 12;
        marginstring = marginstring.replace("px", ""); //marginstring = marginstring without px;
        var margin = parseInt(marginstring); //margin = the integer of the padding value - default is 12; 


        //WIDTHS
        var docwidth = $("body").width(), docheight = $("body").height();
        var canvaswidth, canvasheight;

        canvaswidth = docwidth - ((2 * padding) + (2 * margin)); //canvaswidth = the width of the canvas, without margins or padding;
        canvasheight = docheight - ((2 * padding) + (2 * margin));

        $(".canvas").width(canvaswidth);
        $(".canvas").height(canvasheight);
        var buttonwidth = $("#button").width(); //buttonwidth = the width of the button;

        //a = the width of the canvas divided by the golden ratio
        var goldenratio = 1.61803399;
        var a = canvaswidth / goldenratio;
        //b = the width of the canvas minus a (-minus 1, to account for rounding issues);
        var b = canvaswidth - a - 1;


        //button
        var halfbuttonwidth = buttonwidth / 2; //halfbutton width = buttonwidth divided by 2 (useful in showing half of the button at a time);
        var buttonPosRight = (canvaswidth + margin + padding - halfbuttonwidth); //buttonPosRight = the distance of the button from the left of the screen when the left side is fully extended; //buttonPosRight = canvaswidth + margin + padding - halfbuttonwidth;
        var buttonPos33 = b + margin + padding - halfbuttonwidth; //buttonPos33 = the default position of the button (from the left side of the screen); //buttonPos33 = b + margin + padding - halfbuttonwidth;
        var buttonPosLeft = margin + padding + 10; //initial location of button is buttonPos33;

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

        var chartheight = $(".chart-box").width();
        $("#chart001").height(chartheight);
        //functions

        function baranimate(speed) {
            var numerator, denominator, initialwidth = "0px", width, level, title, barHtml = "";
            for (var i = 0; i < bars.length; i++) { //bars is a global variable, bar is not
                var bar = this.find(".bar"), number = this.find(".number");
                title = bars[i][0], numerator = bars[i][1], denominator = bars[i][2], level = bars[i][3]; // initializing local variables from global variables ... hopefully
                barHtml += "<div class=\"prebars\"><div class=\"numbers\">" + title + ": <span class=\"number\">" + numerator + "</span><span class=\"over\">" + denominator + "</span></div><div class=\"bars\"><div class=\"bar\"></div></div><div class=\"level\">" + level + "</div></div>"; // adding html 
                width = (numerator / denominator) * 100, speed = speed || 1000; //sets default animation to 1000ms, unless parameter is passed to function

                //adds background color based on value of width
                if (width > 70) {
                    bar.addClass("green");
                    number.css("color", "green");
                }
                else if (width > 30) {
                    bar.addClass("yellow");
                    number.css("color", "yellow");
                }
                else {
                    bar.addClass("red");
                    number.css("color", "red");
                }

                bar.width(initialwidth);
                bar.animate({ width: width + "%" }, speed); //animates width of bar based on width
            }
            //
        };


        function canvasFull() {
            this.show();
            var thiswidth = canvaswidth - 35;
            this.animate({ width: thiswidth + "px" });
            this.addClass("expanded");

        };

        function canvasLeft() {
            this.show();
            this.animate({ width: b + "px" });
            this.removeClass("expanded");
        };


        $(".ad ul").click(function () {
            var populate = this.html();
            adPopUp(populate);
        });

        function adPopUp(x) {
            console.log(x);
            var i, a = x.split("\n"), b, endResult, result = "";
            console.log(a[0]);
            for (i = 2; i < a.length - 2; i++) {
                b = a[i].replace("<li>", "");
                b = b.replace("</li>", "");
                b = b.replace(/\s+/g, ''); //replaces whitespace
                result += "<input type=\"text\" placeholder=\"" + b + "\">"; //A is the string after switching out characters
            }
            endResult = menuIntro + a[1] + result + "</div>";
            mainMenu(endResult);
        };

        function canvasRight() {
            this.show();
            this.animate({ width: a + "px" });
            this.removeClass("expanded");
        };


        function canvasNone() {
            this.animate({ width: '0%', right: "0", display: "none" }, function () { this.hide(); this.removeClass("expanded"); });
        };

        function buttonPosition(clicklr) {
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
                    $("#button").animate({ left: buttonPos33 }, function () { resizecontent(); $("#brightarrow").addClass("bounceright"); $("#bleftarrow").show(); $("#bleftarrow").addClass("bounceleft"); $("#buttonleft").show(); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); });
                    window.location.hash = 'home';
                    clickedlr = "null";
                    leftclass = false;
                    middleclass = false;
                    rightclass = false;

                    $("#profilemenu").hide();
                    $("#right").html(currenthtml);
                    reanimate();

                }

                    //middle button, left click
                    //button moves to left
                else if ((middleclass === true) && (clickedlr === "left")) {
                    console.log("middle left clicked");
                    //$("#right").html(adminhtml);

                    $("#button").removeClass("middle");
                    $("#button").addClass("left");
                    $("#content").canvasFull();
                    $("#profile").canvasNone();
                    $("#bleftarrow").hide();
                    $("#brightarrow").removeClass("bounceright");
                    $("#button").animate({ left: buttonPosLeft }, function () { resizecontent(); $("#profilemenu").show(); $("#brightarrow").addClass("bounceright"); $("#buttonleft").hide(); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); });
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
                    reanimate();

                    $("#button").animate({ left: buttonPos33 }, function () { $("#brightarrow").show(); $("#buttonright").show(); $("buttonright").show(); $("#buttonright").show(); $("#button").addClass("rightshadow"); $("#button").removeClass("leftshadow"); $("#bleftarrow").addClass("bounceleft"); $("#brightarrow").addClass("bounceright"); });
                    window.location.hash = 'home';
                    clickedlr = "null";
                    leftclass = false;
                    middleclass = false;
                    rightclass = false;
                }
            }
            //mobile code moved to mobile.js
        };

        //bar graph animation 
        function reanimate() {
            baranimate(1000);
        };

        function xbutton(number) {
            $(".xbutton").click(function () {
                this.parent().hide("scale", { percent: 50 }, 200);
                console.log("Window Closed!");
            });

            $(".xbutton").hover(function () {
                this.toggleClass("xactive", 200);
                this.parent().toggleClass("xxx", 200);
            });
        };




        //button click
        //unbind makes it so the button can only be clicked once at a time
        $('#buttonleft').unbind().click(function () {
            clickedlr = "left";
            buttonPosition(clickedlr);
            clickedlr = "null";
        });

        $('#buttonright').unbind().click(function () {
            clickedlr = "right";
            buttonPosition(clickedlr);
            clickedlr = "null";
        });

        function resizecontent() {
            //defining the variable content as the div with the ID of content
            var content = $("#content");
            //defining the variable contentwidth as the width of content
            var contentwidth = content.width();
            //logging the width
            console.log(contentwidth);
            var otherprofilewidth = (contentwidth / goldenratio) - 35;
            var feedwidth = contentwidth - otherprofilewidth - 36;

            $(".otherprofile").width(otherprofilewidth);
            $(".feed").width(feedwidth);
        };

        //flag
        //functions for menus
        //context menu
        //function for when the editProfile button is clicked
        $(".editProfile").click(function () {
            $(".right").html("<h1>Edit Profile</h1>");
            $("#contextmenu").hide("scale", { percent: 50 }, 200);
            window.location.hash = "edit";
        });

        $(".viewBadges").click(function () {
            badgePopUp();
        });


        resizecontent();


        //charts
        //global chart values 
        //Chart.defaults.global.defaultFontSize = 24;
        //Chart.defaults.global.defaultFontFamily = "'Open Sans', sans-serif";

        //add to new function
        $(".chart-info ul li").click(function () {
            //when one list item is clicked, all are shown as editable
            $(".chart-info ul li").find("input").show();
            $(".chart-info ul li").find("span").hide();
            $("#update").show();
        });

        //add to new function
        $("#update").click(function () {
            var tempHtml;
            var colors = graphColors;
            var tempLi;
            var ZZ = 0;

            //when update button is clicked, all are put back, and it reanimates
            $(".chart-info ul li").each(function () {
                tempLi = this.html();
                console.log("llst item " + tempLi);

                tempHtml = this.find("input").val();
                console.log("tempHtml" + tempHtml);

                if (tempHtml) {
                    //
                    this.find("span").html(tempHtml + "%");
                    graphData[ZZ] = parseFloat(tempHtml);
                    console.log("new graph data for row " + ZZ + ": " + graphData[ZZ]);
                }
                ZZ++;
            });

            customerInfo[i].graphData = graphData;

            $(".chart-info ul li").find("input").hide();
            $(".chart-info ul li").find("span").show();

            console.log(graphLegend);
            console.log(graphData);
            //push changes back to array

            //makeChart();
            $("#update").hide();
        });


        //end of main program
    }
});

//function added to remove context menu on click away from context menu div
//put this function inside a function that's called when a menu is opened. 
$(document).mouseup(function (e) {
    var container = $("#contextmenu");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        $("#contextmenu").hide("scale", { percent: 50 }, 200);
    }
});