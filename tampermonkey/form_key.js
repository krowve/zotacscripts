// ==UserScript==
// @name         Krowve - form_key.js
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://us.zotacstore.com/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// @grant        none
// ==/UserScript==


// Not quite working as intended.  localStorage only works across
// tabs if they are launched from a parent window.
// If you want to use this with localstorage.js log into zotac
// visit a web page on their site and in the same window then visit
// local pages hosted at http://localhost:8000
// This should make it so the localStorage variable is valid and
// automatically set.
(function() {
    'use strict';
    var doclocation = String(document.location.href);
    console.log(doclocation);
    if(doclocation.includes("us.zotacstore.com")) {
    setInterval(function() {	
	console.log("Setting form_key value to localStorage");
	var form_key = document.querySelector('input[name="form_key"]').value
	localStorage.setItem("form_key",form_key);
	console.log("form_key = " + form_key);
    },5000);
    }
})();
