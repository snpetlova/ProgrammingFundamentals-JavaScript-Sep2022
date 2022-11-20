function matchFullName(input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    
    let names = input.match(pattern).join(' ');
    console.log(names);

}matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")