class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let fila_inferior = 0;
        let fila_superior = matrix.length-1;
            
        while(fila_inferior<= fila_superior){
            const fila_media = Math.floor((fila_superior + fila_inferior) / 2);
            let izq = 0;
            let der  =  matrix[fila_media].length -1;
            if(matrix[fila_media][izq]<=target && target<=matrix[fila_media][der]){
                while (izq <= der) {
                    const medio = Math.floor((izq + der) / 2);
                    if (matrix[fila_media][medio] === target) {
                        return true;
                    } else if (matrix[fila_media][medio] < target) {
                        izq = medio + 1;
                    } else {
                        der = medio - 1; 
                    }
                }
                return false;
            }else if(matrix[fila_media][izq]<target){
                fila_inferior = fila_media +1;
            }else{
                fila_superior = fila_media -1;
            }
        }
        return false;
    }
}
