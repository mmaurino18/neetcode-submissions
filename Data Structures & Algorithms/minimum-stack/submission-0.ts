class MinStack {
    private stack: number[];
    private min_stack:number[];
    constructor() {
        this.stack = [];
        this.min_stack = [];
    }
    push(val: number): void {
        this.stack.push(val);
        let l = this.min_stack.length;
        if(l > 0){
            this.min_stack.push(Math.min(this.min_stack[l-1],val));
        }else{
            this.min_stack.push(val);
        }
    }
    pop(): void {
        this.stack.pop();
        this.min_stack.pop();
    }
    top(): number {
        let l = this.min_stack.length;
        return this.stack[l-1];
    }
    getMin(): number {
        let l = this.min_stack.length;
        if(l > 0){
            return this.min_stack[l-1];
        }else{
            return null;
        }
    }
}
