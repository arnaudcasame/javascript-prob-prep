/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagrams = function (strs) {
    const res = [];
    while (strs.length > 0) {
        const group = [strs.shift()];
        let j = 0;
        while (j < strs.length) {
            const word = strs[j];
            if (isAnagram(word, group[0])) {
                group.push(word);
                strs.splice(j, 1);
                j--;
            }
            j++;
        }
        res.push(group);
    }
    return res;
};

function isAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    const bucket1 = {};
    const bucket2 = {};
    let i = 0;
    while (i < word1.length) {
        bucket1[word1[i]] = bucket1[word1[i]] ? bucket1[word1[i]] + 1 : 1;
        bucket2[word2[i]] = bucket2[word2[i]] ? bucket2[word2[i]] + 1 : 1;
        i++;
    }
    for (const char of word1) {
        if (bucket1[char] !== bucket2[char]) {
            return false;
        }
    }
    return true;
}


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagramsO = function (strs) {
    const res = {};

    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join()
        if (!res[sortedStr]) {
            res[sortedStr] = [strs[i]]
        } else {
            res[sortedStr].push(strs[i])
        }
    }

    return Object.values(res)
};