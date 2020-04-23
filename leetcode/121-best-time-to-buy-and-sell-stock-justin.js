/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;
    for(let i = 0; i < prices.length; i++) {
        if(minPrice < prices[i]){
            let price = (prices[i] - minPrice);
            if(maxProfit < price) maxProfit = price;
        } else {
            minPrice = prices[i];
        }
    }
    return maxProfit;
};