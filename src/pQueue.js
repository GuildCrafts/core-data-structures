
export default class pQueue {
  constructor(initialValues=[]) {
    this.top = 0
    this.elements = []

    initialValues.forEach(
      value => this.enqueue( value.element, value.priority
    ))
    // this.elements = initialValues
    // this.top = initialValues.length
  }

  isEmpty() {
    return this.top === 0 ? true : false
  }

  length() {
    return this.top
  }

  enqueue(value, priority=0) {
    this.elements.push({value, priority})
    this.top++

    this.elements.sort( ( a, b ) => a.priority - b.priority )
  }

  dequeue() {
    this.top--
    return !this.isEmpty() ? this.elements.pop() : null;
  }

  front(){
    return !this.isEmpty() ? this.elements[this.top - 1].value : null;
  }

  topPriority() {
    return this.isEmpty() ? undefined : this.elements[ this.top - 1 ].priority
  }

  back() {
    return this.isEmpty() ? null : this.elements[ 0 ].value
  }

}
