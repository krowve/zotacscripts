## Tampermonkey scripts

## **AUTO CART VIA ATC BUTTON**

### zotac.autocartviabutton

If a 30 series product page is detected on zotac the script will try
to detect if you already have something in your cart.  If your cart
has something in it this script will not run. The idea is to attempt
to prevent multiple cards from getting in a cart due to zotacâ€™s new 1
card per household every 2 weeks policy.  If an add to cart button
exists and the card is in stock it will attempt to click it.  After
carting it will redirect to the shipping method page.

***
## **LAUNCH FROM CART**

### zotac.launchfromcart

This script will check to see if the page loaded is the shopping cart
page.  If it is and it sees an item come in stock it will launch a
checkout window.  It uses localStorage to make sure the link only gets
launched once per session.  Make sure you set the launchfromcart
localStorage flag to 0 when starting to hunt for a card. On first run
at the console enter the following:

localStorage.setItem("launchfromcart", "0");

***
## **CHECKOUT HELPER only launch paypal once**

### zotac.checkout-launch-paypal-once.user.js

This script will check to see if the page loaded is the checkout page.
If it is the checkout page it will set the shipping method, click
continue. If it sees the review page it will launch a paypal start
express link if the localStorage value for paypal is set to 0.  On
first run from the console enter the following.

localStorage.setItem("paypal", "0");

In theory due to the way this script is designed it would be safe to
hit the checkout/#shipping page in multiple windows without fear of
multiple paypal express windows being launched.  Lastly, make sure you
allow popups from zotac if you are using this script.


***
## **CART FROM WISHLIST**

### zotac.cartfromwishlist

This script will monitor your wishlist page.  If anything from your
wishlist page comes in stock this script will pick a card to cart
based on the priority level you set.

In order to set the priority level for each product in your wishlist, you must find the DATAITEMID for each item and put them in order sequentially in the script.

1. Go to your wishlist

2. Mouse over the Edit button (looks like a pencil) for the item you
want to have the highest priority

3. Look in the footer of your browser, it will display a URL that
looks similar to this:
https://us.zotacstore.com/us/wishlist/index/configure/id/86004/product_id/1668/

4. Note the number that appears after, /id/, in this case it is 86004.

5. Enter the number in the first position in the array. The array (3rd
line of script) looks like this ['',''] After you input the number, it
will look like this ['86004','']

Now add additional products in order of priority from your wishlist

1. Go back to your wishlist

2. Mouse over the Edit button (looks like a pencil) for the item you want to have the next highest priority

3. Look in the footer of your browser, it will display a URL that
looks similar to this:
https://us.zotacstore.com/us/wishlist/index/configure/id/86055/product_id/1665/

4. Note the number that appears after, /id/, in this case it is 86055.

5. Enter the number in the next position in the array. The array (3rd
line of script) looks similar to this ['86004',''] After you input the
number, it will look like this ['86004','86055']

You can add as many items as are on your wishlist, just seperate each
item with a comma and use ' ' as a container
['product1','product2','product3','product4']
***
