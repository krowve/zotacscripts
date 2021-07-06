// ==UserScript==
// @name         zotac.autocartviabutton
// @namespace    http://tampermonkey.net/
// @version      2021061001
// @description  try to take over the world!
// @author       You
// @match        https://www.zotacstore.com/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var pagetitle = String(document.title);
//if(pagetitle.includes("ZOTAC ZOTAC USB 3.0 to HDMI Adaptor")) {
if(pagetitle.includes("ZOTAC GAMING GeForce RTX 30")) {
    console.log("30 Series Page");

    setInterval(function() {
      console.log("Page does not auto reload!");
      console.log("You must refresh to check for new stock!");
      var elementExists = document.getElementsByClassName("counter qty empty");
      if (elementExists.length == 1) {
        console.log("Cart is Empty");
        var OOS = document.querySelector('[title="Notify me when this product is in stock"]');
        if (OOS == null) {
      console.log("In stock");
          if (document.querySelector('[title="Add To Cart"]')) {
            console.log("Trying to Cart");
            document.querySelector('[title="Add To Cart"]').click();
            window.location = "https://www.zotacstore.com/us/checkout/#shipping";
          }
        } else {
      console.log("Out of Stock");
    }
      } else {
        console.log("Not Carting.  Something already in cart");
      }
    },5000);
}
})();
