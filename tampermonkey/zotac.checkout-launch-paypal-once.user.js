// ==UserScript==
// @name         zotac.checkout-launch-paypal-once
// @namespace    http://tampermonkey.net/
// @version      2021061101
// @description  try to take over the world!
// @author       You
// @match        https://www.zotacstore.com/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// @grant        none
// ==/UserScript==


// set localStorage.setItem("paypal","0") on first run
(function() {
    'use strict';
var pagetitle = String(document.title);
if (pagetitle.includes("Checkout")) {
    console.log(document.title);

setInterval(function() {
    
    var urlstring = String(document.location.href);
    if (urlstring.includes("#shipping")) {
    document.querySelector('[value="ups_GND"]').click();
    document.getElementsByTagName('button')[13].click();
    }

    if (urlstring.includes("#payment")) {
	if (localStorage.getItem("paypal") == "0") {
	    localStorage.setItem("paypal","1");
	    console.log("Launching paypal express start");
	    window.open("https://www.zotacstore.com/us/paypal/express/start");
	} else {
	    console.log("paypal set to 1");
            console.log("Did you do localStorage.setItem step?");
	}
    }
},5000);
}    
})();
