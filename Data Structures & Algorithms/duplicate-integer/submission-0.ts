class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let l = nums.length;
        for(let i = 0; i<l; i++){
            for(let j = i+1; j<l; j++){
                if(nums[i]===nums[j]){
                    return true;
                }
        
        }
        }
        return false
    }
}
