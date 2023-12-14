/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = function(nums) {
    const leftProd = new Array(nums.length).fill(1);
    const rightProd = new Array(nums.length).fill(1);

    let rProd = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        rProd *= nums[i + 1];
        rightProd[i] = rProd;
    }

    let lProd = 1;
    for (let i = 1; i < nums.length; i++) {
        lProd *= nums[i - 1];
        leftProd[i] = lProd;
    }

    const res = [];
    for (let i = 0; i < nums.length; i++) {
        res[i] = leftProd[i] * rightProd[i];
    }
    return res;
};