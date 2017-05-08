import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)

describe.only('Node', () => {

  it('is a function', () => {
    const node = new Node(15)
    expect(Node).to.be.a('function')
  })

  it('changes the reference to the next node and returns the original node', () => {
    const node = new Node()
    node.setNext(14)
    expect(node.getNext().data).to.eql(14)
  })

  it('returns the next node', () => {
    const node = new Node()
    node.setNext('Sabrin')
    node.getNext()
    expect(node.getNext().data).to.eql('Sabrin')
  })

  it('returns null  if no next node', () => {
    const node = new Node()
    expect(node.getNext()).to.eql(null)
  })

})

