/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const topKFrequent = function(nums, k) {
    let i=0;
    let arr = new Array(nums.length);
    let met = {};
    while(i < nums.length){
        met[nums[i]] = met[nums[i]] ? met[nums[i]] + 1 : 1;
        i++;
    }
    for (const t in met) {
        if(arr[met[t]] !== undefined){
            arr[met[t]] = [...arr[met[t]], t*1];
        }else{
            arr[met[t]] = [t*1];
        }
    }
    i = arr.length;
    let res = [];
    while(i > 0 && res.length < k){
        if(arr[i] !== undefined){
            res.push(...arr[i])
        }
        i--;
    }
    return res;
};