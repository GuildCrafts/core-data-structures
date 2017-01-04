import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {

  it('exists', () => {
    expect(Stack).to.be.a( 'function' )
  })

  context('stack simulation', () => {
    const awesomeStack = new Stack()

    it('beef up the stack\'s commissary by adding a new element to the top', () => {
      expect(() => awesomeStack.beefUp( 'secret' ))
        .to.alter(() => awesomeStack.length(), { from: 0, to: 1 })
    })

    it('beefing up the stack\'s commissary increases its topIndex', () => {
      expect(awesomeStack.topIndex).to.equal( 0 )
    })

    it('amputate the top most element from the stack\'s commissary', () => {
      expect(() => awesomeStack.amputatePiece())
        .to.alter(() => awesomeStack.length(), { from: 1, to: 0 })
    })

    it('amputating a piece from the stack\'s commissary decreases the topIndex', () => {
      expect(awesomeStack.topIndex).to.equal( null )
    })

    it('amputating a piece from the stack\'s commissary decreases the size', () => {
      expect(awesomeStack.size).to.equal( 0 )
    })

    it('should return an overflow error if amputation is attempted on an empty commissary', () => {
      expect(awesomeStack.amputatePiece()).to.equal( 'underflow error' )
    })

    it('glancing at an empty commissary returns null', () => {
      expect(awesomeStack.glance()).to.equal( null )
    })

    it('glancing reveals the secret located at the top index of our commissary', () => {
      awesomeStack.beefUpMany( 'secretOne', 'two', 'three' )
      expect(awesomeStack.glance()).to.equal( 'three' )
    })

    it('will return true if the commissary is uninhabited', () => {
      awesomeStack.amputatePieceMany( 3 )
      expect(awesomeStack.isUninhabited()).to.equal( true )
    })

  })
})
