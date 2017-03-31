import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('Adds an element to the back of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue("foo")
      expect((myQueue.head.data)).to.equal("foo")
    })
  })

  context('dequeue()', () => {
    it('Removes an element from the front of the queue.', () => {
      const dequeue = new Queue()
      dequeue.enqueue("foo")
      expect(dequeue.dequeue().data).to.equal("foo")
    })
  })

  context('front()', () => {
    it('Returns the front element in queue', () => {
      const front = new Queue()
      front.enqueue("foo")
      expect(front.front().data).to.equal("foo")
    })
  })

  context('front()', () => {
    it('Check the front and returns null if the queue is empty', () => {
      const front = new Queue()
      expect(front.front()).to.equal(null)
    })
  })

  context('back()', () => {
    it('Returns the back element in the queue.', () => {
      const back = new Queue()
      back.enqueue("foo")
      expect(back.back().data).to.equal("foo")
    })
  })

  context('back()', () => {
    it('Returns null for the back element of an empty queue.', () => {
      const back = new Queue()
      expect(back.back()).to.equal(null)
    })
  })

  context('isEmpty()', () => {
    it('Returns false if the queue is not empty. ', () => {
      const isEmpty = new Queue()
      isEmpty.enqueue('foo')
      expect(isEmpty.isEmpty()).to.equal(false);
    })
  })

  context('isEmpty()', () => {
    it('Returns true if the queue is empty. ', () => {
      const isEmpty = new Queue()
      expect(isEmpty.isEmpty()).to.equal(true);
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue ', () => {
      const length = new Queue()
      length.enqueue("foo")
      length.enqueue("roo")
      expect(length.length()).to.equal(2);
    })
  })
  //
  // context('isEmpty()', () => {
  //   it.only('Returns True, if the queue is empty or false if not. ', () => {
  //     const isEmpty = new Queue()
  //     expect((isEmpty.back()).to.equal(null))
  //   })
  // })








  //
  // context('pop()', () => {
  //   it('removes an element at the top of the stack.', () => {
  //     const myStack = new Stack()
  //     myStack.push('foo')
  //     myStack.push('fred')
  //     myStack.push('BMW')
  //
  //     expect(() => myStack.pop())
  //       .to.alter(() => myStack.length(), { from: 3, to: 2 })
  //   })
  // })
  //
  // context('peek()', () => {
  //   it('returns the top element in the stack.', () => {
  //     const myStack = new Stack()
  //     // myStack.push('foo')
  //     // myStack.push('fred')
  //     myStack.push('BMW')
  //
  //     expect( myStack.peek().data).to.equal('BMW')
  //   })
  //
  //   it('returns null if the stack is empty.', () => {
  //     const myStack = new Stack()
  //
  //     expect(myStack.peek()).to.equal(null)
  //   })
  // })
  //
  // context('length()', () => {
  //   it('returns the number of elements in the stack.', () => {
  //     const myStack = new Stack()
  //     myStack.push('foo')
  //     myStack.push('fred')
  //     myStack.push('BMW')
  //
  //     expect( myStack.length()).to.equal(3)
  //   })
  // })
  // context('length()', () => {
  //   it('returns the 0 for an empty stack', () => {
  //     const myStack = new Stack()
  //     expect( myStack.length()).to.equal(0)
  //   })
  // })
  //


})
