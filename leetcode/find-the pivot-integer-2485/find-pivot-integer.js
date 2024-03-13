/**
 * @param {number} n
 * @return {number}
 */
export const pivotInteger = function(n) {
    const x = Math.sqrt((n * (n+1))/2);

    return x%1 !== 0 ? -1 : x;
};
