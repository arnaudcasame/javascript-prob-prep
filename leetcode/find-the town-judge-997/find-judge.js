/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
export const findJudge = function(n, trust) {
    const trusters = new Array(n + 1).fill(0);

    for (const [t, j] of trust) {
        trusters[t] -= 1;
        trusters[j] += 1;
    }

    for (let i = 1; i <= n; i++) {
        if (trusters[i] === n - 1) {
            return i;
        }
    }

    return -1;
};
