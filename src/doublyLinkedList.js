import EnchantedNode from './enchantedNode'
import LinkedList from './linkedList'

export default class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
  }

  insert( info ) {
    const insertNode = new EnchantedNode( info )

    switch ( this.length ) {
      case 0:
        this.head = insertNode
        this.tail = this.head
        break
      case 1:
        this.head.link = insertNode
        this.tail = insertNode
        this.tail.previousLink = this.head
        break
      default:
        this.tail.link = insertNode
        insertNode.previousLink = this.tail
        this.tail = insertNode
    }
    this.length++
  }

  insertFirst( data ) {
    const nodeToInsert = new EnchantedNode( data )

    if ( this.length === 0 ) {
      this.head = nodeToInsert
      this.tail = this.head
    } else {
      nodeToInsert.link = this.head
      this.head.previousLink = nodeToInsert
      this.head = nodeToInsert
    }
    this.length++
  }

  insertBefore( locator, insert ) {
    const nodeToInsert = new EnchantedNode( insert ),
          locatorNode = this.find( locator ),
          nodeThatGoesBefore = locatorNode.previous()

    nodeToInsert.previousLink = nodeThatGoesBefore
    nodeToInsert.link = locatorNode
    locatorNode.previousLink = nodeToInsert
    nodeThatGoesBefore.link = nodeToInsert
    this.length++
  }

  insertAfter( locator, insert ) {
    const nodeToInsert = new EnchantedNode( insert ),
          locatorNode = this.find( locator ),
          nodeThatGoesAfter = locatorNode.next()

    nodeToInsert.previousLink = locatorNode
    nodeToInsert.link = nodeThatGoesAfter
    locatorNode.link = nodeToInsert
    nodeThatGoesAfter.previousLink = nodeToInsert
    this.length++
  }

  removeFirst() {
    const oldHead = this.head
    this.head = this.head.link
    oldHead.link = null
    this.head.previousLink = null
    this.length--
  }

}
