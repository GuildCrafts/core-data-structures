import chai, { expect } from 'chai'
import Node from '../src/node'
import LinkedList from '../src/linkedlist'

describe('LinkedList', () => {

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      const listOfLinks = new LinkedList()
      listOfLinks.insert('tacos')

      expect(listOfLinks.getTailNode().getData()).to.equal('tacos')
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const linky = new LinkedList()
      linky.insert('oneNode')
      linky.insert('twoNode')
      expect(linky.getTailNode().getData()).to.equal('oneNode')
    })
  })

  context('contains()', () => {
    it(' Determines whether or not the list contains the provided data', () => {
      const Grapevine = new LinkedList()
      Grapevine.insert('greenGrape')
      Grapevine.insert('redGrape')
      expect(Grapevine.contains('greenGrape')).to.equal(true)
    })
  })

  context('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const magicList = new LinkedList()
      magicList.insert('creatures')
      expect(magicList.find('dogs')).to.equal(-1)
    })
  })

  context('insert()', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const carbs = new LinkedList()
      carbs.insert('noodle')
      carbs.insert('pasta')
      carbs.insert('bread')
      expect(carbs.getTailNode().data).to.equal('noodle')
    })
  })

  context('insertFirst()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const bestFoods = new LinkedList()
      bestFoods.insertFirst('iceCream')
      expect(bestFoods.getHeadNode().data).to.equal('iceCream')
    })
  })

  context('insertBefore()', () => {
    it('Inserts a node (with data "apples") before the first node containing "bananas"', () => {
      const linkylisty = new LinkedList()
      linkylisty.insert('banananode')
      linkylisty.insertBefore('applenode')
      expect(linkylisty.getTailNode().data).to.equal('banananode')
    })
  })

  context('insertAfter()', () => {
    it('Inserts a node (with data "bananas") after the first node containing "apples"', () => {
      const lunchlist = new LinkedList()
      lunchlist.insert('chinese')
      lunchlist.insertBefore('poke')
      expect(lunchlist.getTailNode().data).to.equal('chinese')
    })
  })

  context('remove()', () => {
    it('Removes the tail node', () => {
      const Animals = new LinkedList()
      Animals.insert('cats')
      Animals.insert('mice')
      Animals.remove('mice')
      expect(Animals.getTailNode().data).to.equal('cats')
    })
  })

  context('removeFirst()', () => {
    it('Removes the head node', () => {
      const Vegetables = new LinkedList()
      Vegetables.insert('peas')
      Vegetables.insert('brocolli')
      Vegetables.insert('kale')
      Vegetables.removeFirst('peas')

      expect(Vegetables.getHeadNode().data).to.equal('kale')
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
