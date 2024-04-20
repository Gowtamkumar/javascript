//binary tree datastructure

// binary tree children 2 tar basi hoy na

// 1. full binary tree
// full binary tree holo jar children 2 ta kore thakbe seta full binary tree bole
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySeaerchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

const results = new BinarySeaerchTree();

results.insert(10);
results.insert(30);
results.insert(30);
results.insert(5);

console.log("🚀 ~ results:", results);

// binary tree traversal
// 1.preorder traversal
// 1.postorder traversal
// 1.inorder traversal
