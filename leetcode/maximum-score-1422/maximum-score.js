/**
 * @param {string} s
 * @return {number}
 */
export const maxScore = function(s) {
    let max = 0;
    let l = 0, r = 0;
    for (const char of s) {
        if(char*1 === 1){
            r++;
        }
    }
    let i = 0;
    for (const char of s) {
        if(i===s.length-1)break;
        if(char*1 === 0){
            l++;
        }else{
            r++;
        }
        i++;
        max = Math.max(max, r+l)
        console.log(max, l, r)
    }
    return max
};