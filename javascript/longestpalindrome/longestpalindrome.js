/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function(s) {
    let palindrome = '';
    for (let j = 1; j < s.length; j++) {
        const word = s.slice(0, j+1);
        const reverse = word.split('').reverse().join('');
        for (let i = 0; i < word.length; i++) {
            if(word.length <= 2 || i === 0){
                // console.log('result: ' + j + ') ' + s + ' ->', word + ' ->', reverse, i)
                if(word === reverse && palindrome.length < word.length){
                    palindrome = word;
                }
            }else{
                // console.log('result: ' + j + ') ' + s + ' ->', word.slice(i) + ' ->', reverse.slice(0, reverse.length - i), i)
                if((word.slice(i) === reverse.slice(0, reverse.length - i)) && (palindrome.length < word.slice(i).length)){
                    palindrome = word.slice(i);
                }
            }
        }
    }
    return palindrome;
};