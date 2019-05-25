class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class queuesUsingLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return (this.first);
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length ++;
      return (this);
    }
    this.last.next = newNode;
    this.last = newNode; 
    this.length ++;
    return (this); 
  }

  dequeue() {
    if(!this.first) {
      return null;
    }
    if(this.first === this.last) {
      this.last = null;
    }
    const dequeueItem = this.first.data;
    this.first = this.first.next;
    this.length --;
    return (dequeueItem);
  }
}

const myQueues = new queuesUsingLinkedList();
myQueues.enqueue('Joy');
myQueues.enqueue('Matt');
myQueues.enqueue('Pavel');
myQueues.enqueue('Samir');
//console.log(myQueues.peek());
console.log(myQueues);
console.log(myQueues.dequeue());
console.log(myQueues);
console.log(myQueues.dequeue());
console.log(myQueues);
console.log(myQueues.dequeue());
console.log(myQueues);
console.log(myQueues.dequeue());
console.log(myQueues);

