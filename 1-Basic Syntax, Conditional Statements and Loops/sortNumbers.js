function solve (a, b, c) {
    if (a > b && a > c) {
        console.log(a);
     
    if (b > c) {
        console.log(b);
        console.log(c);
    } else {
        console.log(c);
        console.log(b);
    }}
    
    if (b > a && b > c) {
        console.log(b);
    
    if(a > c) {
        console.log(a);
        console.log(c);
    } else {
        console.log(c);
        console.log(a);
    }}

    if (c > a && c > b) {
        console.log(c);
     
    if (a > b) {
        console.log(a);
        console.log(b);
    } else {
        console.log(b);
        console.log(a);
    }}
} solve(-2,1,3)