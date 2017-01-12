import Node from './node'

export default class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    let cursor = this.head
    while( cursor.next ) { cursor = cursor.next }
    return cursor
  }

  contains( data ) {

  }

// context('find()', () => {
//     it('Returns the first node containing the provided data, or -1 if not found', () => {
//       const myLinkedList = new LinkedList()

//       myLinkedList.insert('sunshine')
//       myLinkedList.insert('rain')
//       myLinkedList.toString()
//       expect(myLinkedList.find('sunshine').data).to.equal('sunshine')
//       expect(myLinkedList.find('pain')).to.equal(-1)

  find( data ) {
    for(let cursor = this.head; cursor != null; cursor = cursor.next){
      if(cursor.data == data){
        return cursor
      }
    }
    return -1 
  }

  // adds to tail
  insert( data ) {
    //head is first node inserted
    const newNode = new Node( data )
    let cursor = this.head
    if(this.size === 0) {
      this.head = newNode
    } else {
      //keep traversiing untill cursor.next is null
      while( cursor.next ) { cursor = cursor.next }
      cursor.next = newNode
    }
    this.size++
  }
  // adds to head
  insertFirst( data ) {
    const newNode = new Node( data )
    if(this.size === 0 ) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.size++
  }
  // context('insertBefore()', () => {
  //   it('Inserts a node (with data "apples") before the first node containing "bananas"', () => {
  //     const myLinkedList = new LinkedList()

  //     myLinkedList.insert("bananas")
  //     myLinkedList.insertBefore("bananas", "apples")
  //     myLinkedList.toString()
  //     expect(myLinkedList.find('apples').next).to.deep.equal({
  //       data: "bananas", next: null
  //     })
  //   })
  // })
  insertBefore( frontData, newData ) {
    const frontNode = this.find( frontData )
    const newNode = new Node( newData )  //has our new data
    let beforeFN = this.head
    console.log(beforeFN)
    console.log(frontNode)
    while( beforeFN.next != null && beforeFN.next != frontNode ) {
      beforeFN = beforeFN.next
      console.log(beforeFN)
    }
    if(frontNode.data == this.head.data) { //reassigns head of the list to be the new node
      this.insertFirst(newData)
    } else {
      console.log(beforeFN)
      console.log(frontNode)
      newNode.next = frontNode
      beforeFN = newNode
    }
  }
      


  toString() {
    let linkedListString = 'HEAD--->'
    for(let cursor = this.head; cursor != null; cursor = cursor.next){
      linkedListString = linkedListString + `${cursor.data}--->`
    }
    console.log(linkedListString)
  }
}
