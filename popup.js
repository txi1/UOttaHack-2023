import Cart from './cart.js';

window.onload = function() {
    console.log("dommy mommy");
    // populateCartPage();

    console.log(Cart.loadCart());
    Cart.addCartItem("t1", "name1", "price", "image", "source");
    Cart.addCartItem("t2", "name2", "price", "image", "source");
    Cart.addCartItem("t2", "name3", "price", "image", "source");
    console.log(Cart.loadCart());
    Cart.removeCartItem("t2", "name2");
    console.log(Cart.loadCart());
    Cart.clear();

}

// function populateCartPage() {
//     let c = new Cart();
//     c.loadCart();
// }