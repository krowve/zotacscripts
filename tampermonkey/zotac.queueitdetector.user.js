// ==UserScript==
// @name         zotac.queueitdetector
// @namespace    http://tampermonkey.net/
// @version      2021062401
// @description  try to take over the world!
// @author       You
// @match        https://*.queue-it.net/*
// @icon         https://www.google.com/s2/favicons?domain=queue-it.net
// @grant        none
// ==/UserScript==

var AUDIOURL = "https://www.myinstants.com/media/sounds/mlg-airhorn.mp3";

(function() {
    'use strict';

    var pagetitle = String(document.title);
    if(pagetitle.includes("Queue-it")) {
	console.log(pagetitle);
	window.open(AUDIOURL);
    }

})();

