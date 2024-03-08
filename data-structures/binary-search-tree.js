/**
 * A class representing the
 * Binary Search Tree structure
 * @class
 */
export class BinarySearchTree {
    /**
     * The Binary Search Tree
     * initializer
     * @param {number} data -
     */
    constructor(data) {
        /**
         * The underlying data
         * of the Binary Search Tree
         * @type {number}
         * @private
         */
        this.data = data;
        /**
         * @type {BinarySearchTree}
         * @private
         */
        this.left, this.right, this.parent;
        /**
         * @type {number}
         * @private
         */
        this.size = 1;
    }

    /**
     * Inserts the data into tree
     * in order
     * @param {number} d -
     */
    insertInOrder(d) {
        if (d <= this.data) {
            if (!this.left) {
                this.setLeftChild(new BinarySearchTree(d));
            } else {
                this.left.insertInOrder(d);
            }
            this.size++;
        } else {
            if (!this.right) {
                this.setRightChild(new BinarySearchTree(d));
            } else {
                this.right.insertInOrder(d);
            }
            this.size++;
        }
    }

    /**
     * Set the left child with a Node
     * @param {BinarySearchTree} node -
     */
    setLeftChild(node) {
        this.left = node;
        if (node !== null) {
            node.parent = this;
        }
    }

    /**
     * Set the right child with a Node
     * @param {BinarySearchTree} node -
     */
    setRightChild(node) {
        this.right = node;
        if (node !== null) {
            node.parent = this;
        }
    }

    /**
     * Finds the node with the
     * data value passed as argument
     * @param {number} d -
     * @return {BinarySearchTree}
     */
    find(d) {
        if (d === this.data) {
            return this;
        } else if (d <= this.data) {
            return this.left !== null ? this.left.find(d) : null;
        } else if (d > this.data) {
            return this.right !== null ? this.right.find(d) : null;
        }
        return null;
    }

    /**
     * Returns the size of
     * the current node
     * @return {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * Return string representation of the current tree
     * @return {string}
     */
    toString() {
        return `{data: ${this.data}, 
            left: ${this.left ? this.left.toString() : null},
            right: ${this.right ? this.right.toString() : null}}`;
    }
}
