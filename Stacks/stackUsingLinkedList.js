class Node {
  constructor(value){
    this.data = value,
    this.next = null
  }
}
class stackUsingLinkedList {
  constructor(value) {
    this.top= null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return (this.top);
  }

  push(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      newNode.next = holdingPointer;
    }
    this.length ++;
    return (this);
  }

  pop() {
    if(!this.top) {
      return null;
    }
    if(this.top == this.bottom) {
      this.bottom = null;
    }
    const poppedItem = this.top.data;
    this.top = this.top.next;
    this.length --;
    return (poppedItem);
  }

}

const myStack = new stackUsingLinkedList();
console.log(myStack.push(10));
console.log(myStack.push(20));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());