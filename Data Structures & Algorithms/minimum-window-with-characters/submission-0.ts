class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let izq = 0;
        const mapa_s = new Map<string, number>();
        const mapa_t = new Map<string, number>();
        let inicio = 0;
        let mejor_largo = Infinity;
        for(let i = 0; i<t.length; i ++){ 
            mapa_t.set(t[i], (mapa_t.get(t[i]) ?? 0) +1);
        }
        for(let der = 0; der<s.length;der++){
            if(mapa_t.has(s[der])){
                mapa_s.set(s[der], (mapa_s.get(s[der]) ?? 0) +1 );
                while (this.cubre(mapa_s, mapa_t)) {
                    if (mapa_t.has(s[izq])) {
                        mapa_s.set(s[izq], mapa_s.get(s[izq])! - 1);
                    }
                    if (der - izq + 1 < mejor_largo) {
                        mejor_largo = der - izq + 1;
                        inicio = izq;
                    }
                    izq++;
                }
            }
        }
        return mejor_largo === Infinity ? "" : s.slice(inicio, inicio + mejor_largo);
        
    }
    cubre(a: Map<string, number>, b: Map<string, number>): boolean {
        if (a.size !== b.size) return false;

        for (const [clave, valor] of a) {
            if (b.get(clave) > valor) return false;
        }

        return true;
    }
}
