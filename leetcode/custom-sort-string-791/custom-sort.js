/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
export const customSortString = function(order, s) {
    const bucket = {};
    let result = '';
    for (let i = 0; i < order.length; i++) {
        const ch = order[i];
        if (!(ch in bucket)) {
            bucket[ch] = 0;
        }
    }

    // console.log(bucket);

    for (let i=0; i<s.length; i++) {
        const ch = s[i];
        if (ch in bucket) {
            bucket[ch] += 1;
        }
    }

    for (const ch of order) {
        result += ch.repeat(bucket[ch]);
    }

    for (const ch of s) {
        if (!(ch in bucket)) {
            result += ch;
        }
    }
    return result;
};
