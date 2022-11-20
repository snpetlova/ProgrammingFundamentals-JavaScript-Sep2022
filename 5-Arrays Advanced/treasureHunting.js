function treasureHunting(input) {

    let chestItems = input.shift().split('|'); // array of items in the chest
    
    while (input[0] !== "Yohoho!") {

        let linesAsAStrings = input.shift().split(' '); // separate the line in strings 'loot' 'wood' and etc.
        let commands = linesAsAStrings.shift(); // only the command [0];

       if (commands === 'Loot') {
        while(linesAsAStrings.length) {
            let item = linesAsAStrings.shift(); // collects all the items
            //Pick up treasure loot along the way. Insert the items at the beginning of the chest. 
            //If an item is already contained, don't insert it.
            if (!chestItems.includes(item)) {
                chestItems.unshift(item);
            }
        }

       } else if (commands === 'Drop') {
            //Remove the loot at the given position and add it at the end of the treasure chest. 
            //If the index is invalid, skip the command.
            let index = Number(linesAsAStrings.shift()); //getting the number of the index
            if (index >= 0 && index < chestItems.length) { // checking if the index exists
                chestItems.push(chestItems.splice(index, 1)) //removing and adding the item at the end
            }

       } else if (commands === 'Steal') {
            //Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are. 
            //Print the stolen items separated by ", ":
            let count = Math.min(chestItems.length, Number(linesAsAStrings.shift()));
            let index = chestItems.length - count;
            let stolenItems = chestItems.splice(index, count);
            console.log(stolenItems.join(', '));
       }
    }

     //In the end, output the average treasure gain, which is the sum of all treasure items length divided by the count of all items 
    //inside the chest formatted to the second decimal point:

    if (chestItems.length) {
        let avgGain = chestItems.reduce((a, b) => a + b.length, 0) / chestItems.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }

}treasureHunting(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])