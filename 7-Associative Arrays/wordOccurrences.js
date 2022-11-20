function words(arr) {

    let wordOcc = {};

    for (let word of arr) {
        if (!wordOcc[word]) {
            wordOcc[word] = 0;
        }

        wordOcc[word]++;
    }
    
    let wordsEntries = Object.entries(wordOcc);
    let sortedWords = wordsEntries.sort((a,b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }

}words(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])