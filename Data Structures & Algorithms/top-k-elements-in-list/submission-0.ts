class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const grupos = new Map<number, number>();
        for(const num of nums){
            grupos.set(num, (grupos.get(num) ?? 0) + 1);
        }
        return Array.from(grupos.keys()).sort((a, b) => grupos.get(b)! - grupos.get(a)!).slice(0,k);
    }
}
