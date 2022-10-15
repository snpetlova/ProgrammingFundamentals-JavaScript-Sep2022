function orders(product, quantity) {

    let price = 0;

    switch (product) {
        case "coffee":
            price = (1.50 * quantity).toFixed(2);
            break;
        case "water":
            price = (1.00 * quantity).toFixed(2);
            break;
        case "coke":
            price = (1.40 * quantity).toFixed(2);
            break;
        case "snacks":
            price = (2.00 * quantity).toFixed(2);
            break;
    }

    return price;
}

let totalPrice = orders("water", 5)
console.log(totalPrice);