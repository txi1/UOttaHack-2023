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
            
            if (s == subclass) {
                console.log(cartData[s]);
                for (let i = 0; i < cartData[s].length; i++) {
                    console.log(cartData[s][i]);
                    if (newData[s] == null) {
                        newData[s] = [];

                    }
                    if (cartData[s][i].name != itemName) {
                        newData[s].push(cartData[s][i]);
                    }
                }
            } else {
                if (newData[s] == null) {
                    newData[s] = [];
                }
                newData[s] = cartData[s];
            }
                
            console.log(s, newData[s]);
        }

       
        localStorage.setItem(('items'), JSON.stringify(newData));

    }

    static clear() {
        localStorage.setItem(('items'), JSON.stringify({}));
    }

}