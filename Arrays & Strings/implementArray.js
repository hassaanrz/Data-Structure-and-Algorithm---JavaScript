class Array {
  constructor() {
    this.array = {};
    this.length = 0;
  }
  push(item) {
    this.array[this.length] = item;
    this.length++;
  }
  pop() {
    let item = this.array[this.length - 1];
    delete this.array[this.length - 1];
    this.length--;
    return item;
  }
  traverse() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.array[i]);
    }
  }
  shiftLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    delete this.array[this.length - 1];
    this.length--;
  }
  delete(index) {
    if (this.array[index]) {
      let item = this.array[index];
      delete this.array[index];
      this.shiftLeft(index);
      return item;
    } else {
      console.log("Incorrect Index!");
      return;
    }
  }
  shiftRight(index) {
    for (let i = this.length - 1; i >= index; i--) {
      this.array[i + 1] = this.array[i];
    }
  }
  insert(index, item) {
    if (index < this.length) this.shiftRight(index);
    this.array[index] = item;
    this.length++;
  }
}

let obj1 = new Array();
obj1.push(1);
obj1.push(2);
obj1.push(3);

console.log(obj1);
//console.log(obj1.pop());
console.log(obj1.insert(2, 5));
console.log(obj1);
