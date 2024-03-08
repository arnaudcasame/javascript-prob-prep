/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxFrequencyElements = function(nums) {
    const bucket = {};
    for (const num of nums) {
        if (!(num in bucket)) {
            bucket[num] = 0;
        }
        bucket[num] += 1;
    }

    let lastFrequence = 0; let count = 0;
    for (const key in bucket) {
        if (bucket[key] > lastFrequence) {
            lastFrequence = bucket[key];
            count = 0;
            count += lastFrequence;
        } else if (bucket[key] === lastFrequence) {
            count += lastFrequence;
        }
    }
    console.log(bucket);
    return count;
};
