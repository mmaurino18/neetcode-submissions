class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minimo = prices[0];
        let profit = 0;
        for(let i = 1;i < prices.length;i++){
            minimo = Math.min(minimo,prices[i]);
            profit = Math.max(profit,prices[i] - minimo);
        }
        return profit;
    }
}
