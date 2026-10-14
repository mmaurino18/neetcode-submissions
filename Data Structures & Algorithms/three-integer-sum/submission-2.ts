
class Solution {
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const resultado: number[][] = [];

        for (let i = 0; i < nums.length; i++) {
            // Duplicado 1: si el número fijo es igual al anterior, ya lo procesé
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            const pares = this.twoSum(nums, -nums[i], i + 1);
            for (const par of pares) {
                resultado.push([nums[i], ...par]);
            }
        }

        return resultado;
    }

    twoSum(nums: number[], target: number, inicio: number): number[][] {
        const pares: number[][] = [];
        let izq = inicio;
        let der = nums.length - 1;

        while (izq < der) {
            const suma = nums[izq] + nums[der];

            if (suma === target) {
                pares.push([nums[izq], nums[der]]);
                izq++;
                der--;

                // Duplicado 2: saltear valores iguales al par que acabo de guardar
                while (izq < der && nums[izq] === nums[izq - 1]) {
                    izq++;
                }
            } else if (suma > target) {
                der--;
            } else {
                izq++;
            }
        }

        return pares;
    }
}
