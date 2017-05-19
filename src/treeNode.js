export default class Treenode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  getData(){
    return this.value
  }

  getLeft(){
    return this.left
  }

  setLeft(node){
    this.left = node
    return this
  }

  getRight(){
    return this.right
  }

  setRight(node){
    this.right = node
    return this
  }
}
