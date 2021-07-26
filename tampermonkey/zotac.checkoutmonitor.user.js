// ==UserScript==
// @name         zotac.checkoutmonitor
// @namespace    http://tampermonkey.net/
// @version      2021061403
// @description  try to take over the world!
// @author       You
// @match        https://www.zotacstore.com/us/checkout/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// @downloadURL  https://github.com/krowve/zotacscripts/raw/main/tampermonkey/zotac.checkoutoutmonitor.user.js
// @updateURL    https://github.com/krowve/zotacscripts/raw/main/tampermonkey/zotac.checkoutoutmonitor.user.js
// @grant        none
// ==/UserScript==


// set localStorage.setItem("paypal","0") on first run
(function() {
    'use strict';

setInterval(function() {


    if (localStorage.getItem("paypal") == null) {
        localStorage.setItem("paypal","0");
    }
    console.log("localStorage paypal value is set to " + localStorage.getItem("paypal"));
    var pagetitle = String(document.title);
    if (pagetitle.includes("Shopping Cart  |  The ZOTAC Store")) {
        console.log(document.title);
        var checkout = 1;
        var elementExists = document.getElementsByClassName("cart-empty");
        if (elementExists.length > 0) {
            checkout = 0;
        }
        var maintenance = String(document.getElementsByClassName("message message-notice notice")[0].innerText);
        if (maintenance.includes("Maintenance")) {
            checkout = 0;
        }
        var OOS = document.getElementsByClassName("message-error");
        if (OOS.length > 0) {
            checkout = 0;
        }
        if (checkout) {
            window.location = "https://www.zotacstore.com/us/checkout/#shipping";
        } else {
        setTimeout(function(){ window.location = "https://www.zotacstore.com/us/checkout/#shipping" }, 15000);
        }

    }



    var urlstring = String(document.location.href);
    if (urlstring.includes("/checkout/#shipping")) {
    document.querySelector('[value="ups_GND"]').click();
    document.getElementsByTagName('button')[13].click();
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
})();
