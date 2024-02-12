/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = function(nums) {
    const bucket = {};
    for (const num of nums) {
        bucket[num] = bucket[num] ? bucket[num] + 1 : 1;
    }
    // eslint-disable-next-line guard-for-in
    for (const key in bucket) {
        const element = bucket[key];
        if (element > nums.length/2) {
            return +key;
        }
    }
    return 0;
};
