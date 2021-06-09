var pagetitle = String(document.title);
if(pagetitle.includes("PayPal Checkout")) {
    console.log("PayPal Checkout Page");
    setInterval(function() {
	console.log("checkout function")
	document.querySelector('[id="payment-submit-btn"]').click();
    },5000);
}
if(pagetitle.includes("Log in to your PayPal account")) {
    console.log("PayPal Log in Page");
    setInterval(function() {
	console.log("login function")
	document.querySelector('[id="btnLogin"]').click();
    },5000);
}
