/* eslint-disable max-len */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
export const maxSumAfterPartitioning = function(arr, k) {
    const dp = new Array(k+1).fill(0);
    const buff = k + 1;
    for (let start = arr.length - 1; start >= 0; start--) {
        let max = 0;
        const end = Math.min(arr.length, start+k);
        for (let i = start; i < end; i++) {
            max = Math.max(max, arr[i]);
            const exp = dp[(i+1)%buff]+(max*(i-start+1));
            // console.log(`dp[${start%buff}]= Max(dp[${start%buff}](${dp[start%buff]}), dp[${(i+1)%buff}](${dp[(i+1)%buff]}) + max(${max}) * i-start+1(${i-start+1}) ===> ${exp}`);
            dp[start%buff] = Math.max(dp[start%buff], exp);
        }
    }
    return dp[0];
};
