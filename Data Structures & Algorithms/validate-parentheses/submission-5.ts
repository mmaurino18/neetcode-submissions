class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pareja = new Map([[")", "("], ["]", "["], ["}", "{"]]);
        const pila: string[] = [];
        for (const c of s) {
            if (pareja.has(c)) {
                if (pila.length === 0 || pila[pila.length - 1] !== pareja.get(c)) {
                    return false;
                }
                pila.pop();
            } else {
                pila.push(c);
            }
        }

        return pila.length === 0;
    }
}
