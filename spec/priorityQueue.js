import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import priorityQueue from '../src/priorityQueue'

chai.use(chaiChange)
//
// before(){
//   const pQueue = new priorityQueue
// }
describe('priorityQueue', () => {
  it('exists', () => {
    expect(priorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the queue' , () => {
      const pQueue = new priorityQueue
    expect(() => pQueue.enqueue('pizza', 90))
    .to.alter(() => pQueue.length(), { from: 0, to: 1 })
    })
      const newQueue = new priorityQueue
      console.log(newQueue)
      newQueue.enqueue('pizza', 90)
      newQueue.enqueue('potato', 100)
      console.log(newQueue)
    it('adds an element with priority to the back of the queue', () => {
      expect(newQueue).to.eql({queue: [['pizza', 90], ['potato', 100]], index: 2})
      console.log(newQueue)
    })
  })
  })
