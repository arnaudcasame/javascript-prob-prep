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