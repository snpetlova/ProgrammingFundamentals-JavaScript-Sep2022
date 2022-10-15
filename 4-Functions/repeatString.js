function repeatString(string, count) {

    let res = '';

    for (let i = 0; i < count; i++) {
        res += string;
    }

    return res;
}

let repeatedString = repeatString("abc", 3)
console.log(repeatedString);

