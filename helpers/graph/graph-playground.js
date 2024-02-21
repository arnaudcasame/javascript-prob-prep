import {TreeNode} from '../../data-structures/tree-node.js';

const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');

a.insertNode(c);
a.insertNode(b);
b.insertNode(d);
c.insertNode(e);
d.insertNode(f);

const graph = {
    a: a,
    b: b,
    c: c,
    d: d,
    e: e,
    f: f,
};

/**
 * Traveses Treenode in a Depth First Search way
 * in Iterative mode
 * @param {TreeNode} graph
 * @param {string} source
 */
const depthFirstSearchI = (graph, source) => {
    const stack = [graph[source]];
    while (stack.length > 0) {
        const current = stack.pop();
        current.print();
        stack.push(...current.getChildren());
    }
};

/**
 * Traveses Treenode in a Depth First Search way
 * in Recursive mode
 * @param {TreeNode} graph
 * @param {string} source
 */
const depthFirstSearchR = (graph, source) => {
    const current = graph[source];
    current.print();
    for (const neighbor of graph[source].getChildren()) {
        depthFirstSearchR(graph, neighbor.name_);
    }
};

/**
 * Traveses Treenode in a Breadth First Search way
 * in Iterative mode
 * @param {TreeNode} graph
 * @param {string} source
 */
const breadthFirstSearchI = (graph, source)=>{
    const queue = [graph[source]];
    while (queue.length > 0) {
        const current = queue.shift();
        current.print();
        queue.push(...current.getChildren());
    }
};

const f1 = new TreeNode('f');
const g = new TreeNode('g');
const h = new TreeNode('h');
const i = new TreeNode('i');
const j = new TreeNode('j');
const k = new TreeNode('k');

f1.insertNode(g);
f1.insertNode(i);
g.insertNode(h);
i.insertNode(g);
i.insertNode(k);
j.insertNode(i);

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// };

const graph1 = {
    f: f1,
    g: g,
    h: h,
    i: i,
    j: j,
    k: k,
};

const hasPath = (graph, src, dst) => {
    if (graph[src].name_ === graph[dst].name_) {
        return true;
    }
    for (const neighbor of graph[src].getChildren()) {
        if (hasPath(graph, neighbor.name_, dst)) {
            return true;
        }
    }
    return false;
};


console.log('------------GRAPH DFS iter--------');
depthFirstSearchI(graph, 'a');
console.log('------------GRAPH BFS iter--------');
breadthFirstSearchI(graph, 'a');
console.log('------------GRAPH DFS recur-------');
depthFirstSearchR(graph, 'a');
console.log('--------------Has Path------------');
console.log('Has path from F to K: ', hasPath(graph1, 'f', 'k'));
console.log('Has path from I to J: ', hasPath(graph1, 'i', 'j'));
console.log('Has path from J to I: ', hasPath(graph1, 'j', 'i'));
console.log('----------------------------------');

