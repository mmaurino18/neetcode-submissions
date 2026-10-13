class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const resultado: number[] = new Array(n).fill(1);

        // Pasada 1: de izquierda a derecha
        let izquierda = 1;
        for (let i = 0; i < n; i++) {
            resultado[i] = izquierda;
            izquierda *= nums[i];
        }

        // Pasada 2: de derecha a izquierda
        let derecha = 1;
        for (let i = n - 1; i >= 0; i--) {
            resultado[i] *=derecha;
            derecha *= nums[i]
        }

        return resultado;
    }
}
