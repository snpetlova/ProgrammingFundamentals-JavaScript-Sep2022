function oddOcc(words) {

    let res = {};
    let all = words
    .split(' ')
    .map(w => w.toLowerCase());

    let allLength = all.length;

    for (let i = 0; i < allLength; i++) {
        
        if (!res.hasOwnProperty(all[i])) {
            res[all[i]] = [];
        }
        res[all[i]].push(i);
    }

    let sorted = Object.entries(res).sort((a,b) => a[1][0] - b[1][0]);
    let result = '';

    for (let el of sorted) {
        if (el[1].length % 2 !== 0) {
            result += `${el[0]} `;
        }
    }

    console.log(result);

}oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')