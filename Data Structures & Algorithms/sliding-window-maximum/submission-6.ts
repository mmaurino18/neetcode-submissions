class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const resultado: number[] = [];
        let max = Math.max(...nums.slice(0, k));
        let max_idx = nums.lastIndexOf(max, k - 1);
        resultado.push(max);

        for (let der = k; der < nums.length; der++) {
            const izq = der - k + 1; 
            if (nums[der] >= max) {

                max = nums[der];
                max_idx = der;
            } else if (max_idx < izq) {
                max = Math.max(...nums.slice(izq, der + 1));
                max_idx = nums.lastIndexOf(max, der);
            }
            // Si no: el máximo sigue adentro y sigue siendo el mayor

            resultado.push(max);
        }

        return resultado;
    }
}