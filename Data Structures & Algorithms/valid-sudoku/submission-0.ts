class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const filas = Array.from({ length: 9 }, () => new Set<string>());
        const columnas = Array.from({ length: 9 }, () => new Set<string>());
        const cajas = Array.from({ length: 9 }, () => new Set<string>());
        for (let fila = 0; fila < 9; fila++) {
            for (let col = 0; col < 9; col++) {
                const valor = board[fila][col];
                if (valor === ".") continue;
                const caja = Math.floor(fila / 3) * 3 + Math.floor(col /3);  
                if(filas[fila].has(valor)||columnas[col].has(valor)||cajas[caja].has(valor)){
                return false;
                }
                filas[fila].add(valor);
                columnas[col].add(valor);
                cajas[caja].add(valor)
            }
        }
        return true;

    }
    
}
