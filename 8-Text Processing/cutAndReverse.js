function cutAndReverse(string) {

    let middle = string.length / 2;
    
    const first = string
    .substring(0, middle)
    .split('')
    .reverse()
    .join('');

    console.log(first);

    const second = string
    .substring(middle)
    .split('')
    .reverse()
    .join('')

    console.log(second);

}cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')