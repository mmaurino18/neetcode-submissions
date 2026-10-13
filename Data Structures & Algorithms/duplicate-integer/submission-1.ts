class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let l = nums.length;
        const vistos = new Set<number>();
        for(let i = 0; i<l; i++){
            if(vistos.has(nums[i])){
                return true;
            }else{
                vistos.add(nums[i]);
            }
        }
        return false
    }
}
