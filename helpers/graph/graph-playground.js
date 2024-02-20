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
const depthFirstSearch = (node)=>{
    const stack = [node];
    while (stack.length > 0) {
        const current = stack.pop();
        current.print();
        stack.push(...current.getChildren().reverse());
    }
};
console.log('------------GRAPH DFS-------------');
depthFirstSearch(a);
console.log('----------------------------------');

