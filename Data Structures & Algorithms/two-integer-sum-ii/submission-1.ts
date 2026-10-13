class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let izq = 0;
        let der = numbers.length - 1;

        while (izq < der) {
            const suma = numbers[izq] + numbers[der];
            if(suma===target){
                return [izq+1,der+1];
            }if(suma>target){
                der--;
            }else{
                izq++;
            }
        }

        return [];
    }
}
