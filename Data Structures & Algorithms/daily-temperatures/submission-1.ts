class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const resultado: number[] = new Array(n).fill(0);
        const pila =[];
        for(let i = 0;i<n;i++){
            while(pila.length > 0 && temperatures[i] > temperatures[pila[pila.length - 1]]){
                const dia = pila.pop()!;      
                resultado[dia] = i - dia;
            }
        pila.push(i); 
        }
        return resultado;
    }
}
