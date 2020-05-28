/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let index1 = 0;
    let index2 = 1;


    let result1 = step(index1, cost)
    let result2 = step(index2, cost)

    return Math.min(result1, result2)
};

var step = function (index, cost) {
    if (index == cost.length - 1) return cost[index];
    if (index > cost.length - 1) return 0;
    let index1  = index + 1;
    let index2 = index + 2;


    let result1 = cost[index] + step(index1, cost);
    let result2 = cost[index] + step(index2, cost);
    return Math.min(result1, result2);
}