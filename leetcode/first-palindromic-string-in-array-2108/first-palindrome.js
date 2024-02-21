/**
 * @param {string[]} words
 * @return {string}
 */
export const firstPalindrome = function(words) {
    for (const word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return '';
};

/**
 * Determines whether a string
 * is a Palindrome
 * @param {string} substr the string to operate on
 * @return {boolean}
 */
function isPalindrome(substr) {
    const len = substr.length;
    const n = len%2 == 0 ? (len/2)+1 : Math.round(len/2)+1;
    for (let i = 0; i < n; i++) {
        const left = i;
        const right = len - 1 - i;
        if (substr.charAt(left) != substr.charAt(right)) {
            return false;
        }
    }
    return true;
}
