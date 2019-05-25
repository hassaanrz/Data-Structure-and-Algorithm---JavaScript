class Node {
  constructor(value) {
    this.data = value,
    this.prev = null,
    this.next = null
  }
}

class doublyLinkedList {
  constructor(value) {
    this.head = {
      data: value,
      prev: null,
      next: null 
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
    return (this);
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length ++;
    return (this);
  }

  printList() {
    let list = [];
    let currentNode = this.head;
    while(currentNode != null) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return (list);
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head; 
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return (currentNode);
  }

  insert(index, value) {
    if(index==0) {
      return this.prepend(value);
    }
    if (index >=this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length ++;
    return (this);
  }

  remove(index) {
    if(index == 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length --;
      return (this);
    } if(index >= this.length - 1) {
      this.tail.prev.next = null;
      this.length --;
      return (this); 
    }
    const leader = this.traverseToIndex(index - 1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode.next;
    unWantedNode.next.prev = leader;
    this.length --;
    return (this);
  }
}

const myDoublyLinkedList = new doublyLinkedList(10);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(16);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.insert(3, 88);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.remove(0);
console.log(myDoublyLinkedList.printList(), myDoublyLinkedList.length);