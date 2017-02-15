describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myQueue = new Queue()

      expect(() => myQueue.push('foo'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
    })
  })
})
