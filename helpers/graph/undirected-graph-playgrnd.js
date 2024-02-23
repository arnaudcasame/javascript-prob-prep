/* eslint-disable max-len */
import {TreeNode} from '../../data-structures/tree-node.js';

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];

// const graph = {
//     i: ['j', 'k'],
//     j: ['i', 'k'],
//     k: ['i', 'm', 'l', 'j'],
//     m: ['k'],
//     l: ['k'],
//     o: ['n'],
//     n: ['o'],
// };

const buildGraph = (edges) => {
    const graph = {};

    for (const edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};
const graph = buildGraph(edges);

const hasPath = (graph, src, dst, bucket) => {
    if (src === dst) return true;

    if (bucket.has(src)) return false;
    bucket.add(src);

    for (const neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, bucket)) {
            return true;
        }
    }
    return false;
};


console.log(buildGraph(edges));
console.log('Is there a path from j to o?', hasPath(graph, 'j', 'o', new Set()));
console.log('Is there a path from j to k?', hasPath(graph, 'j', 'k', new Set()));
console.log('Is there a path from j to m?', hasPath(graph, 'j', 'm', new Set()));
