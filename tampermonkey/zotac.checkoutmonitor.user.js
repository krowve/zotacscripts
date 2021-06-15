// ==UserScript==
// @name         zotac.checkoutmonitor
// @namespace    http://tampermonkey.net/
// @version      2021061101
// @description  try to take over the world!
// @author       You
// @match        https://us.zotacstore.com/us/checkout/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// @downloadURL  https://github.com/krowve/zotacscripts/raw/main/tampermonkey/zotac.checkoutoutmonitor.user.js
// @updateURL    https://github.com/krowve/zotacscripts/raw/main/tampermonkey/zotac.checkoutoutmonitor.user.js
// @grant        none
// ==/UserScript==


// set localStorage.setItem("paypal","0") on first run
(function() {
    'use strict';



setInterval(function() {

    var pagetitle = String(document.title);
    if (pagetitle.includes("Shopping Cart  |  The ZOTAC Store")) {
        console.log(document.title);
        window.location = "https://us.zotacstore.com/us/checkout/#shipping";
        if (localStorage.getItem("paypal") == null) {
            localStorage.setItem("paypal","0");
        }
        console.log("localStorage paypal value is set to " + localStorage.getItem("paypal"));

    }

    var urlstring = String(document.location.href);
    if (urlstring.includes("/checkout/#shipping")) {
    document.querySelector('[value="ups_GND"]').click();
    document.getElementsByTagName('button')[13].click();
    }

    if (urlstring.includes("#payment")) {
	if (localStorage.getItem("paypal") == "0") {
	    localStorage.setItem("paypal","1");
	    console.log("Launching paypal express start");
	    window.open("https://us.zotacstore.com/us/paypal/express/start");
	} else {
	    console.log("paypal set to 1");
            console.log("Did you do localStorage.setItem step?");
	}
    }
},20000);
})();
