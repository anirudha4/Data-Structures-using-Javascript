class Stack {
    constructor() {
        this.top = -1;
        this.stack = [];
        this.size = 0;
    }

    // check if stack is empty
    isEmpty() {
        if(this.top == -1) {
            return true;
        }
        return false;
    }

    // push data to top of stack
    push(data) {
        this.top += 1;
        this.stack[this.top] = data;
        this.size += 1;
        return `${data} added onto the stack`;
    }

    // push data from top of stack
    pop() {
        if(!this.isEmpty()) {
            const temp = this.stack[this.top];
            this.stack.length = this.top;
            this.size--;
            this.top--;
            return `${temp} popped from top of the stack`;
        }
        else {
            return "UnderFlow Condition - Cannot pop if stack empty.";
        }
    }
    
    // get the top element from stack
    peek() {
        if(this.isEmpty()) {
            return "Stack Empty"
        }
        else {
            return `${this.stack[this.top]} is the top most element of stack`;
        }
    }

    // print the stack
    displayStack() {
        this.stack.forEach(element => {
            console.log(`Data -> ${element}`);
        })
    }
}

const s = new Stack()
s.isEmpty();
s.push(1);
s.push(2);
s.push(3);
s.pop();    // 3
s.peek();   // 2
s.displayStack(); // Data -> 1 ....

