import TreeNode from '../src/treeNode'

export default class BinarySearchTree {
  constructor(){
    this._root = null;
    this._size = 0;
  }

  insert(value) {
    let treeNode = new TreeNode({data: value})
    let currentNode
    this._size++

    if(this._root === null) {
      this._root = treeNode
    } else {
      currentNode = this._root
      while(true) {
        if(currentNode.data > value) {
          if (currentNode.left === null) {
            currentNode.left = treeNode
            break
          } else {
            currentNode = currentNode.left
          }
        }

        if(currentNode.data <= value) {
          if (currentNode.right === null) {
            currentNode.right = treeNode
            break
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }

  search(value){
    if (this._root === null){
      throw new Error ('There are no nodes in this tree.')
    }
    let currentNode = this._root
    let found = false
    while (!found && currentNode) {
      if( value < currentNode.data ) {
        currentNode = currentNode.left
      } else if( value > currentNode.data ) {
        currentNode = currentNode.right
      } else {
        found = true
        return currentNode
      }
    }
    return null
  }

  remove(value){
    let found = false
    let parent = null
    let currentNode = this._root
    let leftDiff = 0
    let rightDiff = 0

    while(!found && currentNode){
      if (value < currentNode.data){
        parent = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.data){
        parent = currentNode
        currentNode = currentNode.right
      } else {
        found = true
      }
    }

    if (found){
      if (currentNode === this._root){
        if (currentNode.right === null) {
          this._root = currentNode.left

        } else {
          this._root = currentNode.right
          parent = this._root
          if (parent.left !== null) {
            while ( parent.left !== null ) {
              parent = parent.left
            }
          }
          parent.left = currentNode.left
        }
      } else {
        if (currentNode.left !== null && currentNode.right !== null){
          leftDiff = Math.abs(currentNode.left.data - parent.data) // figure out which is farther from parent to determine which should be the new top
          rightDiff = Math.abs(currentNode.right.data - parent.data)
        }
        if (currentNode.left === null || rightDiff > leftDiff) {
          if (value < parent.data){
            parent.left = currentNode.right
          } else {
            parent.right = currentNode.right
          }
          parent = currentNode.right
          while (parent.left) {
            parent = parent.left
          }
          parent.left = currentNode.left
        } else {
          if (value > parent.data) {
            parent.right = currentNode.left
          } else {
            parent.left = currentNode.left
          }
          parent = currentNode.left
          while (parent.right) {
            parent = parent.right
          }
          parent.right = currentNode.right
        }
      }
      currentNode = null
    }
    this._size--
  }

  traverse(cb){
    if (this._root === null){
      throw new Error ('There are no nodes in this tree.')
    }

    let inOrder = (node) => {
      if(node !== null){
        // Left subtree
        if (node.left !== null){
          inOrder(node.left)
        }
        // Callback
        cb.call(this, node)

        // Right subtree
        if(node.right !== null){
          inOrder(node.right)
        }
      }
    }

    inOrder(this._root)
  }

  count(){
    return this._size
  }

  size(){
    var length = 0
    this.traverse(function(node2){
        length++;
    })
    return length;
  }
}
