class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null
    }

    // check if stack is empty
    isEmpty() {
        if(this.top == null) {
            return true
        }
        return false;
    }

    // push element on top of the stack
    push(data) {
        const el = new Node(data);
        if(this.isEmpty()) {
            this.top = el
            return `${this.top.data} added on top of the stack`;
        }
        else {
            const temp = this.top;
            el.next = temp;
            this.top = el;
            return `${el.data} added on top of the stack`;
        }
    }

    // return the top of the stack
    peek() {
        if(this.isEmpty()) {
            return -1;
        }
        return this.top.data;
    }

    // pop or remove an element from top of the stack
    pop() {
        if(this.isEmpty()) {
            return `Underflow Condition Encountered!`
        }
        else {
            const temp = this.top;
            this.top = temp.next;
            return `${temp.data} is popped from the stack`;
        }
    }
}


const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.pop();    // 30
s.peek();   // 20
s.isEmpty();    // false
s.pop();    // 20
s.peek();   // 10
