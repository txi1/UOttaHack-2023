import Cart from './cart.js';

window.onload = function () {
    console.log("dommy mommy");
    populateCartPage();


    let c = new Cart();
    console.log(c.loadCart());
    c.addCartItem("t1", "name1", "price", "image", "source");
    c.addCartItem("t2", "name2", "price", "image", "source");
    c.addCartItem("t2", "name3", "price", "image", "source");
    console.log(c.loadCart());
    //c.removeCartItem("t2, name2");
    //console.log(c.loadCard());

}

function populateCartPage() {
    //displayCart()
    let c = new Cart();
    c.displayCart()
}