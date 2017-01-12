import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedlist'

chai.use(chaiChange)

const generateTestList = () => {
  const list = new LinkedList()

  list.insert('first')
  list.insert('middle')
  list.insert('last')

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
        .to.alter(() => aLinkedList.size(), { from: 3, to: 4 })
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

      expect(aLinkedList.find('middle').data)
      .to.equal('middle')
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
      const aLinkedList = generateTestList()
      expect(aLinkedList.head.data)
        .to.equal('first')
    })
  })

  describe ('getTailNode()', () => {
    it('Returns the first node in the list', () => {
      const aLinkedList = generateTestList()
      expect(aLinkedList.tail.data)
        .to.equal('last')
    })
  })

  describe('insertBefore()', () => {
    it('inserts a new head if instructed to insert before head element', () => {
      const aLinkedList = generateTestList()
      aLinkedList.insertBefore('first', 'newHead')
      expect(aLinkedList.head.data)
        .to.equal('newHead')
    })

    it('inserts a new element before the first instance of a matching element', () => {
      const aLinkedList = generateTestList()
      aLinkedList.insertBefore('middle', 'newSecond')
      expect(aLinkedList.head.next.data)
        .to.equal('newSecond')
    })
  })

  describe('insertAfter()', () => {
    it('inserts a new tail if instructed to insert after tail element', () => {
      const aLinkedList = generateTestList()
      aLinkedList.insertAfter('last', 'newTail')
      expect(aLinkedList.tail.data)
        .to.equal('newTail')
    })

    it('inserts a new element after the first instance of a matching element', () => {
      const aLinkedList = generateTestList()
      aLinkedList.insertAfter('first', 'newSecond')
      expect(aLinkedList.head.next.data)
        .to.equal('newSecond')
    })
  })

  describe('remove()', () => {
    it('Removes the tail node from the list', () => {

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
