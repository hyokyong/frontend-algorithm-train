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
var rootArray = [];
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    rootArray = [];
    convertArray(root);
    var treeDepth = setTreeDepth(rootArray.length);
    var resultArr = [];
    for (let i = 0; i < treeDepth; i++) {
        let array = [];
        for (let j = 2 ** i -1; j <= 2 * (2 ** i - 1); j++) {
            if (rootArray[j]) {
                array.push(rootArray[j]);
            }
        }
        resultArr.unshift(array);
    }
    return resultArr;
};

var convertArray = function (root) {
    if (root) {
        if (root.val) rootArray.push(root.val);
        if (root.left) {
            convertArray(root.left);
        }
        if (root.right) {
            convertArray(root.right);
        }
    }

}

var setTreeDepth = function (rootLength) {
    var count = 0;
    var sum = 0;
    for (let i = 0; i < rootLength; i++) {
        if (sum < rootLength) {
            sum += 2 ** i;
            count++;
        }
    }
    return count;
}
