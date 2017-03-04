import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doubly_linked_list'

chai.use(chaiChange)

describe('DoublyLinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(DoublyLinkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a new doubly linked list node to our list.', () => {
      const myDLL = new DoublyLinkedList()

      expect(() => myDLL.insert('zion'))
        .to.alter(() => myDLL.size, { from: 0, to: 1 })
    })
  })

  context('length()', () => {
    it('returns the size of the list', () => {
      const myDLL = new DoublyLinkedList()

      expect(myDLL.length()).to.eql(0)
    })
  })

  context('showAll()', () => {
    it('returns an array of all elements in the list', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('ToyStory')
      myDLL.insert('The Godfather')
      myDLL.insert('Wizard of Oz')

      expect(myDLL.showAll()).to.eql(['ToyStory','The Godfather', 'Wizard of Oz'])
    })
  })

  context('getTailNode()', () => {
    it('returns the data within the tail node', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('ToyStory')
      myDLL.insert('The Godfather')
      myDLL.insert('Wizard of Oz')

      expect(myDLL.getTailNode()).to.eql('Wizard of Oz')
    })
  })

  context('contains()', () => {
    it('checks if an element is contained in the list', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('Wizard of Oz')

      expect(myDLL.contains('Wizard')).to.eql(false)
    })
  })

  context('find()', () => {
    it('checks if the substring passed is in the list', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('ToyStory')
      myDLL.insert('The Godfather')
      myDLL.insert('Wizard of Oz')

      expect(myDLL.find('Godfather')).to.eql('The Godfather')
    })
  })

  context('clear()', () => {
    it('clears all the elements in the list', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('Star Wars 4')
      myDLL.insert('Transformers anthology')
      myDLL.insert('Matrix 2')

      expect(() => myDLL.clear()).to.alter(() => myDLL.size, { from: 3, to: 0})
    })
  })

  context('isEmpty()', () => {
    it('returns whether the list is empty or not', () => {
      const myDLL = new DoublyLinkedList()

      expect(myDLL.isEmpty()).to.eql(true)
    })
  })

  context('remove()', () => {
    it('removes the last element in the list', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('ToyStory')
      myDLL.insert('The Godfather')
      myDLL.insert('Wizard of Oz')
      myDLL.insert('Matrix 2')
      myDLL.remove()

      expect(myDLL.tail.data).to.eql('Wizard of Oz')
    })
  })

  context('insertFirst()', () => {
    it('inserts an element at the front of your list', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('Good Will Hunting')
      myDLL.insert('Interstellar')
      myDLL.insert('The Martian')
      myDLL.insertFirst('Glory Daze')

      expect(myDLL.head.data).to.eql('Glory Daze')
    })
  })

  context('insertAfter()', () => {
    it('inserts an element at the end of your list', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('Good Will Hunting')
      myDLL.insert('Interstellar')
      myDLL.insertAfter('The Martian')

      expect(myDLL.tail.data).to.eql('The Martian')
    })
  })

  context('removesFirst()', () => {
    it('it removes the first element in the list', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('Good Will Hunting')
      myDLL.insert('Interstellar')
      myDLL.removesFirst()

      expect(myDLL.head.data).to.eql('Interstellar')
    })
  })

  context('insertBefore()', () => {
    it('inserts an element before the position passed in', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('Good Will Hunting')
      myDLL.insert('Interstellar')
      myDLL.insert('The Martian')
      myDLL.insertBefore(2,'Bourne Identity')

      expect(myDLL.find('Bourne')).to.eql('Bourne Identity')
    })
  })

  context('getPrevious()', () => {
    it('returns the element prior to the position passed in', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('Good Will Hunting')
      myDLL.insert('Interstellar')
      myDLL.insert('The Martian')

      expect(myDLL.getPrevious(2)).to.eql('Interstellar')
    })
  })

  context('setPrevious()', () => {
    it('inserts an element prior to the position passed', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('Good Will Hunting')
      myDLL.insert('Interstellar')
      myDLL.insert('The Martian')
      myDLL.setPrevious(2,'Bourne Identity')

      expect(myDLL.find('Identity')).to.eql('Bourne Identity')
    })
  })

  context('showProps()', () => {
    it('shows all the properties in a list', () => {
      const myDLL = new DoublyLinkedList()
      myDLL.insert('Good Will Hunting')

      expect(() => myDLL.showProps(0)).to.alter(() => myDLL.size, { from:1, to:1 })
    })
  })

})
