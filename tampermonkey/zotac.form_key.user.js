// ==UserScript==
// @name         zotac.form_key
// @namespace    http://tampermonkey.net/
// @version      2021060901
// @description  try to take over the world!
// @author       You
// @match        https://us.zotacstore.com/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// ==/UserScript==

// Displays form_key value over and over again on the console.

(function() {
    'use strict';
    var idVar = setInterval(function() {
    console.log("form_key is " + document.getElementsByName("form_key")[0].value);
    },2000);
})();
