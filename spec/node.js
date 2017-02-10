import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'
import Node from '../src/node'

chai.use(chaiChange)

describe('Node', () => {

  it('exists', () => {
    expect(Node).to.be.a('function')
  })

  context('data()', () => {
    it('returns the data of the node', () => {
        const myLList = new LinkedList()

        myLList.insert('apples')
        myLList.insert('foo')
        const node = myLList.find('apples')
        expect(node.data()).to.equal('apples')
    })
  })

  context('next()', () => {
    it('returns the data of the node', () => {
        const myLList = new LinkedList()

        myLList.insert('apples')
        myLList.insert('foo')
        const node = myLList.find('apples')
        expect(node.next()).to.be.an.instanceof(Node)
    })
  })

})
