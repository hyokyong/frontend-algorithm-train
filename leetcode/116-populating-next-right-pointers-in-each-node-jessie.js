var connect = function(root) {
    if (root === null){
        return;
    }

    if (root.left) {
        root.left.next = root.right;
    }

    if (root.right) {
        root.right.next = (root.next === null) ? null : root.next.left
    }

    connect(root.left);
    connect(root.right);
};

let rootObject = {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}
let result = connect(rootObject);
console.log(result);
