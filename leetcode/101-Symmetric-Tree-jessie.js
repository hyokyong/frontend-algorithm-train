
var isSymmetric = function(root) {
    let treeDepth = setTreeDepth(root.length);
    for (let i = 1; i <= treeDepth; i++) {
        let firstArray = [];
        let secondArray = [];
        for (let j = 2 ** i - 1; j < (2 / 3) * (2 ** i - 1); j++) {
            firstArray.push(root[j]);
        }
        for (let j = 2 * (2 ** i - 1); j > (2 / 3) * (2 ** i - 1); j--) {
            secondArray.push(root[j]);
        }
        console.log(firstArray)
        console.log(secondArray)
        if (JSON.stringify(firstArray) !== JSON.stringify(secondArray)) {
            // return false;
        }
    }
    return true;
};

var setTreeDepth = function (rootLength) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < rootLength; i++) {
        if (sum < rootLength) {
            sum += 2 ** i;
            count++;
        }
    }
    return count;
}

let result = isSymmetric([1,2,2,3,4,4,3]);
console.log(result);
