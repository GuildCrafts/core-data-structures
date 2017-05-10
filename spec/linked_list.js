import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list'

chai.use(chaiChange)

let ll

describe('LinkedList', () => {
  beforeEach('instantiates a new LinkedList before each test', () => {
    ll = new LinkedList()
  })

  context('insert()', () => {
    it('inserts the value to the list', () => {
      expect( () => { ll.insert(15) })
        .to.alter(() => ll.size(), { from:0, to: 1});
    })

    it('inserts a node to the tail of the list', () => {
      ll.insert(10)
      ll.insert(11)
      ll.insert(12)
      ll.insert(13)
      expect(ll.getTailNode()).to.eql(13)
     })
  })

  context('insertBefore()', () => {
    it('inserts a node (with data "Sabrin") before the first node containing "Aileen"',
        () => {
        expect( () => {
          ll.insert('Aileen')
          ll.insert('Jas')
          ll.insertBefore('Jas', 'Sabrin')
        })
          .to.alter( () => ll.size(), { by: 1 })
    })
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      ll.insert('Sabrin')
      expect(ll.getHeadNode().data).to.eql('Sabrin');
    })
  })

  context('size()', () => {
    it('returns the size of the list', () => {
      ll.insert('Sabrin')
      expect( ll.size() ).to.eql( 1 )
    })
  })

  context('isEmpty()', () => {
    it('returns true if the list is empty', () => {
      expect(ll.size()).to.eql(0)
    })

    it('returns false if the list contains a node', () => {
        expect( () => {
          ll.insert(15)
          ll.clear()
         })
          .to.alter(() => ll.size(), { by: 0});
    })
  })

})

