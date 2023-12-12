/**
 * String Compression: Implement a method to perform basic string compression using the counts 
 * of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
 * "compressed" string would not become smaller than the original string, your method should return 
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */

export const compressString = function(s){
    let res = '';
    let count = 0;
    let currLetter;
    let i = 0;
    while(i < s.length){
        if(s[i] === currLetter){
            count += 1;
        }else{
            res += currLetter ? `${currLetter}${count}` : '';
            currLetter = s[i];
            count = 1;
        }
        i++;
    }
    res += currLetter ? `${currLetter}${count}` : '';
    return res;
};