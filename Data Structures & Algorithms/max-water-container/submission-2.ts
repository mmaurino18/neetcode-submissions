class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    
    maxArea(heights:number[]):number{
        let izq = 0;
        let der = heights.length -1
        let mayor = 0;
        while(izq<der){
            let alto=Math.min(heights[izq],heights[der]);
            let ancho = der-izq;
            let area = ancho * alto;
            if(heights[izq]>heights[der]){
                der--;
            }else{
                izq++;
            }
            mayor = Math.max(mayor, area);
        }
        return mayor;
    }
}
