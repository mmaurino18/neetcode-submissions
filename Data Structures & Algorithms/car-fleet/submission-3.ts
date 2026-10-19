class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const autos = position.map((pos, i) => [pos, speed[i]]);
        autos.sort((a, b) => b[0] - a[0]);

        let flotas = 0;
        let tiempo_adelante = 0;

        for (const [pos, vel] of autos) {
            const tiempo = (target - pos) / vel;
            if (tiempo > tiempo_adelante) {
                flotas++;
                tiempo_adelante = tiempo;
            }
        }

        return flotas;
    }
}
