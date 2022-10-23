function guineaPig(input) {

    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let pigWeight = Number(input[3]) * 1000;

    let dailyFood = 300;

    for(let i = 1; i <= 30; i++) {
    
        food -= dailyFood;

        if (i % 2 === 0) {
            hay -= food * 0.05;
        }

        if (i % 3 === 0){
            cover -= 1/3 * pigWeight;
        }
        
        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }

    let foodKg = food/1000;
    let hayKg = hay/1000;
    let coverKg = cover/1000;

    console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);

}guineaPig(["10",
    "5",
    "5.2",
    "1"])

    guineaPig(["1", 
    "1.5", 
    "3", 
    "1.5"])

    guineaPig(["9",
    "5",
    "5.2",
    "1"])
    
    