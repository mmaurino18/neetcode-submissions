class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let izq = 0;
        const mapa_s1 = new Map<string, number>();
        const mapa_s2 = new Map<string, number>();
        for(let i = 0; i<s1.length;i++){
            mapa_s1.set(s1[i], (mapa_s1.get(s1[i]) ?? 0) + 1);
        }
        for(let der = 0; der < s2.length; der++){
            mapa_s2.set(s2[der], (mapa_s2.get(s2[der]) ?? 0) + 1);
            while(mapa_s2.get(s2[der]) > (mapa_s1.get(s2[der]) ?? 0)){
                mapa_s2.set(s2[izq], mapa_s2.get(s2[izq])! - 1);
                izq++;
            }
            if((der-izq) + 1 === s1.length){
                return true;
            }
        }
        return false;
    }
}
