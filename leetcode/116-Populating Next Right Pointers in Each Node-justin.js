/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

var connect = function(root) {
    return connectChild(root,null)
};
var connectChild=function(root,next){
    if (!root) return root;
    root.next = next;
    connectChild(root.left, root.right);
    connectChild(root.right, (root.next ? root.next.left : root.next));
    return root;
}