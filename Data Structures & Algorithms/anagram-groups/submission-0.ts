class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const grupos = new Map<string, string[]>();

        for (const palabra of strs) {
            const firma = palabra.split("").sort().join("");
            if (!grupos.has(firma)) {
                grupos.set(firma, []);
            }
            grupos.get(firma)!.push(palabra);
        }
            return Array.from(grupos.values());
    }
}
