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
 * Traveses Treenode in a Breadth First Search way
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
console.log('------------GRAPH DFS-------------');
depthFirstSearchI(graph, 'a');
console.log('------------GRAPH BFS-------------');
breadthFirstSearchI(graph, 'a');
console.log('----------------------------------');

