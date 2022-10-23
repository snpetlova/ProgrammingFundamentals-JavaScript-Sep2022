function computerStore(input) {

    let sumWithoutTaxes = 0;
    let taxes = 0;
    let sumWithTax = 0;
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== "special" && input[i] !== "regular") {
            let prices = Number(input[i]);

            if (prices >= 0) {
                sumWithoutTaxes += prices;
            } else {
                console.log("Invalid price!");
            }
        }

        taxes = sumWithoutTaxes * 0.2;
        sumWithTax = sumWithoutTaxes + taxes;

        if (input[i] === "special") {
            total = sumWithTax * 0.9;
        } else if (input[i] === "regular") {
            total = sumWithTax;
        }
    }

    if (total === 0) {
        return console.log("Invalid order!");
    }

    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sumWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${total.toFixed(2)}$`);

} computerStore(['1050','200','450','2','18.50','16.86','special'])

computerStore(['regular'])

computerStore(['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular'])
    

