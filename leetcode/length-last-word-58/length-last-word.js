/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = function(s) {
    let charNums = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[s.length - 1 - i] !== ' '){
            charNums++;
        } else if (charNums !== 0 && s[s.length - 1 - i] === ' ') {
            break;
        }
    }
    return charNums;
};