class stackUsingArray {
  constructor() {
    this.array = [];
  }

  peek() {
    return (this.array[this.array.length - 1]);
  }

  push(value) {
    this.array.push(value);
    return (this);
  }

  pop() {
    const poppedItem = this.array.pop();
    return (poppedItem);
  }
}

const myStack = new stackUsingArray();
console.log(myStack.push(10));
console.log(myStack.push(20));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);