/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if(cost === null || cost.length === 0)
        return 0;
    if(cost.length === 1)
        return cost[0];

    let n = cost.length;
    let d = [];
    d[0] = cost[0];
    d[1] = cost[1];

    for(let i=2; i<n; i++) {
        d[i] = Math.min(d[i-1], d[i-2]) + cost[i];
    }
    return Math.min(d[n-2],d[n-1]);
};
