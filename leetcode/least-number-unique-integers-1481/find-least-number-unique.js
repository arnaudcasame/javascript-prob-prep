/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
export const findLeastNumOfUniqueInts = function(arr, k) {
    const bucket = new Map();
    for (const num of arr) {
        bucket.set(num, bucket.has(num) ? bucket.get(num) + 1 : 1);
    }

    const freqList = new Array(arr.length+1).fill(0);

    for (const [key, value] of bucket) {
        freqList[value] += 1;
    }
    let result = bucket.size;
    for (let i = 0; i < freqList.length; i++) {
        let remove = freqList[i];
        if (k >= remove*i) {
            k -= remove * i;
            result -= remove;
        } else {
            remove = parseInt(k/i);
            result -= remove;
            break;
        }
    }

    return result;
};
