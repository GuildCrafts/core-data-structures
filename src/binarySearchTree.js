export default class BinarySearchTree{
  constructor(){
    this.head = null
  }



  insert(data){
    if(this.head === null){
      this.head = new Node(data)
      return
    }

    this.locateInsert(data, this.head)

    console.log('insert')
    console.log('head' + this.head)
  }

  locateInsert(data, node){
    if(data > node.data && !!node.right){
      this.locateSearch(data, node.right)
    }
    else if(data <= node.data && !!node.left){
      this.locateSearch(data, node.left)
    }
    if(data > node.data){
      node.setRight(data)
    }
    if(data <= node.data){
      node.setLeft(data)
    }
  }

  search(data){
    console.log('search')
    return this.locateSearch(data, this.head)
  }

  locateSearch(data, node){
    if(data > node.getData()){
      return this.locateSearch(data, node.getRight())
    }
    if(data < node.getData()){
      return this.locateSearch(data, node.getLeft())
    }
    if(data === node.getData()){
      return node
    }
    console.log('locateSearch ' + node)
  }

}

class Node{
  contructor(data){
    this.data = data
    this.left = null
    this.right = null
  }

  getData(){
    return this.data
  }

  getLeft(){
    return this.left
  }

  getRight(){
    return this.right
  }

  setLeft(data){
    this.left = new Node(data)
  }

  setRight(data){
    this.right = new Node(data)
  }
}
