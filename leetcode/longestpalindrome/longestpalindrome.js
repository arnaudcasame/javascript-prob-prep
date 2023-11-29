/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindromeBF = function(s) {
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

/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function(s) {
    let palindrome = '';
    if(s.length === 1){
        palindrome = s;
        return palindrome;
    }else if(s.length === 2 && s[0] !== s[1]){
        palindrome = s[0];
        return palindrome;
    }
    for (let i = 0; i < s.length; i++) {
        let j = s.length > 17 ? i+1 : i;
        while(j < s.length) {
            const word = s.slice(i, j+1);
            if(check(word) && palindrome.length < word.length){
                palindrome = word;
            }
            j++;
        }
    }
    return palindrome;
};

function check(word){
    for (let i = 0; i < word.length; i++) {
        if(word[i] !== word[word.length - (i+1)]) {
            return false
        }
    }
    return true;
}