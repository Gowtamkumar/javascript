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

  // check root
  isEmpty() {
    return this.root === null;
  }

  // insert tree
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

  // Binary Seaerch Tree
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // binary tree preorder traversal

  preOrder(root) {
    console.log(root.value);
    if (root.left !== null) {
      this.preOrder(root.left);
    }
    if (root.right !== null) {
      this.preOrder(root.right);
    }
  }

  // binary tree postorder traversal
  postOrder(root) {
    if (root.left !== null) {
      this.postOrder(root.left);
    }
    if (root.right !== null) {
      this.postOrder(root.right);
    }
    console.log(root.value);
  }

  // inorder tree traversal

  inOrder(root) {
    if (root.left !== null) {
      this.inOrder(root.left);
    }

    console.log("inorder tree", root.value);
    
    if (root.right !== null) {
      this.inOrder(root.right);
    }
  }
}

const res = new BinarySeaerchTree();
console.log("🚀 ~ res:", res)

res.insert(2);
res.insert(7);
res.insert(9);
res.insert(1);
res.insert(6);
res.insert(8);
res.insert(5);
res.insert(10);
res.insert(13);
res.insert(4);

console.log("🚀 ~ res:", res.inOrder(res.root));
