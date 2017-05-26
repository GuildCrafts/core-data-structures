import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

let stack

describe('Stack', () => {
  beforeEach('instantiates a new Stack before each test', () => {
    stack = new Stack()
  })

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {

      expect(() => stack.push('Java'))
        .to.alter(() => stack.size(), { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
    it('returns and removes the top element in the stack', () => {
      stack.push('Python')
      stack.push('Ruby')
      stack.push('Rails')
      stack.push('JavaScript')

      expect(stack.pop()).to.eql('JavaScript')
    })
  })

})
