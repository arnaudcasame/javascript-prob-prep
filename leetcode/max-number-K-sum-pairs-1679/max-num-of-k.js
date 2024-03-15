/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const maxOperations = function(nums, k) {
    let count = 0;
    const bucket = new Map();
    const visited = new Set();

    for (const num of nums) {
        if (!bucket.has(num)) {
            bucket.set(num, 0);
        }
        bucket.set(num, bucket.get(num)+1);
    }

    for (const key of nums) {
        if (!visited.has(key) && bucket.has(k-key)) {
            if (key === k-key) {
                count += Math.floor(bucket.get(key)/2);
            } else {
                count += Math.min(bucket.get(key), bucket.get(k-key));
            }
            visited.add(key);
            visited.add(k-key);
        }
    }

    return count;
};

export const exceededLimit = function(nums, k) {
    let [i, j] = [0, 1];
    let count = 0;

    while (i < nums.length) {
        console.log(nums[i], nums[j], k);
        if (nums[i] + nums[j] === k) {
            count += 1;
            console.log('I To remove', nums[i]);
            nums.splice(i, 1);
            console.log('J To remove', nums[j-1]);
            nums.splice(j-1, 1);
            i -= 1;
            j -= 1;
            continue;
        }

        if (j < nums.length-1) {
            j++;
        } else {
            i++;
            j = i+1;
        }
    }
    return count;
};
