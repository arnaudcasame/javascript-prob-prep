/**
 * Returns true if there's route between
 * the source and the destination
 * @param {Object} graph The adjacency list
 * (directed graph acyclic)
 * @param {string} source The originating node
 * @param {string} destination the destination node
 * @return {boolean}
 */
export const routeBetweenNodes = function(graph, source, destination) {
    const stack = [source];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current === destination) {
            return true;
        }
        current && stack.push(...graph[current]);
    }
    return false;
};
