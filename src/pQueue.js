class Node {
  constructor(key, value) {
    this.key = value
  }
}

export default class PQueue {
  constructor( things, stuff) {
  // make things and stuff a key value pair
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
