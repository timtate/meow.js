// Replace all words with Nos, preserving punctuation.
// Requires functions in common.js so include that first

// Based on meow.py
// https://github.com/hugovk/meow.py

function derp(word) {
    'use strict';
    // Derpify a word
    var derped = "";
    var length = word.length;

    if (length === 1) {
        return capify("d", word);
    }

    if (length === 2) {
        if (pickRandom(2)){
            return capify("du", word);
        }
        return capify("de", word);
    }

    if (length === 3) {
        if (pickRandom(4)){
            return capify("duh", word);
        }
        return capify("der", word);
    }

    if (length === 4) {
        return capify("derp", word);
    }

    // Words longer than four will have:
    //  * first letter D
    //  * last letter P
    //  * middle with a random number of Es, then some Rs

    // Number of ERs:
    var eearsCount = length - 2; // accounting for the "d" and the "p"
    // Number of Ns:
    var esCount = getRandomInt(1, eearsCount);
    // Number of Os:
    var arsCount = eearsCount - esCount;

    var ees = new Array( esCount + 1).join("e"); // got this trick here:
    var ars = new Array( arsCount + 1).join("r"); // http://stackoverflow.com/questions/1877475

    derped = "d" + ees + ars + "p";
    return capify(derped, word);
}

function derpify(inputText) {
    'use strict';
    var outputText = "", line, lines = inputText.split('\n');

    for (line in lines) {
        outputText += find_words(lines[line], derp) + '\n';
    }
    return outputText;
}
