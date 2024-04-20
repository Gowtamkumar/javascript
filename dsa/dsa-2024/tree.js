//binary tree datastructure

// binary tree children 2 tar basi hoy na

// 1. full binary tree
// full binary tree holo jar children 2 ta kore thakbe seta full binary tree bole
class CreateNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  create_node(value) {
    const newData = new CreateNode(value);
    if (!this.root) {
      this.root = newData;
      return newData
    }
  }

  add_left_child(node, child) {
    console.log(node);
    node.left = child;
  }

  add_right_child(node, child) {
    node.right = child;
  }
}

const results = new BinaryTree();
const newrr = results.create_node(3);
console.log("🚀 ~ newrr:", newrr)

// console.log("🚀 ~ results:", results);
// results.add_left_child(results.root, 20);
// console.log("🚀 ~ results:", results);
// results.add_right_child(results.root, 300);
// console.log("🚀 ~ results:", results);

// results.add_left_child(results.left, 50);
// console.log("🚀 ~ results:", results);

// 1. complete binary tree

// binary tree traversal
// 1.preorder traversal
// 1.postorder traversal
// 1.inorder traversal
