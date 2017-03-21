export default class PQueue {
  constructor( ) {
    this.line = []
    this.length = 0
  }

  enqueue(priority, value ) {

    this.line.push({ priority, value })
    this.length += 1
    this.line = this.line.sort((a,b) => a.priority - b.priority)
  }

  front() {
    return this.line[0]
  }

  dequeue(){
    this.length - 1
    return this.line.shift
  }

  back() {
    return this.line[this.line.length - 1]
  }

  isEmpty() {
    return this.length === 0
  }

  length() {
    return this.length
  }
}
