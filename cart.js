export default class Cart {
    
    static loadCart() {
        let cartData = {}
        cartData = JSON.parse(localStorage.getItem('items'));

        return cartData;
    }

    static addCartItem(subclass, name, price, image, source) {

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

    static removeCartItem(subclass, itemName) {
        let cartData = JSON.parse(localStorage.getItem('items'));

        let newData = {};

        if(cartData)
        for (let s in cartData) {
            newData.s = cartData.s;
            if (s == subclass) {
                for (let element of cartData.s) {
                    if (element.name != itemName) {
                        newData.s.push(element);
                    }
                }
            }
        }

       
        localStorage.setItem(('items'), JSON.stringify(newData));

    }

    static clear() {
        localStorage.setItem(('items'), JSON.stringify({}));
    }

}