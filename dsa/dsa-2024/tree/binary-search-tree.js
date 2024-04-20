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

  search(root, value){
    if(!root){
      return false
    }else{
      if(root.value === value){
        return true
      }else if(root.value > value){
       return this.search(root.left, value)
      }else{
       return this.search(root.right, value)
      }
    }
  }
}

const res = new BinarySeaerchTree();

res.insert(8);
res.insert(3);
res.insert(10);
res.insert(1);
res.insert(6);
res.insert(14);
res.insert(4);
res.insert(7);
res.insert(13);

console.log("🚀 ~ res:", res.search(res.root, 90));

// binary tree traversal
// 1.preorder traversal
// 1.postorder traversal
// 1.inorder traversal
