/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export const maxVowels = function(s, k) {
    let [count, num] = [0, 0];
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            num++;
            count = Math.max(count, num);
        }
    }

    let [i, j] = [1, k];
    while (j < s.length) {
        if (vowels.has(s[j])) {
            num++;
        }
        if (vowels.has(s[i-1])) {
            num--;
        }
        count = Math.max(count, num);
        j++;
        i++;
    }
    return count;
};
