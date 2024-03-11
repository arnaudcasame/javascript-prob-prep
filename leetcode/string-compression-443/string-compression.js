/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
    let s = '';
    let currentChar = '';
    let currentCount = 0;
    const length = chars.length;
    for (let i = 0; i < length; i++) {
        const char = chars[i];
        if (char !== currentChar) {
            if (currentChar !== '' && currentCount > 1) {
                s += currentChar + currentCount;
            } else if (currentCount == 1) {
                s += currentChar;
            }

            currentChar = char;
            currentCount = 1;
        } else if (char === currentChar) {
            currentCount += 1;
        }
    }

    if (currentChar !== '' && currentCount > 1) {
        s += currentChar + currentCount;
    } else if (currentCount == 1) {
        s += currentChar;
    }

    let i=0;

    while (i < s.length) {
        chars[i] = s[i];
        i++;
    }

    chars.splice(i);
    return 0;
};


export default {
    compress: compress,
};
