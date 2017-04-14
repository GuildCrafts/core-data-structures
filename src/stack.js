export default class Stack {

  constructor() {
    this._size = 0
    this.container = []
  }

  push(data) {
    this.container[this._size++] = data
  }

  pop() {
    if(this._size !== 0){
      this.container.slice(this._size--)
    }
    else{
      return null
    }
  }

  peek() {
    if (this._size !== 0) {
      return this.container[this._size - 1]
    }
    return null
  }

  isEmpty() {
    return this._size === 0 ? true : false
  }

  length() {
    return this._size + 1
  }
}
