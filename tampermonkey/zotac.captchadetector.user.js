// ==UserScript==
// @name         zotac.captchadetector
// @namespace    http://tampermonkey.net/
// @version      2021060403
// @description  try to take over the world!
// @author       You
// @match        https://us.zotacstore.com/us/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// @grant        none
// ==/UserScript==

var AUDIOURL = "https://www.myinstants.com/media/sounds/wrong-answer-sound-effect.mp3";
var TIMER = 300000;


(function() {
    'use strict';

var pagetitle = String(document.title);
if(pagetitle.includes("Attention Required! | Cloudflare")) {
    console.log(pagetitle);
    var soundData = AUDIOURL;
    var audio = document.createElement("audio");
    audio.src = soundData;
    audio.play();
    var idVar = setInterval(function() {
        var rawurl = document.querySelector('[title="Main content of the hCaptcha challenge"]').src
        var urlparams = new URLSearchParams(rawurl);
        var sitekey = urlparams.get('sitekey');
        console.log("hCaptcha detected");
        console.log("sitekey = " + sitekey);
        audio.play();
    },TIMER);
}
})();

