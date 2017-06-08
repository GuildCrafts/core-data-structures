import chai, { expect } from 'chai'
import Node from '../src/node'
import LinkedList from '../src/linkedlist'

describe.only('LinkedList', () => {

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      const listOfLinks = new LinkedList()
      listOfLinks.insert('tacos')
      listOfLinks.insert('fish')

      expect(listOfLinks.getHeadNode().getData()).to.equal('tacos')
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const linky = new LinkedList()
      linky.insert('oneNode')
      linky.insert('twoNode')
      expect(linky.getTailNode().data).to.equal('twoNode')
    })
  })

  context('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const magicList = new LinkedList()
      magicList.insert('creatures')
      magicList.insert('spells')
      magicList.insert('wands')
      console.log(magicList);
      expect(magicList.find('creatures')).to.equal('creatures')
      expect(magicList.find('dogs')).to.equal(-1)
    })
  })

  context('insert()', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const carbs = new LinkedList()
      carbs.insert('noodle')
      carbs.insert('pasta')
      carbs.insert('bread')
      expect(carbs.getTailNode().data).to.equal('bread')
    })
  })

  context('insertBefore()', () => {
    it('Inserts a node (with data "apples") before the first node containing "bananas"', () => {
      const linkylisty = new LinkedList()
      linkylisty.insert('banananode')
      linkylisty.insertBefore('applenode')
      expect(linkylisty.getHeadNode().data).to.equal('banananode')
    })
  })

  context('insertAfter()', () => {
    it('Inserts a node after the first node containing data', () => {
      const lunchlist = new LinkedList()
      lunchlist.insert('chinese')
      lunchlist.insertBefore('poke')
      expect(lunchlist.getHeadNode().data).to.equal('chinese')
    })
  })

  context('remove()', () => {
    it('Removes the tail node', () => {
      const Animals = new LinkedList()
      Animals.insert('cats')
      Animals.insert('mice')
      Animals.remove('mice')
      expect(Animals.getHeadNode().data).to.equal('cats')
    })
  })

  context('isEmpty()', () => {
    it('Determines if the list is empty or not', () => {
      const emptyList = new LinkedList()
      expect(emptyList.isEmpty()).to.equal(true)
    })
  })

  context('size()', () => {
    it('Returns the size of the list (number of nodes)', () => {
      const hugeList = new LinkedList()
      hugeList.insert('firstNode')
      expect(hugeList.size()).to.equal(1)
    })
  })

  context('clear()', () => {
    it('Clears the list of all nodes/data', () => {
      const deleteList = new LinkedList()
      deleteList.insert('deleteNode')
      expect(deleteList.size()).to.equal(1)
      deleteList.clear()
      expect(deleteList.size()).to.equal(0)
    })
  })

})
