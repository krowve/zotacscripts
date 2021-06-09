// ==UserScript==
// @name         Krowve - paypal.js
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://paypal.com/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// @grant        none
// ==/UserScript==

// Anyone know how to allow tampermonkey to run on paypal.  Let me know.

(function() {
    'use strict';
var pagetitle = String(document.title);
if(pagetitle.includes("PayPal Checkout")) {
    console.log("PayPal Checkout Page");
    setInterval(function() {
	console.log("in function")
	document.querySelector('[id="payment-submit-btn"]').click();
    },5000);
}
})();
