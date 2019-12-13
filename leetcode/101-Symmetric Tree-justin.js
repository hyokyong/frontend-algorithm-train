/**
 * Created by front on 2019-12-13.
 */


var isSymmetric = function(root) {
    let left = [];
    let right = [];
    if (!root) return true;
    console.log(root);

    preleftorder(root.left, left);

    prerightorder(root.right, right);


    return left.every((item, index) => {
        return item === right[index];
    })
};

function preleftorder (root, left) {
    if(root === null) {
        left.push(root);
        return
    }
    left.push(root.val);
    preleftorder(root.left, left)
    preleftorder(root.right, left)

}

function prerightorder (root, right) {
    if(root === null) {
        right.push(root);
        return
    }
    right.push(root.val);
    prerightorder(root.right, right)
    prerightorder(root.left, right)
}