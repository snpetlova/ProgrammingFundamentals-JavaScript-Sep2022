function convertToObject(jsonString) {

    let personInfo = JSON.parse(jsonString);

    for (const key of Object.keys(personInfo)) {
        console.log(`${key}: ${personInfo[key]}`);
    }

}convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')