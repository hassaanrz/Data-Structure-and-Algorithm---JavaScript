class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    let current = this.root;
    let parent = null;
    while (current !== null) {
      parent = current;
      if (current.data > value) current = current.left;
      else if (current.data < value) current = current.right;
    }

    if (parent.data > value) parent.left = new Node(value);
    else if (parent.data < value) parent.right = new Node(value);
    return this;
  }

  search(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.data > value) {
        current = current.left;
      } else if (current.data < value) {
        current = current.right;
      } else if (current.data === value) {
        return current;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode !== null) {
      if (currentNode.data > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.data < value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.data === value) {
        /****** 1. Node has no child ******/
        if (currentNode.left === null && currentNode.right === null) {
          if (!parentNode) {
            this.root = null;
          } else {
            if (currentNode === parentNode.left) parentNode.left = null;
            else parentNode.right = null;
          }
          return this;
        } else if (currentNode.left !== null && currentNode.right != null) {
          /****** 2. Node has both child ******/
          let successor = currentNode.right;
          while (successor.left !== null) {
            successor = successor.left;
          }
          let data = successor.data;
          this.remove(successor.data);
          currentNode.data = data;
          return this;
        } else {
          /****** 3. Node has one child ******/
          const childNode =
            currentNode.left !== null ? currentNode.left : currentNode.right;
          if (!parentNode) {
            this.root = childNode;
          } else {
            if (currentNode == parentNode.left) parentNode.left = childNode;
            else parentNode.right = childNode;
          }
          return this;
        }
      }
    }
    return false;
  }

  BFS() {
    let currentNode = this.root;
    let queue = [],
      list = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.data);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return list;
  }
  BFSRecursive(queue, list) {
    if (queue.length < 1) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.data);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
    return this.BFSRecursive(queue, list);
  }

  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }

  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traversePreOrder(node, list) {
  if (node.data) {
    list.push(node.data);
  }
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  if (node.data) {
    list.push(node.data);
  }
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  if (node.data) {
    list.push(node.data);
  }
  return list;
}

const myBST = new BST();
myBST.insert(9);
myBST.insert(4);
myBST.insert(20);
myBST.insert(1);
myBST.insert(6);
myBST.insert(15);
myBST.insert(170);
// myBST.insert(26);
// myBST.insert(35);
// myBST.insert(32);
// myBST.insert(37);

//console.log(JSON.stringify(traverse(myBST.root)));
// myBST.insert(4);
// myBST.insert(6);
// myBST.insert(20);
// myBST.insert(170);
// myBST.insert(15);
// myBST.insert(1);
// console.log(myBST.search(4));
console.log(JSON.stringify(traverse(myBST.root)));
// console.log(JSON.stringify(traverse(myBST.root)));
console.log("BFS", myBST.BFS());
//console.log(myBST.BFSRecursive([myBST.root], []));
console.log("DFS Preorder", myBST.DFSPreOrder([myBST.root], []));
console.log("DFS Inorder", myBST.DFSInOrder([myBST.root], []));
console.log("DFS Postorder", myBST.DFSPostOrder([myBST.root], []));

function traverse(node) {
  const tree = { data: node.data };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// myBST.insert(6);
// myBST.insert(2);
// myBST.insert(1);
// myBST.insert(4);
// myBST.insert(11);
// myBST.insert(15);
// myBST.insert(17);
// myBST.remove(6);
