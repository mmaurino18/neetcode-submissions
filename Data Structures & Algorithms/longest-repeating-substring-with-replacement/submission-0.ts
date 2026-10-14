class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let conteo = new Map<string,number>();
        let max_frec = 0;
        let izq = 0;
        let mejor = 0;
        for (let der = 0; der < s.length; der++) {
            conteo.set(s[der], (conteo.get(s[der]) ?? 0) + 1);
            max_frec = Math.max(max_frec, conteo.get(s[der])!);
            while ( ((der-izq +1 ) - max_frec) > k) {
                conteo.set(s[izq], conteo.get(s[izq])! - 1);
                izq++;
            }
            mejor = Math.max(mejor, der - izq + 1);
        }
        return mejor;
    }
}
