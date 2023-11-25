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
    let s1 = '';
    let s2 = '';
    const sr = s.split('').reverse().join('');
    for (let j = 0; j < s.length; j++) {
        const s3 = s.slice(0, sr.length - j);
        const s4 = sr.slice(j); //[( - 1) - j]
        const s5 = s.slice(j, s.length - j);
        s1 += s[j];
        s2 += sr[j];
        console.log(j + ')', s1, s2, s3, s4, s5);
    }
    return palindrome;
};