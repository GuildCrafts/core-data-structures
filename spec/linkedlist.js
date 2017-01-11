import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedlist'

chai.use(chaiChange)

const generateTestList = () => {
  const list = new LinkedList()

  list.insert('foo')
  list.insert('stuff')
  list.insert('blah')
  list.insert('foo2')
  list.insert('stuff2')

  return list
}


describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  describe('insertFirst', () => {

    it('Inserts a node with the provided data to the head of the list', () => {
      const aLinkedList = new LinkedList()

      expect(() => aLinkedList.insertFirst('foo'))
        .to.alter(() => aLinkedList.size(), { from: 0, to: 1 })
    })

    it('Inserts a node with the provided data to the head of the list', () => {
      const aLinkedList = new LinkedList()

      aLinkedList.insertFirst('bar')

      expect(() => aLinkedList[0]
        .to.equal('bar'))
    })
  })

  describe('insert()', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const aLinkedList = generateTestList()

      expect(() => aLinkedList.insert('junk'))
        .to.alter(() => aLinkedList.size(), { from: 5, to: 6 })
    })

    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const aLinkedList = generateTestList()

      aLinkedList.insert('junk')

      expect(aLinkedList.tail.data)
        .to.equal('junk')
    })
  })

  describe('find()', () => {
    it('Returns -1 if not found', () => {
      const aLinkedList = generateTestList()

      expect(aLinkedList.find('doesntexist'))
      .to.equal(-1)
    })

    it('Returns the first node containing the provided data', () => {
      const aLinkedList = generateTestList()

      expect(aLinkedList.find('stuff'))
      .to.equal(1)
    })
  })

  describe ('isEmpty()', () => {
    it('Determines if the list is empty or not', () => {
      const aLinkedList = new LinkedList()

      expect(aLinkedList.isEmpty())
        .to.equal(true)
    })

    it('returns false if the current list is occupied.', () => {
        const aLinkedList = new LinkedList()
        aLinkedList.insert('lotta stuff')
        expect(aLinkedList.isEmpty())
          .to.equal(false)
    })
  })

  describe ('getHeadNode()', () => {
    it('Returns the first node in the list', () => {
      const aLinkedList = new LinkedList()

    })
  })
})
  // context('peek()', () => {
  //   it('shows the current element at the top of the stack.', () => {
  //     const aLinkedList = new LinkedList(['foo','bar'])
  //     expect(aLinkedList.peek())
  //       .to.equal('foo')
  //   })
  // })
  //

  //
  //
  // context ('length()', () => {
  //   it('shows the length of the stack.', () => {
  //     const aLinkedList = new LinkedList()
  //     aLinkedList.push('ber')
  //     expect(aLinkedList.length())
  //       .to.equal(1)
  //   })
  // })
// })

// describe('linkedlist', () => {
//   'use strict'
//
//   it('exists', () => {
//     expect(LinkedList).to.be.a('function')
//   })
//
//   describe('insertFirst()', () => {
//     it('Inserts a node with the provided data to the head of the list'), () => {
//       const linkedList = new LinkedList()
//       linkedList.insertFirst("someData")
//       .to.alter(() => linkedList.size(), { from: 0, to: 1 })
//     })
//   })
//     it('Inserts a node with the provided data to the head of the list'), () => {
//       const linkedList = new LinkedList()
//       linkedList.insertFirst("someData2")
//       .to.alter(() => linkedList.size(), { from: 1, to: 2 })
//     })
//   })
//   describe('size()', () => {
//     it('returns the size of the list', () => {
//         const linkedList = new LinkedList()
//         linkedList.insertFirst("hello")
//         expect(linkedList.size()).to.eql(1)
//     })
//   })
