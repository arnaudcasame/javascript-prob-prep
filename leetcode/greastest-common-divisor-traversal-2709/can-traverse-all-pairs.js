/**
 * HARD
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canTraverseAllPairs = function(nums) {
    let [i, j] = [0, 1];
    const graph = {};

    if (nums.length < 2) return true;

    while (i < nums.length -1) {
        const gcdResult = gcd(nums[i], nums[j]);
        // console.log(nums[i], nums[j], gcdResult);
        if (gcdResult > 1) {
            if (!(i in graph)) graph[i] = [];
            if (!(j in graph)) graph[j] = [];

            graph[j].push(i);
            graph[i].push(j);
        } else {
            if (!(i in graph)) graph[i] = [];
            if (!(j in graph)) graph[j] = [];
        }
        if (j === nums.length -1) {
            i++;
            j = i+1;
        } else {
            j++;
        }
    }
    let count = 0;
    const visited = new Set();
    // console.log(graph);
    for (const node in graph) {
        if (dfs(graph, parseInt(node), visited)) {
            count += 1;
        }
    }
    return count === 1;
};

const dfs = (graph, src, visited) => {
    if (visited.has(src)) return false;

    visited.add(src);

    for (const neighbor of graph[src]) {
        dfs(graph, neighbor, visited);
    }

    return true;
};


const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);


export const canTraverseAllPairsO = function(nums) {
    return false;
};
