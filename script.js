const male = ['Max','Alex','John','Kyle','Sam'];
const verb = ['is dancing with', 'is baking with', 'is running with', 'is joking with', 'is swimming with'];
const female = ['Tina','Dora','Maria','Freya','Lisa'];

const randomMessage = (male, verb, female) => {
    let word1, word2, word3, first;
    if (Math.floor(Math.random() * 2)) {
        word1 = randomWord(male);
        first = 'male';
    } else {
        word1 = randomWord(female);
        first = 'female';
    }
    word2 = randomWord(verb);
    if (first === 'male') {
        word3 = randomWord(female);
    } else {
        word3 = randomWord(male);
    }

    return `${word1} ${word2} ${word3}.`;
}

const randomWord = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomMessage(male,verb,female));