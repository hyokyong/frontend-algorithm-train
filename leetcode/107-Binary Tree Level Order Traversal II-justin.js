/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levels = [];
var levelOrderBottom = function(root) {
    let index = 0;

    levels = [];
    if (!root) return []
    levelfunc(root, index)
    return levels.reverse();
};

function levelfunc (root, index) {
    let level = index;
    if (root) {
        if(levels[level] === undefined){
            let array = [];
            levels[level] = [root.val];
        } else {
            let array = [];
            levels[level] = [...levels[level], root.val];
        }

        let i = ++level;
        if(root.left) {

            levelfunc(root.left, i)
        }
        if(root.right) {

            levelfunc(root.right, i)
        }
    }
}