class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded:string = "";
        for(const palabra of strs){
            let l = palabra.length;
            encoded += + l + "#" + palabra;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
   decode(str: string): string[] {
        const resultado: string[] = [];
        let i = 0;

        while (i < str.length) {
            const position = str.indexOf("#", i);
            const tamanio = Number(str.slice(i, position));
            const inicio = position + 1;
            const fin = inicio + tamanio;

            resultado.push(str.slice(inicio, fin));
            i = fin;
        }

        return resultado;
    }
}
