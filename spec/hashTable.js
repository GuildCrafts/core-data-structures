// import chai, {expect} from 'chai'
// import chaiChange from 'chai-change'
// import HashTable from '../src/HashTable'
//
// chai.use(chaiChange)
//
// describe('HashTable', () => {
//   let myHash
//   let emptyHash
//   beforeEach(() => {
//     myHash = new HashTable
//     emptyHash = new HashTable
//     myHash.put('Frist key', 1)
//     myHash.put('Second key', 2)
//     myHash.put('Third key', 3)
//   })
//
//   context('put()', () => {
//     it('should add a key value pair', () => {
//       console.log(myHash)
//       expect(myHash.put('Fourth Key', 4)).to.alter(() => {
//         myHash.indexOf('Fourth Key', 4), {from: -1, to: 3}
//       })
//         console.log(myHash)
//     })
//   })
// })
