/**
 * A class representing the
 * TreeNode blueprint
 * @class
 */
export class TreeNode {
    /**
     * The TreeNode initializer
     */
    constructor() {
        /**
         * The name of the TreeNode
         * @type {string}
         * @private
         */
        this.name_ = null;
        /**
         * The list of tree nodes that are
         * children to the current TreeNode
         * @type {TreeNode}
         * @private
         */
        this.children_ = [];
    }
}
