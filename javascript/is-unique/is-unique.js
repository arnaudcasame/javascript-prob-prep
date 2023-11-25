/**
 * CCI - 1.1
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. 
 * What if you cannot use additional data structures?
 */

/**
 * Returns true is string only contains unique chars
 * @param {string} s the string to evaluate
 * @return {boolean} true of false
 */
export const isUnique = (s) => {
    let i = 0, j = i+1;
    while(i < s.length - 1){
        if(s[i] === s[j]) {
            console.log(s[i], s[j]);
            return false;
        }
        if(j === s.length - 1){
            i++;
            j = i+1;
        }else{
            j++;
        }
    }
    return true;
};


/** Hash Table version
 * Returns true is string only contains unique chars
 * @param {string} s the string to evaluate
 * @return {boolean} true of false
 */
export const isUniqueHT = (s) => {
    let i = 0;
    const bucket = {}
    while(i < s.length){
        if(bucket[s[i]]){
            return false;
        }else{
            bucket[s[i]] = 1;
        }
        i++;
    }
    return true;
};