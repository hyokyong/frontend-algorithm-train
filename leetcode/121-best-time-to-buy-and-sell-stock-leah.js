/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxprofit = 0;
    for(var i=0; i<prices.length; i++){
        for(var j=i+1; j<prices.length-i; j++) {
            if(prices[i] < prices[j]){
                if(prices[j] - prices[i] > maxprofit)
                    maxprofit = prices[j] - prices[i];
            }
        }
    }
    return maxprofit;
};
