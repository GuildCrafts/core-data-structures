export default class Node {
  constructor(value) {
    this._value = value
    this._next = null
    this._prev = null
  }

  data = () => {
    return this._value
  }

  next = () => {
    return this._next
  }

  prev = () => {
    return this._prev
  }
}
