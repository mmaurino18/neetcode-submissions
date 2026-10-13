class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        nums.sort((a, b) => a - b);
        let actual = 1;
        let mejor = 1;

        for (let i = 1; i < nums.length; i++) {
            const diferencia = nums[i] - nums[i - 1];
            if (diferencia === 1) {
                actual++;                        
            } else if (diferencia !== 0) {
                actual = 1;                      
            }
            mejor = Math.max(mejor, actual); 
        }

        return mejor;
    }
}
