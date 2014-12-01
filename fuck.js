// Replace all words with Nos, preserving punctuation.
// Requires functions in common.js so include that first

// Based on meow.py
// https://github.com/hugovk/meow.py

function fuck(word) {
    'use strict';
    // fuckify a word
    var fucked = "";
    var length = word.length;

    if (length === 1) {
        return capify("f", word);
    }

    if (length === 2) {
        if (pickRandom(2)){
            return capify("fu", word);
        }
        return capify("ff", word);
    }

    if (length === 3) {
        if (pickRandom(4)){
            return capify("ffu", word);
        }
        return capify("fuk", word);
    }

    if (length === 4) {
        return capify("fuck", word);
    }

    if (length === 6) {
        if (pickRandom(4)){
            return capify("fucker", word);
        }
        if (pickRandom(4)){
            return capify("fucked", word);
        }
    }

    if (length === 7) {
        if (pickRandom(4)){
            return capify("fuckity", word);
        }
        if (pickRandom(4)){
            return capify("fucking", word);
        }
    }

    if (length === 8) {
        if (pickRandom(6)){
            return capify("fuckface", word);
        }
        if (pickRandom(6)){
            return capify("fucktard", word);
        }
    }

    // Words longer than four will have:
    //  * first letter F
    //  * last letters CK
    //  * middle with a random number of Fs, then some Us

    // Number of FUs:
    var effusCount = length - 3; // accounting for the "f" and the "ck"
    // Number of Us:
    var usCount = getRandomInt(1, effusCount);
    // Number of Fs:
    // Do this in opposite order of other wordifiers because I always want at least one U
    var effsCount = effusCount - usCount;

    var effs = new Array( effsCount + 1).join("f"); // got this trick here:
    var us = new Array( usCount + 1).join("u"); // http://stackoverflow.com/questions/1877475

    fucked = "f" + effs + us + "ck";
    return capify(fucked, word);
}

function fuckify(inputText) {
    'use strict';
    var outputText = "", line, lines = inputText.split('\n');

    for (line in lines) {
        outputText += find_words(lines[line], fuck) + '\n';
    }
    return outputText;
}
