function wordTracker(arr) {

    const words = arr.shift().split(' ');
    let tracker = {};

    for (const word of words) {
        tracker[word] = 0;
    }

    for (const word of arr) {
        if (tracker.hasOwnProperty(word)) {
            tracker[word]++;
        }
    }

    const sortedWords = Object.entries(tracker).sort((a,b) => b[1] - a[1]);
    
    for (let kvp of sortedWords) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
    

} wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'])