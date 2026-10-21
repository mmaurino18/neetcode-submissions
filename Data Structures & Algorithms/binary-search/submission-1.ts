class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let izq = 0;
        let der = nums.length - 1;
        while (izq <= der) {
            const medio = Math.floor((izq + der) / 2);
            if (nums[medio] === target) {
                return medio;
            } else if (nums[medio] < target) {
                izq = medio + 1;
            } else {
                der = medio - 1;
            }
        }
        return -1;
    }
}
