function storeProvision(available, forDelivery){

    const storedProducts = {};
    const availableProductsLength = available.length;
    const forDeliveryLength = forDelivery.length;

    for (let i = 0; i < availableProductsLength; i += 2) {
        const currProduct = available[i];
        storedProducts[currProduct] = Number(available[i+1]);
    }

    for (let i = 0; i < forDeliveryLength; i += 2) {
        const currProduct = forDelivery[i];
        if(!storedProducts.hasOwnProperty(currProduct)) {
            storedProducts[currProduct] = 0;
        }
        storedProducts[currProduct] += Number(forDelivery[i+1]);
    }

    for (const product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }

}storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])