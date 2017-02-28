class Node {
  constructor(key, value) {
    this.key = value
  }
}

export default class PQueue {
  constructor( things, stuff) {
  this.front = new Node(things, stuff)
  }

  enqueue(thing, priority ) {
    let node = new Node( thing, priority )
  }

  front() {


  }

  dequeue(){

  }



  back() {

  }

  isEmpty() {

  }

  length() {

  }

}
