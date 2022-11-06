function employees(list) {

    let employees = {};

    list.forEach(person => {
        employees[person] = person.length;
    });

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }

}employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal' ])