import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {LinkedList, Node} from '../src/linkedList.js'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  let linkedList
  beforeEach('invokes a new LinkedList before each test', () => {
    linkedList = new LinkedList()
  })

  it('exist', () => {
    expect(LinkedList).to.be.a('function')
  })

  it('Node exist', () => {
    expect(Node).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns null if first node does not exist', () => {
      expect(linkedList.getHeadNode()).to.be.equal(null)
    })

    it('returns the first node', () => {
      linkedList.insertFirst('bananas')
      expect(linkedList.getHeadNode().data())
        .to.be.eql('bananas')
    })
  })

  context('insertFirst()', () => {
    it('adds a node to the head of the empty LinkedList', () => {
      expect(() => linkedList.insertFirst('bananas') )
        .to.alter(() => linkedList.count, { from: 0, to: 1 } )
    })

    it('adds a node to the front of the linkedList and updates head ', () => {
      linkedList.insertFirst('bananas')
      console.log('THIS IS BANANAS' , linkedList.insertFirst('bananas'))
      linkedList.insertFirst('pineapple')
      expect(linkedList.getHeadNode().data())
        .to.be.eql('pineapple')
    })
  })

  context('insert()', () => {
    it('adds a node to the tail of the empty LinkedList', () => {
      expect(() => linkedList.insert('bananas') )
        .to.alter(() => linkedList.count, { from: 0, to: 1 } )
    })
     it('adds a node to the end of the linkedList and updates prior end node next value', () => {
       linkedList.insert('pineapple')
       linkedList.insert('pickle')
       expect(linkedList.getTailNode().data())
         .to.be.eql('pickle')
     })
  })

  context('getTailNode()', () => {
    it('returns null if no nodes exist', () => {
      expect(linkedList.getTailNode()).to.be.equal(null)
    })

    it('returns the final node of LinkedList', () => {
      linkedList.insertFirst('bananas')
      linkedList.insertFirst('green apples')
      linkedList.insertFirst('crab apples')
      expect(linkedList.getTailNode().data()).to.be.eql('bananas')
    })
  })

  context('contains()', () => {
    it('returns true if the list has the value', () => {
      linkedList.insertFirst('bana')
      linkedList.insertFirst('banas')
      linkedList.insertFirst('bananas')
      expect(linkedList.contains('bananas')).to.be.equal(true)
    })

    it('returns false if the list does not have the value', () => {
      linkedList.insertFirst('green apples')
      expect(linkedList.contains('bananas')).to.be.equal(false)
    })
  })

  context('finds()', () => {
    it('returns the first node containing the data', () => {
      linkedList.insertFirst('apple')
      linkedList.insertFirst('bananas')
      linkedList.insertFirst('cucumber')
      expect(linkedList.find('bananas').data()).to.be.eql('bananas')
    })

    it('returns -1 if the value is not found', () => {
      linkedList.insertFirst('green apples')
      expect(linkedList.find('bananas')).to.be.equal(-1)
    })
  })

  context('insertBefore()', () => {
    it('inserts a new node into linkedList', () => {
      linkedList.insert('bananas')
      expect(() => linkedList.insertBefore('bananas', 'apples') )
        .to.alter(() => linkedList.count, { from: 1, to: 2} )
    })

    it('insert new node before found node', () => {
      linkedList.insert('apricots')
      linkedList.insert('dates')
      linkedList.insert('cantalope')
      linkedList.insertBefore('cantalope', 'blueberry')
      expect(linkedList.find('dates').data())
        .to.be.eql('dates')
    })
  })

  context('insertAfter()', () => {
    it('inserts a new node into linkedList', () => {
      linkedList.insert('bananas')
      expect(() => linkedList.insertAfter('bananas', 'apples') )
        .to.alter(() => linkedList.count, { from: 1, to: 2} )
    })

    it('insert new node after found node', () => {
      linkedList.insert('apricots')
      linkedList.insert('cantalope')
      linkedList.insert('dates')
      linkedList.insert('elderberry')
      linkedList.insertAfter('dates', 'blueberry')
      expect(linkedList.find('dates').data())
        .to.be.eql('dates')
    })
  })

  context('remove()', () => {
    it('remove the only node in the linkedList' , () => {
      linkedList.insert('grapefruit')
      linkedList.remove()
      expect(linkedList.head).to.be.equal(null)
    })

    it('removes the last node in the linkedList' , () => {
      linkedList.insert('figs')
      linkedList.insert('grapes')
      linkedList.insert('guava')
      linkedList.remove()
      expect(linkedList.find('grapes').data())
        .to.be.eql('grapes')
      expect(() => linkedList.remove() )
        .to.alter( () => linkedList.count, { from: 2, to: 1} )
      })
    })

  context('removeFirst()', () => {
    it('remove the only node in the linkedList' , () => {
      linkedList.insert('grapefruit')
      linkedList.removeFirst()
      expect(linkedList.head).to.be.equal(null)
    })

    it('removes the first node in the linkedList' , () => {
      linkedList.insert('plums')
      linkedList.insert('raspberry')
      linkedList.removeFirst()
      expect(linkedList.find('raspberry').data() )
        .to.be.eql('raspberry')
    })
  })

  context('isEmpty()', () => {
    it('returns true if the linkedList is empty', () => {
      expect(linkedList.isEmpty()).to.be.equal(true)
    })
    it('returns false if the linkedList is not empty', () => {
      linkedList.insert('kiwi')
      expect(linkedList.isEmpty()).to.be.equal(false)
    })
  })

  context('size()', () => {
    it('returns the size of the linkedList', () => {
      linkedList.insert('figs')
      expect(linkedList.size()).to.be.equal(1)
    })
  })

  context('clear()', () => {
    it('clears the list of all nodes/data', () => {
      linkedList.insert('lemon')
      linkedList.insert('lime')
      linkedList.insert('mango')
      linkedList.clear()
      expect(linkedList.size()).to.be.equal(0)
    })
  })

  context('data()', () => {
    it('returns the value of the node', () => {
      linkedList.insert('blood orange')
      let node = linkedList.find('blood orange')
      expect(node.data()).to.be.equal('blood orange')
    })
  })

  context('next()', () => {
    it('returns the next Node of a specific node ', () => {
      linkedList.insert('orange')
      let node = linkedList.find('orange')
      expect(node.next()).to.be.equal(null)
    })
  })
})
