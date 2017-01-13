import {expect} from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

describe.only('linkedList()', () => {
  let newList
  let emptyList
  beforeEach(() => {
    newList = new LinkedList()
    emptyList = new LinkedList()
    newList.insert('element')
    newList.insert('new-element')
    newList.insert('another-new-element')
  })
  it('it should insert into a linked list', () => {
    expect(newList.insert('element')).to.deep.equal({
      data: 'element', next: null
    })
  })

  it('it should insert into a linked list', () => {

    expect(newList.getHeadNode().data).to.deep.equal('element')
  })

  it('check the size of the linked list', () => {
    expect(emptyList.size()).to.deep.equal(0)

    emptyList.insert('element')
    emptyList.insert('new-element')

    expect(emptyList.size()).to.deep.equal(2)
  })

  it('returns the last node', () => {
    expect(newList.getTailNode()).to.deep.equal({data: 'another-new-element', next: null})
    })

  it('determines whether or not the list contains the provided data', () => {
    expect(newList.contains('another-new-element')).to.equal(true)
      })

  context('find', () => {
    it('should return the first element containing the target', () => {
      expect(newList.find('new-element').data).to.equal('new-element')
    })
    it('should return the ONLY first element containing the target', () => {
      newList.insert('element') // adds another instance of element to the tail
      expect(newList.find('element').next.data).to.equal('new-element')
    })
    it('should return -1 if the list does not contain target', () => {
      expect(newList.find('new-FAKE-element')).to.equal(-1)
    })
  })

  context('insertFirst', () => {
    it('should replace the current head' , () => {
      expect(newList.insertFirst('newHead')).to.equal(newList.head)
    })
    it('should add the old head as the next node to the current node' , () => {
      expect(newList.insertFirst('newHead').next.data).to.equal('element')
    })
  })
})
