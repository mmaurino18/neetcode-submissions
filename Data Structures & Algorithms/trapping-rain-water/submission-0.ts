class Solution {
   trap(height: number[]): number {
    const n = height.length;
    if (n === 0) return 0;

    // 1. Máximo desde la izquierda hasta i (incluido)
    const maxIzq: number[] = new Array(n);
    maxIzq[0] = height[0];
    for (let i = 1; i < n; i++) {
        maxIzq[i] = Math.max(maxIzq[i - 1], height[i]);
    }

    // 2. Máximo desde la derecha hasta i (incluido)
    const maxDer: number[] = new Array(n);
    maxDer[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxDer[i] = Math.max(maxDer[i + 1], height[i]);
    }

    // 3. Agua sobre cada columna
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += Math.min(maxIzq[i], maxDer[i]) - height[i];
    }

    return total;
}
}
