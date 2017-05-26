import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/linked_list'

chai.use(chaiChange)

let dl

describe('DoublyLinkedList', () => {
  beforeEach('instantiates a new DoublyLinkedList before each test', () => {
    dl = new DoublyLinkedList()
  })

  context('insert()', () => {
    it('inserts the value to the list', () => {
      expect( () => { dl.insert(15) })
        .to.alter(() => dl.size(), { from:0, to: 1});
    })

    // it('inserts a node to the tail of the list', () => {
    //   dl.insert(10)
    //   dl.insert(11)
    //   dl.insert(12)
    //   dl.insert(13)
    //   expect(dl.getTailNode()).to.eql(13)
    //  })
  })

  // context('insertBefore()', () => {

  //   it('inserts a node with data Sabrin before the first node containing Aileen',
  //       () => {
  //           dl.insert('Aileen')
  //           dl.insert('Sabrin')
  //         expect( () => {
  //           dl.insertBefore('Sabrin', 'Jas')
  //         })
  //         .to.alter( () => dl.size(), { from: 2, to: 3})
  //    })

  //   it('inserts a node with data Sabrin before the head node containing Aileen', () => {
  //         dl.insert('Aileen')
  //         dl.insert('Jas')
  //         dl.insertBefore('Jas', 'Sabrin')
  //       expect(dl.getHeadNode()).to.eql('Aileen')
  //       })
  //   })

  // context('insertAfter()', () => {
  //   it('inserts a node with data Jacky after the first node containing Aileen',
  //       () => {
  //       expect( () => {
  //         dl.insert('Aileen')
  //         dl.insertAfter('Aileen', 'Jacky')
  //       })
  //       .to.alter( () => dl.size(), { from: 0, to: 1})
  //   })
  // })

  context('remove(position)', () => {
    it('Removes the node from a position in the list', () => {
      dl.insert('Sabrin')
      dl.insert('James')
      dl.insert('Aileen')
      dl.remove(2)

      expect( dl.head.next.data ).to.eql('Aileen')
    })
  })

  // context('removeFirst()', () => {
  //   it('removes the head node from the list', () => {
  //     dl.insert('JavaScript')
  //     dl.insert('Java')
  //     dl.insert('Angular')
  //     dl.insert('React')
  //     dl.removeFirst()

  //     expect( dl.getHeadNode() ).to.eql('Java')
  //   })
  // })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      dl.insert('Sabrin')
      expect(dl.getHeadNode() ).to.eql('Sabrin');
    })
  })

  context('size()', () => {
    it('returns the size of the list', () => {
      dl.insert('Sabrin')
      expect( dl.size() ).to.eql( 1 )
    })
  })

  context('isEmpty()', () => {
    it('returns true if the list is empty', () => {
      expect(dl.size()).to.eql(0)
    })

    it('returns false if the list contains a node', () => {
        expect( () => {
          dl.insert(15)
          dl.clear()
         })
          .to.alter(() => dl.size(), { by: 0});
    })
  })

  context('find(position)', () => {
    it('returns the first node containing the provided data', () => {
      dl.insert('Sabrin')
      dl.insert('Aileen')
      dl.insert('Jas')
      dl.insert('Mishi')

      expect(dl.find(3).data).to.eql('Jas')
    })
  })

})

