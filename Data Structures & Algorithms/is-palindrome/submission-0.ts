class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    
    isPalindrome(s: string): boolean {
        const limpio = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        const invertido = limpio.split("").reverse().join("");
        return limpio === invertido;
    }   
}
