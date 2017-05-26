import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {


  it('exists', () => {

    expect(LinkedList).to.be.a('function')

  })

  context('getHeadNode', () => {

    it('returns head node', () => {
      const linkedList = new LinkedList()
      linkedList.insert('apple')
      linkedList.insert('banana')

      expect(linkedList.getHeadNode().data).to.equal('apple')

    })
  })

  context('getTailNode', () => {

    it('returns tail node', () => {
      const linkedList = new LinkedList()
      linkedList.insert('apple')
      linkedList.insert('banana')

      expect(linkedList.getTailNode().data).to.equal('banana')

    })
  })

  context('contains', () => {
    const string = 'banana'
    const linkedList = new LinkedList()
    linkedList.insert('apple')
    linkedList.insert('banana')

    it('checks to see if node in list contains "bananas"', () => {

        expect(linkedList.contains("banana")).to.equal(true)

    })
  })

  context('find', () => {
    const string = 'banana'
    const linkedList = new LinkedList()
    linkedList.insert('apple')
    linkedList.insert('banana')

    it('returns the first node with corresponding data or -1', () => {

      expect(linkedList.find("banana").data).to.equal('banana')

    })
  })

  context('insert', () => {
    const linkedList = new LinkedList()
    linkedList.insert('apple')
    linkedList.insert('banana')

    it.only('inserts node with data to tail of list', () => {

      expect(linkedList.tail.data).to.equal("banana")

    })
  })

  context('insertFirst', () => {
    const linkedList = new LinkedList()
    linkedList.insert('apple')
    linkedList.insertFirst('banana')

    it('inserts node with data at head of list', () => {

      expect(linkedList.head.data).to.equal("banana")

    })
  })

  context('insertBefore', (string, data) => {
    const linkedList = new LinkedList()
    linkedList.insert('banana')
    linkedList.insertBefore('banana', 'apple')

    it('inserts node containing "apple" before node containing "banana"', () => {

      expect(linkedList.head.data).to.equal('apple')

    })
  })

  context('insertAfter', () => {
    const linkedList = new LinkedList()
    linkedList.insert('banana')
    linkedList.insert('twitter')
    linkedList.insert('google')
    linkedList.insert('netflix')
    linkedList.insertAfter('banana', 'apple')


    it('inserts node containing "bananas" after node containing "apples"', () => {

      expect(linkedList.head.next.data).to.equal('apple')

    })
  })

  context('remove', () => {
    const linkedList = new LinkedList()
    linkedList.insert('apple')
    linkedList.insert('banana')
    linkedList.remove()

    it('removes the tail node from the list', () => {

      expect(linkedList.tail.data).to.equal('apple')

    })
  })

  context('removeFirst', () => {
    const linkedList = new LinkedList()
    linkedList.insert('apple')
    linkedList.insert('banana')
    linkedList.removeFirst()

    it('removes the head element from list', () => {

      expect(linkedList.head.data).to.equal('banana')
    })
  })

  context('isEmpty', () => {
    const linkedList = new LinkedList()
    linkedList.isEmpty()



    it('Determines if list is empty or not', () => {

      expect(linkedList.isEmpty()).to.equal(true)


    })
  })

  context('size', () => {

    it('Determines the number of nodes in list', () => {
      const linkedList = new LinkedList()
      linkedList.insert('apple')
      linkedList.insert('banana')
      linkedList.insert('tree')
      linkedList.insert('grapes')
      linkedList.insert('fire')
      expect(linkedList.size).to.equal(5)
    })
  })

  context('clear', () => {
    const linkedList = new LinkedList()
    linkedList.insert('apple')
    linkedList.insert('banana')
    linkedList.insert('tree')
    linkedList.insert('grapes')
    linkedList.insert('fire')
    linkedList.clear()

    it('clears the list of all nodes/data', () => {

      expect(linkedList.tail).to.equal(null) &&
      expect(linkedList.head).to.equal(null) &&
      expect(linkedList.size).to.equal(0)

    })
  })
})
