import {expect} from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

describe('linkedList()', () => {
  it('it should insert into a linked list', () => {
    const newList = new LinkedList()

    expect(newList.insert('element')).to.deep.equal({
      data: 'element', next: null
    })
  })

  it('it should insert into a linked list', () => {
    const newList = new LinkedList()

    newList.insert('element')
    newList.insert('new-element')

    expect(newList.getHeadNode()).to.deep.equal({
      data: 'element', next: {data: 'new-element', next: null}
    })
  })

  it('check the size of the linked list', () => {
    const newList = new LinkedList()

    expect(newList.size()).to.deep.equal(0)

    newList.insert('element')
    newList.insert('new-element')

    expect(newList.size()).to.deep.equal(2)
  })

  it('returns the last node', () => {
    const newList = new LinkedList()

    newList.insert('element')
    newList.insert('new-element')
    newList.insert('another-new-element')

    expect(newList.getTailNode()).to.deep.equal({data: 'another-new-element', next: null})
    })
  })
