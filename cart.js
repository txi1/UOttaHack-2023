export default class Cart {

    loadCart() {

    
        let cartData = [];
        cartData = JSON.parse(localStorage.getItem('items'));

        return cartData;
    }

    addCartItem(subclass, name, price, image, source) {

        let item = {};
        item.name = name;
        item.price = price;
        item.image = image;
        item.source = source;

        let cartData = JSON.parse(localStorage.getItem('items'));
        if (cartData == null) {
            cartData = {};
        }
        if (cartData[subclass] == null)
            cartData[subclass] = [];
        cartData[subclass].push(item);

        localStorage.setItem('items', JSON.stringify(cartData));
    }

    removeCartItem(subclass, itemName) {
        let cartData = JSON.parse(localStorage.getItem('items'));

        const index = cartData.subclass;
        cartData.splice(index, 1);
        localStorage.setItem(('items'), JSON.stringify(cartData));

    }

    displayCart() {

    }

}