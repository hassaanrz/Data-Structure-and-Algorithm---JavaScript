class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      data: value,
      next: null
    },
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
    return (this);
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head= newNode;
    this.length ++;
    return (this);
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !=null) {
      array.push(currentNode.data);
      currentNode=currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next; 
      counter ++;
    }
    return currentNode;
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
    newNode.next=leader.next;
    leader.next = newNode;
    this.length ++;
    return this.printList();
  }

  remove(index) {
    if(index == 0) {
      this.head = this.head.next;
      this.length --;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const unWantedNode = leader.next; 
    leader.next = unWantedNode.next;
    this.length --;
    return this.printList();
  }

  reverse() {
    if(!this.head.next) {
      return (this.head);
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return (this);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2,88));
console.log(myLinkedList.length);
console.log(myLinkedList.remove(0));
console.log(myLinkedList.reverse());
