class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root =null;
  }

  insert(value) {
    if(!this.root) {
      this.root = new Node(value);
      return (this);
    }
    let current = this.root;
    let parent = null;
    while(current !== null) {
      parent = current;
      if(current.data > value)
        current = current.left;
      else if(current.data < value)
        current = current.right;
    }

    if(parent.data > value)
      parent.left = new Node(value);
    else if(parent.data < value)
      parent.right = new Node(value);
    return (this);
  }

  search(value) {
    if(!this.root)
      return false;
    let current = this.root;
    while(current) {
      if(current.data > value) {
        current = current.left;
      } else if(current.data < value) {
        current = current.right;
      } else if(current.data === value) {
        return current;
      }
    }
    return false;
  }

  remove(value) {
    if(!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode !== null) {
      if(currentNode.data > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(currentNode.data < value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if(currentNode.data === value){
        /****** 1. Node has no child ******/
        if(currentNode.left === null && currentNode.right === null) {
          if(!parentNode) {
            this.root = null;
          } else {
            if(currentNode === parentNode.left) 
              parentNode.left = null;  
            else 
              parentNode.right = null; 
          }
          return (this);
        }
        /****** 2. Node has both child ******/
        else if(currentNode.left !==null && currentNode.right !=null) {
          let successor = currentNode.right;
          while(successor.left !== null) {
            successor = successor.left;
          }
          let data = successor.data;
          this.remove(successor.data);
          currentNode.data = data;
          return (this);
        }
        /****** 3. Node has one child ******/
        else {
          const childNode = (currentNode.left !== null) ? currentNode.left : currentNode.right ;
          if(!parentNode) {
            this.root = childNode;
          } else {
            if(currentNode == parentNode.left)
              parentNode.left = childNode;
            else
              parentNode.right = childNode;
          }
          return (this);
        }
      }
    }
    return (false);
  }
}

const myBST =new BST();
// myBST.insert(30);
// myBST.insert(26);
// myBST.insert(35);
// myBST.insert(32);
// myBST.insert(37);
myBST.insert(6);
myBST.insert(2);
myBST.insert(1);
myBST.insert(4);
myBST.insert(11);
myBST.insert(15);
myBST.insert(17);
console.log(JSON.stringify(traverse(myBST.root)));
// myBST.insert(4);
// myBST.insert(6);
// myBST.insert(20);
// myBST.insert(170);
// myBST.insert(15);
// myBST.insert(1);
// console.log(myBST.search(4));
myBST.remove(6);
console.log(JSON.stringify(traverse(myBST.root)));
// console.log(JSON.stringify(traverse(myBST.root)));

function traverse(node) {
  const tree = { data: node.data };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
