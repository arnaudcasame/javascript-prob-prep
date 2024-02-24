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

export const findJudgeMySolution = function(n, trust) {
    const src = {};
    const dst = {};

    for (const [t, j] of trust) {
        src[t] = [];
        dst[j] = [];
        src[j] = [];
        dst[t] = [];
    }

    for (const [t, j] of trust) {
        src[t].push(j);
        dst[j].push(t);
    }

    for (const key in src) {
        if (src[key].length === 0 && dst[key].length === n-1) {
            return parseInt(key);
        }
    }

    if (trust.length === 0 && n === 1) {
        return n;
    }

    return -1;
};
