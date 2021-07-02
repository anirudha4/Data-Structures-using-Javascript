class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor (head = null) {
        this.head = head;
        this.size = 0;
    }

    // return head of the linkedlist
    getHead() {
        return this.head;
    }

    // return size of linkedList
    getLength() {
        return this.size;
    }

    // return stats
    getStats() {
        return {
            head: this.head,
            size: this.size
        }
    }

    // insert at head
    insertFirst(data) {
        const temp = new Node(data);
        this.size++;
        if(this.head == null) {
            this.head = temp;
            return;
        }
        else {
            const current = this.head;
            temp.next = current;
            this.head = temp;
            return;
        }
    }

    // insert at first position
    insertAtLast(data) {
        const current = new Node(data);
        if(this.head == null) {
            this.head = current;
            this.size++;
            return;
        }
        let temp = this.head;
        this.size++;
        while(temp.next != null) {
            temp = temp.next;
        }
        temp.next = current;
        return;
    }

    // insert at specific index
    insertAt(pos, data) {
        if(pos > 0 && pos > this.size) {
            return "Invalid Position";
        }
        if(pos < 0) {
            return "Invalid Position";
        } 
        if (pos == 0) {
            this.insertFirst(data);
            this.size++;
            return;
        }
        let count = 0;
        const current = new Node(data);
        let prev = null;
        let temp = this.head;
        while(count < pos) {
            prev = temp;
            temp = temp.next;
            count++;
        }
        prev.next = current;
        current.next = temp;
        this.size++;
        return;
    }
    
    // remove from start
    removeFromStart() {
        if(this.head == null) {
            return "LinkedList is Empty";
        }
        let temp = this.head;
        this.head = temp.next;
        this.size--;
        return this.head;
    }

    // remove from last 
    removeFromEnd() {
        let temp = this.head;
        let prev = null;
        if(this.head == null) return "LinkedList is Empty";
        if(this.size == 1) {
            this.head = null;
        }
        while(temp.next != null) {
            prev = temp;
            temp = temp.next
        }
        prev.next = null;
        this.size--;
        return temp.data;
    }

    // remove from particular index
    removeFromIndex(pos) {
        if(pos > 0 && pos > this.size) {
            return "Invalid Position"
        }
        if(pos < 0) {
            return "Invalid Position"
        }
        if(pos == 0) {
            this.removeFromStart()
            this.size--;
            return
        }
        // 100 - 200 - 300
        let current = this.head;
        let prev = null
        let count = 0;
        while(count < pos) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = current.next;
        this.size--;
        return;
    }

    // display linked list
    displayLinkedList() {
        if(this.head == null) {
            return "Linked List is Empty!";
        }
        else {
            let current = this.head;
            while(current != null) {
                console.log(`Data -> ${current.data}`);
                current = current.next;
            }
        }
    }
}


const ll = new LinkedList();
ll.insertFirst(100);
ll.insertAtLast(50);
ll.insertAt(0, 10);
ll.insertFirst(300)
ll.insertAtLast(500)
ll.removeFromIndex(1)
ll.removeFromStart();
ll.removeFromEnd();
ll.displayLinkedList();

console.log(ll.getHead());
console.log(ll.getLength());
console.log(ll.getStats());