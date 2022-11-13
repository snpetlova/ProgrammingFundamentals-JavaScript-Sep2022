function convert(name, lastName, hairColor) {

    let personInfo = {
        name,
        lastName,
        hairColor,
    }

    console.log(JSON.stringify(personInfo));

}convert('George', 'Jones','Brown')