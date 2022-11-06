function dictionary(array) {

    let dictionary = {};

    for (let element of array) {
        let object = JSON.parse(element);
        dictionary = Object.assign(dictionary, object);
    }

    let sorted = Object.keys(dictionary);
    sorted.sort((a, b) => a.localeCompare(b));

    for (let term of sorted) {
        let def = dictionary[term];
        console.log(`Term: ${term} => Definition: ${def}`);
    }

}dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}' ])