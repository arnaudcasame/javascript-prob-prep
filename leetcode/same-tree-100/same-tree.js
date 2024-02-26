/* eslint-disable max-len */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export const isSameTree = function(p, q) {
    const tree1 = buildTree(p);
    // console.log(tree1);
    const tree2 = buildTree(q);
    // console.log(tree2);

    return bfs(tree1, tree2, 0, 0, p, q);
};


const buildTree = (arr)=>{
    const tree = {};
    let i = 0;

    while (i < arr.length) {
        if (!(i in tree)) {
            tree[i] = [];
        }

        arr[(i*2)+1] !== undefined && tree[i].push((i*2)+1);
        arr[(i*2)+2] !== undefined && tree[i].push((i*2)+2);

        i++;
    }

    return tree;
};


const bfs = (tree1, tree2, root1, root2, nums1, nums2) => {
    const queue1 = [root1];
    const queue2 = [root2];

    while (queue1.length > 0 || queue2.length > 0) {
        const current1 = queue1.shift();
        const current2 = queue2.shift();

        if (nums1[current1] !== nums2[current2]) {
            return false;
        }

        // console.log(nums1[current1], nums2[current2],/*, queue1, queue2, current1, current2*/);

        tree1[current1] && queue1.push(...tree1[current1]);
        tree2[current2] && queue2.push(...tree2[current2]);
    }

    bsfRecursive(null, null);

    return true;
};


const bsfRecursive = (node1, node2) => {
    // if(node1.left && node2.left){
    //     bfs(node1.left, node2.left)
    // }

    // if(node1.right && node2.right){
    //     bfs(node1.right, node2.right)
    // }

    // console.log(node1.val, node2.val);
};
