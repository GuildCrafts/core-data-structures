import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a new list node to our list.', () => {
      const myLL = new LinkedList()

      expect(() => myLL.insert('foo'))
        .to.alter(() => myLL.size, { from: 0, to: 1 })
    })
  })

  context('showAll()', () => {
    it('returns all the elements in the list', () => {
      const myLL = new LinkedList()
      myLL.insert('First Blood')
      myLL.insert('First Blood 2')

      expect(myLL.showAll()).to.eql(['First Blood', 'First Blood 2'])
    })
  })

  context('getTailNode()', () => {
    it('returns the data in the lists tail node', () => {
      const myLL = new LinkedList()
      myLL.insert('First Blood')
      myLL.insert('First Blood 2')

      expect(myLL.getTailNode()).to.eql('First Blood 2')
    })
  })

  context('getHeadNode()', () => {
    it('returns the data in the lists head node', () => {
      const myLL = new LinkedList()
      myLL.insert('First Blood')
      myLL.insert('First Blood 2')

      expect(myLL.getHeadNode()).to.eql('First Blood')
    })
  })

  context('contains()', () => {
    it('returns whether or not the item passed is contained in the list', () => {
      const myLL = new LinkedList()
      myLL.insert('First Blood')
      myLL.insert('First Blood 2')
      myLL.insert('Rambo III')

      expect(myLL.contains('Rambo')).to.eql(false)
    })
  })

  context('find()', () => {
    it('returns', () => {
      const myLL = new LinkedList()
      myLL.insert('First Blood')
      myLL.insert('First Blood 2')
      myLL.insert('Rambo III')

      expect(myLL.find('Rambo')).to.eql('Rambo III')
    })
  })

  context('isEmpty()', () => {
    it('returns whether or not the list is empty or not', () => {
      const myLL = new LinkedList()
      myLL.insert('Creed')
      myLL.clear()

      expect(myLL.isEmpty()).to.eql(true)
    })
  })

  context('clear()', () => {
    it('removes all elements from list', () => {
      const myLL = new LinkedList()
      myLL.insert('Creed')

      expect(() => myLL.clear()).to.alter(() => myLL.size, { from: 1, to: 0 })
    })
  })

  context('insertFirst', () => {
    it('inserts an element at the front of the list', () => {
      const myLL = new LinkedList()
      myLL.insert('Rocky')
      myLL.insert('Rocky II')
      myLL.insertFirst('Creed')

      expect(myLL.head.data).to.eql('Creed')
    })
  })

  context('insertAfter', () => {
    it('inserts an element at the end of a list', () => {
      const myLL = new LinkedList()
      myLL.insert('Rocky')
      myLL.insert('Rocky II')
      myLL.insertAfter('Creed')

      expect(myLL.tail.data).to.eql('Creed')
    })
  })

  context('removeFirst', () => {
    it('removes the first item in the list', () => {
      const myLL = new LinkedList()
      myLL.insert('Rocky')
      myLL.insert('Rocky II')
      myLL.insertAfter('Creed')
      myLL.removeFirst()

      expect(myLL.head.data).to.eql('Rocky II')
    })
  })

  context('remove', () => {
    it('removes the current element at the tail of the list', () => {
      const myLL = new LinkedList()
      myLL.insert('Rocky')
      myLL.insert('Rocky II')
      myLL.insertAfter('Rocky III')
      myLL.remove()

      expect(myLL.tail.data).to.eql('Rocky II')
    })
  })

})
