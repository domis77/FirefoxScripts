// ==UserScript==
// @name        wikipedia
// @namespace   wikipedia
// @description wikipedia_CSS
// @include     https://pl.wikipedia.org/
// @version     1
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

/* add font */
$("head").prepend("<style type=\"text/css\">" + 
                                "@font-face {\n" +
                                    "\tfont-family: \"SanFrancisco\";\n" + 
                                    "\tsrc: local('☺'), url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff') format('opentype');\n" + 
                                "}\n" + 
                            "</style>");

/* style content */
$('.mw-body-content').css({
 "font-size": "17px",
	"line-height": "1.52947",
	"font-weight": "400",
	"letter-spacing": "-0.021em",
  "font-family": '"SanFrancisco", "Tahoma", "Arial", sans-serif',
	"color": "#666",
	"font-style": "normal"  
});


/* style english language button */
$('.interwiki-en, .interwiki-pl').css({
  "background-color": "#c6c6c6"
});

$('.interwiki-en, .interwiki-pl').children().css({
   "color": "#8c1313",
   "margin-left": "25%",
   "font-family": '"SanFrancisco",sans-serif"',
   "font-size": "140%"
});

