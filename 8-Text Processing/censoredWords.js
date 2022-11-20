function censoredWords(text, word) {

    let res = text;

    while(res.includes(word)) {
        res = res.replace(word, '*'.repeat(word.length))
    }

    console.log(res);

}censoredWords('A small sentence with some words',
'small')