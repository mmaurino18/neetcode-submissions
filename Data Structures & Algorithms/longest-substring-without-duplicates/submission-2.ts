class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const ventana = new Set<string>();
        let izq = 0;
        let mejor = 0;

        for (let der = 0; der < s.length; der++) {
            const c = s[der];
            while (ventana.has(c)) {
                ventana.delete(s[izq]);
                izq++;
            }
            ventana.add(c);
            mejor = Math.max(mejor, ventana.size);
        }

        return mejor;
    }
}
