import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect( Queue ).to.be.a( 'function' )
  })

  context( 'length()', () => {
    const mutinousQueue = new Queue()

    it( 'returns zero when there is nothing in the queue', () => {
      expect( mutinousQueue.length() ).to.equal( 0 )
    })
  })

  context('enqueue()', () => {
    const marvelousQueue = new Queue()
    marvelousQueue.enqueue( 'mashpotato brain' )

    it( 'adds an element to the back of the queue', () => {
      expect( marvelousQueue.storage ).to.deep.equal([ 'mashpotato brain' ])
    })

    it( 'increases the length of the queue', () => {
      expect( () => marvelousQueue.enqueue( 'ice pack for the leg' ))
        .to.alter( () => marvelousQueue.length(), { from: 1, to: 2 })
     })

     it( 'the location of the new element is at the back of the queue', () => {
       expect( marvelousQueue.storage[ marvelousQueue.end - 1 ] )
        .to.equal( 'ice pack for the leg' )
     })
   })

  context('dequeue()', () => {
    const sublimeQueue = new Queue()
    sublimeQueue.enqueue({ sensations: 'first' })
    sublimeQueue.enqueue({ feelings: 'second' })
    sublimeQueue.enqueue({ thoughts: 'third' })

    it( 'decreases the length of the queue', () => {
      expect( () => sublimeQueue.dequeue())
        .to.alter( () => sublimeQueue.length(), { from: 3, to: 2 })
    })

    it( 'returns the removed item from the front of the queue', () => {
      expect( sublimeQueue.storage[ sublimeQueue.head ] )
        .to.deep.equal({ feelings: 'second' })
      expect( sublimeQueue.dequeue() ).to.deep.equal({ feelings: 'second' })
      expect( sublimeQueue.storage[ sublimeQueue.head ] )
        .to.deep.equal({ thoughts: 'third' })
    })

    it( 'returns null if the queue is empty', () => {
      sublimeQueue.dequeue()
      expect( sublimeQueue.dequeue()).to.equal( null )
    })

    context('front()', () => {
      const astonishingQueue = new Queue()
      astonishingQueue.enqueue( ['I','want','hugs'] )

      it( 'returns the front element of the queue', () => {
        expect( astonishingQueue.front() ).to.deep.equal( ['I','want','hugs'] )
      })

      it( 'returns null if the queue is empty', () => {
        astonishingQueue.dequeue()
        expect( astonishingQueue.front() ).to.equal( null )
      })
    })

    context('back()', () => {
      const breathtakingQueue = new Queue()
      breathtakingQueue.enqueue( 'Trust the universe' )
      breathtakingQueue.enqueue( 'Observe impermanence' )

      it( 'returns the back element of the queue', () => {
        expect( breathtakingQueue.back() ).to.equal( 'Observe impermanence' )
      })

      it( 'returns null if the queue is empty', () => {
        breathtakingQueue.dequeue()
        breathtakingQueue.dequeue()
        expect( breathtakingQueue.back() ).to.equal( null )
      })
    })

    context('isEmpty()', () => {
      const queueOfTheVoid = new Queue()

      it( 'returns true if the queue is empty', () => {
        expect( queueOfTheVoid.isEmpty() ).to.equal( true )
      })

      it( 'returns false if the queue is brimming', () => {
        queueOfTheVoid.enqueue( 'All feelings are feelings' )
        expect( queueOfTheVoid.isEmpty()).to.equal( false )
      })
    })

  })
})
