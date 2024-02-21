/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const rearrangeArray = function(nums) {
    const bucket = new Array(nums.length);
    let [p, n] = [0, 1];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            bucket[n] = num;
            n += 2;
        } else {
            bucket[p] = num;
            p += 2;
        }
    }
    return bucket;
};
