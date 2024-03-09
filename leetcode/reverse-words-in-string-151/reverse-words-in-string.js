/* eslint-disable max-len */
/* eslint-disable for-direction */
/**
 * @param {string} s
 * @return {string}
 */
export const reverseWords = function(s) {
    let sentence = '';
    let spacing = true;
    let word = '';
    for (let i = s.length-1; i >= 0; i--) {
        const char = s[i];

        if (char !== ' ') {
            word = char + word;
            spacing = false;
        } else if (!spacing && word !== '') {
            sentence = sentence === '' ? word : sentence + char + word;
            word = '';
            spacing = true;
        }
    }
    sentence = word !== '' ? (sentence === '' ? word : sentence + ' ' + word) : sentence;
    // console.log('/' + sentence + '/', '*' + word + '*');
    return sentence;
};
