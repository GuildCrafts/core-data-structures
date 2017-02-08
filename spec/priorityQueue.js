import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {
      const myPQueue = new PriorityQueue()

      expect(() => myPQueue.enqueue('foo', 100))
        .to.alter(() => myPQueue.length(), { from: 0, to: 1 })
    })
  })

  context('front()', () => {

    context('when the priority queue is not empty', () => {
      it('returns the front element (highest priority) in the queue.', () => {
        const myPQueue = new PriorityQueue()

        myPQueue.enqueue('foo', 2)
        myPQueue.enqueue('bar', 1)
        expect( myPQueue.front() ).to.equal('bar')
      })
    })

    context('when the priority queue is empty', () => {
      it('returns null', () => {
        const myPQueue = new PriorityQueue()

        expect( myPQueue.front() ).to.equal(null)
      })
    })
  })

  context('back()', () => {

    context('when the priority queue is not empty', () => {
      it('returns the back element (lowest priority) in the queue.', () => {
        const myPQueue = new PriorityQueue()

        myPQueue.enqueue('foo', 2)
        myPQueue.enqueue('bar', 1)
        expect( myPQueue.back() ).to.equal('foo')
      })
    })

    context('when the priority queue is empty', () => {
      it('returns null', () => {
        const myPQueue = new PriorityQueue()

        expect( myPQueue.back() ).to.equal(null)
      })
    })
  })

    context('dequeue()', () => {
      context('when the priority queue is not empty.', () => {
        it('returns and removes the front element (highest priority) in the queue', () =>{
          const myPQueue = new PriorityQueue()

          myPQueue.enqueue('foo', 2)
          myPQueue.enqueue('bar', 1)
          expect( myPQueue.dequeue() ).to.equal('bar')
        })
      })

      context('when the priority queue is not empty.', () => {
        it('changes the size from 2 to 1', () => {
          const myPQueue = new PriorityQueue()

          myPQueue.enqueue('foo', 2)
          myPQueue.enqueue('bar', 1)
          expect(() =>myPQueue.dequeue()).to.alter(() => myPQueue.length(), { from: 2, to: 1 })
        })
      })

      context('when the priority queue is empty', () => {
        it('returns null', () => {
          const myPQueue = new PriorityQueue()

          expect( myPQueue.dequeue() ).to.equal(null)
        })
      })
    })

    context('isEmpty()', () => {
      context('when the priority queue is not empty.', () => {
        it('returns false', () => {
          const myPQueue = new PriorityQueue()

          myPQueue.enqueue('foo', 2)
          expect(myPQueue.isEmpty()).to.equal(false)
        })
      })
      context('when the priority queue is empty.', () => {
        it('returns true', () => {
          const myPQueue = new PriorityQueue()

          expect(myPQueue.isEmpty()).to.equal(true)
        })
      })
    })

    context('length()', () => {
      it('returns the number of elements in the queue', () => {
        const myPQueue = new PriorityQueue()

        myPQueue.enqueue('foo')
        myPQueue.enqueue('bar')
        expect( myPQueue.length() ).to.equal(2)
      })
    })
  })
