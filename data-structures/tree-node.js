/**
 * A class representing the
 * TreeNode blueprint
 * @class
 */
export class TreeNode {
    /**
     * The TreeNode initializer
     * @param {string} name the node's name
     */
    constructor(name) {
        /**
         * The name of the TreeNode
         * @type {string}
         * @private
         */
        this.name_ = name;
        /**
         * The list of tree nodes that are
         * children to the current TreeNode
         * @type {TreeNode[]}
         * @private
         */
        this.children_ = [];
    }

    /**
     * Inserts node to the children's list
     * @param {TreeNode} node the node to insert
     */
    insertNode(node) {
        this.children_.push(node);
    }

    /**
     * Returns the adjacency list
     * @return {TreeNode[]}
     */
    getChildren() {
        return this.children_;
    }

    /**
     * Prints the current node's name
     * in the console
     */
    print() {
        console.log(this.name_);
    }
}
