class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const resultado: number[] = [];

        // Primera ventana: índices 0 a k-1
        let max = Math.max(...nums.slice(0, k));
        let maxIdx = nums.lastIndexOf(max, k - 1);
        resultado.push(max);

        for (let der = k; der < nums.length; der++) {
            const izq = der - k + 1;   // inicio de la ventana nueva

            if (nums[der] >= max) {
                // El nuevo es el máximo (o lo iguala y dura más)
                max = nums[der];
                maxIdx = der;
            } else if (maxIdx < izq) {
                // El máximo se salió de la ventana: recalcular
                max = Math.max(...nums.slice(izq, der + 1));
                maxIdx = nums.lastIndexOf(max, der);
            }
            // Si no: el máximo sigue adentro y sigue siendo el mayor

            resultado.push(max);
        }

        return resultado;
    }
}