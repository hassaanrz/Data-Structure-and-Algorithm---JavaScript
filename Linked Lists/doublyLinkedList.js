class Node {
  constructor(data) {
    this.info = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.length++;
    } else {
      let start = this.head;
      while (start.next != null) {
        start = start.next;
      }

      start.next = node;
      node.prev = start;
      this.length++;
    }
    return this;
  }

  prepend(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.length++;
    } else {
      let start = this.head;
      node.next = start;
      start.prev = node;
      this.head = node;
      this.length++;
    }
    return this;
  }

  printList() {
    const arr = [];
    let start = this.head;
    while (start != null) {
      arr.push(start.info);
      start = start.next;
    }
    console.log(arr);
  }

  traverseToIndex(index) {
    let currentNode = this.head,
      i = 0;
    while (currentNode != null && index != i) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  insert(data, index) {
    if (index === 0) {
      this.prepend(data);
    } else if (index >= this.length) {
      this.append(data);
    } else {
      const node = new Node(data);
      let leader = this.traverseToIndex(index - 1);
      node.next = leader.next;
      node.prev = leader;
      leader.next = node;
      this.length++;
    }
    return this;
  }

  remove(index) {
    const start = this.head;
    if (start == null) {
      return null;
    } else if (start.next == null) {
      this.head == null;
      this.length--;
    } else if (index === 0) {
      this.head = start.next;
      start.next.prev = null;
      this.length--;
    } else if (index >= this.length - 1) {
      let leader = this.traverseToIndex(index - 1);
      leader.next = null;
      this.length--;
    } else {
      let leader = this.traverseToIndex(index - 1);
      let follower = leader.next;
      leader.next = follower.next;
      follower.next.prev = leader;
      this.length--;
    }
    return this;
  }

  reverse() {
    if (this.length < 2) {
      return this;
    }
    let current, prev;
    current = this.head;
    prev = null;
    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
}


const list = new LinkedList();
list.append(3);
list.append(4);
list.prepend(2);
list.prepend(1);
list.insert(5, 3);
list.printList();
list.remove(3);
list.printList();
list.reverse();
list.printList();
