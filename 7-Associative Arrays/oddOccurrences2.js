function oddOcc2(words) {

    let res = {};
    let all = words
    .split(' ')
    .map(w => w.toLowerCase());

    for (let word of all) {
        if (res[word] === undefined) {
            res[word] = 1;
        } else {
            res[word]++
        }
    }

    let result = '';

    for (let word of all) {
        if (res[word] % 2 === 1) {
            result += `${word} `;
            delete res[word];
        }
    }

    console.log(result);

}oddOcc2('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')