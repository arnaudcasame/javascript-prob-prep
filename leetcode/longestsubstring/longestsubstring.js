/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function(s) {
    let i = 0;
    let num = 0;
    let longestSTR = '';
    while(i < s.length){
        const index = longestSTR.indexOf(s[i]);
        if(index === -1){
            longestSTR += s[i];
        }else{
            longestSTR = longestSTR.length === 1 ? s[i] : longestSTR.slice(index+1, i+1) + s[i];
        }
        if(longestSTR.length > num){
            num = longestSTR.length;
        }
        i++;
    }
    return num;
};