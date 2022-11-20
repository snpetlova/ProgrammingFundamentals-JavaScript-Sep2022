function shoppingList(input) {

    let shoppingList = input.shift().split('!');
    let lines = input.slice();
    let currLine = lines.shift(); // whole line

    while (currLine != 'Go Shopping!') {

        let arguments = currLine.split(' ');
        let command = arguments[0];
        let first = arguments[1];
        let second = arguments[2];

        switch (command) {
            case "Urgent":
                //Add the item at the start of the list. If the item already exists, skip this command.
                if (!shoppingList.includes(first)) {
                    shoppingList.unshift(first); 
                }            
                break;

            case "Unnecessary":
                //Remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
                let itemIndex = shoppingList.indexOf(first);

                if (itemIndex > -1) {
                    shoppingList.splice(itemIndex, 1)
                }
                break;

            case "Correct":
                //If the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
                let updatedIndex = shoppingList.indexOf(first);

                if (updatedIndex > -1) {
                    shoppingList[updatedIndex] = second;
                }
                break;

            case "Rearrange":
                //If the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
                let removedItem = shoppingList.indexOf(first);

                if (removedItem > -1) {
                    let currentItem = shoppingList[removedItem];
                    shoppingList.splice(removedItem, 1);
                    shoppingList.push(currentItem);
                }
                break;
        }


        currLine = lines.shift();
    }

    console.log(shoppingList.join(', '));

} shoppingList((["Tomatoes!Potatoes!Bread!",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]))