function softuniBarIncome(arr) {

    const pattern = /%(?<customer>[A-Za-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g;

    let totalIncome = 0;
    let command = arr.shift();

    while (command !== 'end of shift') {
        let currData = pattern.exec(command);

        if (currData) {
            let currCustomer = currData.groups['customer'];
            let currProduct = currData.groups['product'];
            let currCount = Number(currData.groups['count']);
            let currPrice = Number(currData.groups['price']);

            let totalPrice = currCount * currPrice;

            console.log(`${currCustomer}: ${currProduct} - ${totalPrice.toFixed(2)}`);

            totalIncome += totalPrice;

            command = arr.shift();
        }

    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);

} softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])