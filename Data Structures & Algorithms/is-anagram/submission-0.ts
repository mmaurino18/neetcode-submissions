class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const bolsa = new Map<string, number>();
        for (const letra of s) {
            bolsa.set(letra, (bolsa.get(letra) ?? 0) + 1);
        }
        for (const letra of t) {
            const cantidad = bolsa.get(letra) ?? 0;
            if (cantidad === 0) {
                return false;
            }
            bolsa.set(letra, cantidad - 1);
        }
        return true;
    }
}
