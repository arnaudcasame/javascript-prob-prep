/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = function(nums) {
    for (let i = 0; i < nums.length + 1; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
    return nums[nums.length-1] + 1;
};

export const missingNumberO = function(nums) {
    const bucket = {};
    for (const num of nums) {
        bucket[num] = 1;
    }
    for (let i = 0; i < nums.length + 1; i++) {
        if (!bucket[i]) {
            return i;
        }
    }
    return nums[nums.length-1] + 1;
};
