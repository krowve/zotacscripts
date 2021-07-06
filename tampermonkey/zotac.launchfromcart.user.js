// ==UserScript==
// @name         zotac.launchfromcart
// @namespace    http://tampermonkey.net/
// @version      2021061101
// @description  try to take over the world!
// @author       You
// @match        https://www.zotacstore.com/us/checkout/*
// @icon         https://www.google.com/s2/favicons?domain=zotacstore.com
// @grant        none
// ==/UserScript==

(function() {

// set localStorage.setItem("launchfromcart","0") on first run
var AUDIOURL="https://www.myinstants.com/media/sounds/tmpbxydyrz3.mp3";
var pagetitle = String(document.title);
if (pagetitle.includes("Shopping Cart")) {
  console.log(document.title);
  if (localStorage.getItem("launchfromcart") == null) {
      localStorage.setItem("launchfromcart","0");
  }
  if (localStorage.getItem("paypal") == null) {
      localStorage.setItem("paypal","0");
  }

  setTimeout(function(){ location.reload(true); },20000);

  var idVar = setInterval(function() {

      var elementExists = document.getElementsByClassName("cart-empty");
      if (elementExists.length == 1) {
        console.log("Empty Cart");
        console.log("Page will refresh in 20 seconds");
        console.log("localStorage launchfromcart = " + localStorage.getItem("launchfromcart"));
        console.log("localStorage paypal = " + localStorage.getItem("paypal"));
      } else {
        var OOS = document.getElementsByClassName("message-error");
          if (OOS.length == 0) {
	    console.log("Item in stock.  Checking launchfromcart value");
	    console.log("launchfromcart = " + localStorage.getItem("launchfromcart"));
	    var maintenance = document.getElementsByClassName("message message-notice notice")[0].innerText;
            if ((localStorage.getItem("launchfromcart") == "0") && (maintenance.length > 0)) {
              localStorage.setItem("launchfromcart","1");
              var soundData = AUDIOURL;
              var audio = document.createElement("audio");
              audio.src = soundData;
              audio.play();
              //window.open(AUDIOURL);
              console.log("Launching Checkout Link.  ");
              window.open("https://www.zotacstore.com/us/checkout/#shipping");
              clearInterval(idVar);
            } else {
		console.log("In stock but not carting");
		console.log("Did you do localStorage.setItem for the launchfromcart value step?");
		console.log("Ignore if in maintenance")
	    }

          } else {
            console.log("Out of Stock");
            console.log("Page will refresh in 20 seconds");
            console.log("localStorage launchfromcart = " + localStorage.getItem("launchfromcart"));
            console.log("localStorage paypal = " + localStorage.getItem("paypal"));
	  }
      }
  },3000);

}

})();
