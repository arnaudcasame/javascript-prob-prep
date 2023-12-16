/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = function(nums) {
    let i = 0;
    while(i<nums.length){
        const unique = nums.splice(i, 1)[0];
        if(!nums.includes(unique)){
            return unique;
        }
        nums.splice(i, 0, unique);
        i++;
    }
};

export const singleNumberO = function(nums) {
    let i = 0, result = 0;
    while(i<nums.length){
        result ^= nums[i];
        i++;
    }
    return result;
};