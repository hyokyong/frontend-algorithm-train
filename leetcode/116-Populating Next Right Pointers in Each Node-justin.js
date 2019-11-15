/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

function makeTempRoot (lroot, rroot) {
    let root = {};
    root.left = lroot.right;
    root.right = rroot.left;
    return root;
}

function goToNextLevel (root) {
    if(root.left !== null){
        if(root.right !== null) {
            root.left.next = root.right;
        }
    }
}

var connect = function(root) {
    let parent = root;
    if (!root) return parent
    let troot = null;
    if(root.left !== null) {
        if (root.right !== null) {
            root.left.next = root.right;
            troot = makeTempRoot(root.left, root.right);

            if (troot !== null) {
                goToNextLevel(troot);
            }
        }
        connect(root.left)
    }

    if (root.right !== null) {
        connect(root.right);
    }
    return parent
};