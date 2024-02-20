import {TreeNode} from '../../data-structures/tree-node.js';

const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');

a.insertNode(b);
a.insertNode(c);
b.insertNode(d);
c.insertNode(e);
d.insertNode(f);

/**
 * Traveses Treenode in a Depth First Search way
 * @param {TreeNode} node
 */
const depthFirstSearchI = (node)=>{
    const stack = [node];
    while (stack.length > 0) {
        const current = stack.pop();
        current.print();
        stack.push(...current.getChildren().reverse());
    }
};

/**
 * Traveses Treenode in a Depth First Search way
 * @param {TreeNode} node
 */
const breadthFirstSearchI = (node)=>{
    const queue = [node];
    while (queue.length > 0) {
        const current = queue.shift();
        current.print();
        queue.push(...current.getChildren());
    }
};
console.log('------------GRAPH DFS-------------');
depthFirstSearchI(a);
console.log('------------GRAPH BFS-------------');
breadthFirstSearchI(a);
console.log('----------------------------------');

