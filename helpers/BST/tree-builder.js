/**
 * Builds a Binary Tree from an array using
 * indices when mode is 'i' or values when mode is 'v'
 * @param {T} arr
 * @param {string} mode can be 'i' or 'v'
 * @return {Object}
 */
export const buildTree = (arr, mode)=>{
    const tree = {};
    let i = 0;

    while (i < arr.length && mode === 'i') {
        if (!(i in tree)) {
            tree[i] = [];
        }

        arr[(i*2)+1] !== undefined && tree[i].push((i*2)+1);
        arr[(i*2)+2] !== undefined && tree[i].push((i*2)+2);

        i++;
    }

    while (i < arr.length && mode === 'v') {
        if (!(arr[i] in tree)) {
            tree[arr[i]] = [];
        }

        arr[(i*2)+1] !== undefined && tree[arr[i]].push(arr[(i*2)+1]);
        arr[(i*2)+2] !== undefined && tree[arr[i]].push(arr[(i*2)+2]);

        i++;
    }

    return tree;
};
