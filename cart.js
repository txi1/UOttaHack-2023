export default function loadCart(){
    let cartData = JSON.parse("cart-data.json");
    return cartData;
}

function addCartItem(){

}

function removeCartItem(itemName){
    let cart = loadCart();
    let newCart = [];
    for(let item in cart) {
        if(item["name"] != itemName) {
            newCart.push(item);
        } 
    }
    //something to make new cart the new cart
    displayCart();
}