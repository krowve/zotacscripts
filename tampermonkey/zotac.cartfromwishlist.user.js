// ==UserScript==
// @name         zotac.cartfromwishlist
// @namespace    http://tampermonkey.net/
// @version      2021060305
// @description  try to take over the world!
// @author       You
// @match        https://us.zotacstore.com/us/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';




    // document.getElementsByClassName("action edit")[0].getAttribute('href')
    // see README.md to determine how to find DATAITEMIDS
    let DATAITEMIDS = ['','',''];
    var REFRESHTIMER=20000;
    var AUDIOURL="https://www.myinstants.com/media/sounds/eye-of-the-tiger_4BP4pY8.mp3";
    var pagetitle = String(document.title);

    if (pagetitle.includes("My Wish List")) {
	setTimeout(function(){ location.reload(true); },REFRESHTIMER);
	console.log("Setting refresh to " + REFRESHTIMER);
	if (localStorage.getItem("launchfromcart") == null) {
	    localStorage.setItem("launchfromcart","0");
	}
	if (localStorage.getItem("paypal") == null) {
	    localStorage.setItem("paypal","0");
	}
    }


    var idVar = setInterval(function() {

      if (pagetitle.includes("My Wish List")) {
        console.log(document.title);
        var emptycart = document.getElementsByClassName("counter qty empty");
        if (emptycart.length == 0) {
            console.log("Cart not empty. Will not cart!");
            return;
        }
        console.log("localStorage launchfromcart = " + localStorage.getItem("launchfromcart"));
        console.log("localStorage paypal = " + localStorage.getItem("paypal"));
        console.log("DATAITEMIDS = " + DATAITEMIDS);
        console.log("Page will refresh in " + REFRESHTIMER/1000 + " seconds");
        console.log("Cart is empty");
        var elementExists = document.querySelector('[title="Add All to Cart"]');
        if (elementExists) {

            console.log("ADD ALL TO CART detected");
            var atcbuttons = document.getElementsByClassName("action btn btn-primary primary");
            var max = atcbuttons.length
            console.log(max + " items are in stock");
            for (let i = 0; i < max ; i++) {
              var dataitemid = atcbuttons[i].getAttribute('data-item-id')
              console.log("checking " + dataitemid + " to see if we cart it");
              for (let j = 0; j < DATAITEMIDS.length; j++) {
                if (DATAITEMIDS[j] == dataitemid) {
                  var soundData = AUDIOURL;
                  var audio = document.createElement("audio");
                  audio.src = soundData;
                  audio.play();
                  //window.open(AUDIOURL);
                  console.log("Trying to cart " + dataitemid + " with index " + i);
                  atcbuttons[i].click();
                  i = max;
                  clearInterval(idVar);
                  } else {
                    console.log(dataitemid + " does not match " + DATAITEMIDS[j]);
                  }
              }
            }
          } else {
              console.log("Out of Stock");
          }
        }
    },3000);
})();
