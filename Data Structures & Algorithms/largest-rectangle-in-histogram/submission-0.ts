class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const pila: number[] = [];
        let maxArea = 0;
        const n = heights.length;

        for (let i = 0; i <= n; i++) {
            const actual = i === n ? 0 : heights[i];
            while (pila.length > 0 && actual < heights[pila[pila.length - 1]]) {
                const altura = heights[pila.pop()!];
                const izq = pila.length === 0 ? -1 : pila[pila.length - 1];
                const ancho = i - izq - 1;
                maxArea = Math.max(maxArea, altura * ancho);
            }
            pila.push(i);
        }
        return maxArea;
    }
}
