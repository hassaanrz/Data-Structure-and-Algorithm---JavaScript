class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      let currentNode = this.root,
        parentNode = null;
      while (currentNode !== null) {
        parentNode = currentNode;
        if (currentNode.data > data) {
          currentNode = currentNode.left;
        } else if (currentNode.data < data) {
          currentNode = currentNode.right;
        }
      }
      if (parentNode.data > data) {
        parentNode.left = node;
      } else if (parentNode.data < data) {
        parentNode.right = node;
      }
    }
    return this;
  }

  search(data) {
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      } else if (currentNode.data === data) {
        return currentNode;
      }
    }
    return false;
  }

  remove(data) {
    if (this.root === null) {
      return 'Tree is empty';
    } else {
      let currentNode = this.root,
        parentNode = null;
      while (currentNode !== null) {
        if (currentNode.data > data) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (currentNode.data < data) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.data === data) {

          // Node has no child

          if (currentNode.left === null && currentNode.right === null) {
            if (parentNode === null) {
              this.root = null;
            } else {
              if (parentNode.left === currentNode) {
                parentNode.left = null;
              } else if (parentNode.right === currentNode) {
                parentNode.right = null;
              }
            }
            return this;
          }

          // Node has either left or right child
          else if (currentNode.left === null || currentNode.right === null) {
            const childNode = (currentNode.left) ? currentNode.left : currentNode.right;
            if (parentNode === null) {
              this.root = childNode;
            } else {
              if (parentNode.left === currentNode) {
                parentNode.left = childNode;
              } else if (parentNode.right === currentNode) {
                parentNode.right = childNode;
              }
            }
            return this;
          }

          // Node has two childrens
          else if (currentNode.left !== null && currentNode.right !== null) {
            let successor = currentNode.right;
            while (successor.left !== null) {
              successor = successor.left;
            }

            let data = successor.data;
            this.remove(successor.data);
            currentNode.data = data;
            return this;
          }
        }
      }
      return 'Node to be deleted not found';
    }
  }

  bfs() {
    const queue = [],
      list = [];
    let currentNode = this.root;
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.data);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  bfsRecursive(queue, list) {
    if (queue.length < 1) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.data);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.bfsRecursive(queue, list);
  }

  preorder(root, list) {
    if (root) {
      list.push(root.data);
      this.preorder(root.left, list);
      this.preorder(root.right, list);
    }
    return list;
  }

  inorder(root, list) {
    if (root) {
      this.inorder(root.left, list);
      list.push(root.data);
      this.inorder(root.right, list);
    }
    return list;
  }

  postorder(root, list) {
    if (root) {
      this.postorder(root.left, list);
      this.postorder(root.right, list);
      list.push(root.data);
    }
    return list;
  }
}

const traverse = function(node) {
  const tree = {
    data: node.data
  };
  tree.left = (node.left === null) ? null : traverse(node.left);
  tree.right = (node.right === null) ? null : traverse(node.right);
  return tree;
};

const bst = new BST();
bst.insert(10);
bst.insert(7);
bst.insert(14);
bst.insert(20);
bst.insert(1);
bst.insert(8);
bst.insert(5);
bst.insert(13);
bst.insert(11);
console.log('Searching in BST:-', bst.search(1));
console.log('BFS:', bst.bfs());
console.log('BFS Recursive:', bst.bfsRecursive([bst.root], []));
console.log('Preorder:', bst.preorder(bst.root, []));
console.log('Inorder:', bst.inorder(bst.root, []));
console.log('Postorder:', bst.postorder(bst.root, []));
console.log(JSON.stringify(traverse(bst.root)));
bst.remove(10);
console.log('\nAfter deletion\n');
console.log(JSON.stringify(traverse(bst.root)));
