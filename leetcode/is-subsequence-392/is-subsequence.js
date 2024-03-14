/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = function(s, t) {
    let [i, j] = [0, 0];
    while (i < t.length) {
        if (t[i] === s[j]) {
            j++;
        }
        i++;
    }
    // console.log();
    return j === s.length;
};
