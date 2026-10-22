class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let max = Math.max(...piles);
        let min = 1;
        let resultado = Infinity;
        const suma = piles.reduce((acumulador, actual) => acumulador + actual, 0);
        while(min<=max){
            const media = Math.floor((max +min) / 2);
            if(media * h < suma ){
                min = media +1;
            }else{
                let horas = 0;
                for (const pila of piles) {
                    horas += Math.ceil(pila / media);
                }
                if (horas <= h) {
                    resultado = Math.min(resultado, media);
                    max = media - 1;
                } else {
                    min = media + 1;
                }
            }
        }
        return resultado;
    }
}
