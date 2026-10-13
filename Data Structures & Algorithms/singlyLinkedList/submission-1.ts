class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
      this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let actual = this.head;
        let i = 0;
        while (actual != null){
            if(i === index){
                return  actual.val;
            }
            i++;
            actual = actual.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const nuevo = new ListNode(val);
        nuevo.next = this.head;
        this.head = nuevo;
    }

    
    insertTail(val: number): void {
        const nuevo = new ListNode(val);
        let actual = this.head;
        if(actual != null){
            while (actual.next !== null) {
                actual = actual.next;
            }
            actual.next = nuevo;
        }else{
            this.head = nuevo;
        }
    }

    
    remove(index: number): boolean {
        let actual = this.head;
        let anterior = null;
        let i = 0;
        while (actual != null){
            if(i === index){
                if(index === 0){
                    this.head = actual.next;
                    return true;
                }
                else{
                    anterior.next = actual.next;
                    return true;
                }
            }
            i++;
            anterior = actual;
            actual = actual.next;
            
        }
        return false;
    }

    getValues(): number[] {
        let actual = this.head;
        let values : number[] = [];
        while (actual != null){
            values.push(actual.val);
            actual = actual.next;
        }
        return values;  
    }
}
