export default class Node {
  constructor( data, priority ){
    this.data = data
    this.priority = priority
    this.next = null
    this.prev = null
  }
}
