function solve (parameter) {
    console.log(typeof parameter);

    if (typeof parameter === 'number' || typeof parameter === 'string') {
        console.log(parameter);
    } else {
        console.log("Parameter is not suitable for printing");
    }
 }solve('Hello, JavaScript!')
 solve(18)
 solve(null)
