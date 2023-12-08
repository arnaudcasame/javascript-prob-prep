/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function(s) {
    let newS = '';
    for (const char of s) {
        if(char.match(/[A-Za-z0-9]/i)){
            newS += char.toLowerCase();
        }
    }
    let i = 0;
    while(i < newS.length){
        if(newS[i] !== newS[newS.length - 1 - i]){
            console.log(newS[i], newS[newS.length - 1 - i])
            return false;
        }
        i++;
    }
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindromeOp = function(s) {
    let j = 0;
    let i = 0;
    while (i < s.length) {
        const charL = s[i];
        const charR = s[s.length - j - 1];
        if(charL.match(/[A-Za-z0-9]/i) &&  charR.match(/[A-Za-z0-9]/i) && charL.toLowerCase() !== charR.toLowerCase()){
            return false;
        }else if(!charL.match(/[A-Za-z0-9]/i)){
            i++;
        }else if(!charR.match(/[A-Za-z0-9]/i)) {
            j++;
        }else{
            i++;
            j++;
        }
    }
    return true;
};