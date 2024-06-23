class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      this.size++;
    } else {
      this.insertChild(this.root, newNode);
    }
  }

  insertChild(node, newNode) {
    if (newNode.value >= node.value) {
      if (node.right === null) {
        node.right = newNode;
        this.size++;
      } else {
        this.insertChild(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
        this.size++;
      } else {
        this.insertChild(node.left, newNode);
      }
    }
  }
  preOrderTraversal(root) {
    if (root != null) {
      console.log("left", root.value);
      this.preOrderTraversal(root.left);
      this.preOrderTraversal(root.right);
    }
  }
  postOrderTraversal(root) {
    if (root.left != null) {
      this.postOrderTraversal(root.left);
    }
    if (root.right != null) {
      this.postOrderTraversal(root.right);
      console.log(root.value);
    }
    console.log(root.value);
  }
}

const result = new BinaryTree();
result.insert(10);
result.insert(19);
result.insert(11);
result.insert(20);
result.insert(1);
result.insert(3);
result.insert(2);

result.preOrderTraversal(result.root);
console.log("🚀 ~ result:", result);
result.postOrderTraversal(result.root);
