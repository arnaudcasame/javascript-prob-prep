/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function(s) {
    let i = 0;
    let num = 0;
    let palindrome = null;
    for (let j = 2; j < s.length; j++) {
        const word = s.slice(i, j);
        const reverse = word.split('').reverse().join('');
        console.log(word, reverse)
        if(word === reverse && num < word.length){
            num = word.length;
            palindrome = word;
        } else {
            i++;
        }
    }
    return palindrome;
};