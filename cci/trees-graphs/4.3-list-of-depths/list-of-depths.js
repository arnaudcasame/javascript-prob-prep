/* eslint-disable max-len */
/**
 * Creates a linked list of all the nodes at each depth
 * @param {Object} graph
 * @param {string} root
 * @return {string[]}
 */
export const listOfDepths = function(graph, root) {
    const queue = [{val: root, level: 0}];
    const result = [];
    let str = '';
    let currentLevel = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        if (currentLevel === current.level) {
            str += '('+current.val+')';
        } else {
            result.push(str);
            str = '('+current.val+')';
            currentLevel = current.level;
        }

        // console.log(current.level, current.val);

        graph[current.val][0] && queue.push({val: graph[current.val][0], level: current.level+1});
        graph[current.val][1] && queue.push({val: graph[current.val][1], level: current.level+1});
    }
    result.push(str);
    return result;
};
