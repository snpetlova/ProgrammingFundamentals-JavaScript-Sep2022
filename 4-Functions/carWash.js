function carWash(array) {

    let value = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] === "soap"){
            value += 10;
        } else if (array[i] === "water") {
            value = value * 1.2;
        } else if (array[i] === "vacuum cleaner") {
            value = value * 1.25;
        } else if (array[i] === "mud") {
            value = value * 0.9;
        } 
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);

}carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"])
