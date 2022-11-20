function modernTimes(string) {

    let singleWords = string.split(' ');
    
    singleWords.forEach(word => {
        const isValidWord = word.startsWith('#') && word.length > 1;
        if (isValidWord) {
            let isLetter = true;
            let copied = '';
            
            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    copied += word[i];
                }
            }

            if (isLetter) {
                console.log(copied);
            }
        }
        
    });

}modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')