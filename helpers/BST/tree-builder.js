export const buildTree = (arr)=>{
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
