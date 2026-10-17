class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let resultado;
        if(tokens.length>1){
            let numeros = [];
            const operandos = new Set(["+","-","*","/"]);
            for(const token of tokens){
                if(operandos.has(token)){
                    let numero2 = numeros.pop();
                    let numero1 = numeros.pop();
                    resultado = operar(numero1,numero2, token);
                    numeros.push(resultado);
                }else{
                    numeros.push(Number(token));
                }
            }
            return resultado;
        }else{
            return Number(tokens[0]);
        }
    }
}
function operar(a: number, b: number, op: string): number {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return Math.trunc(a / b);
    }
    return 0;
}
