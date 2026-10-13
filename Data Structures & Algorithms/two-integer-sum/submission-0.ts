class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let l = nums.length;
        for(let i = 0;i<l;i++){
            for(let j = i+1; j<l;j++){
                if(nums[i] + nums[j] === target){
                     let result:number[] = [i,j];
                     return result;
                }
            }
        }
    }
}
