import test from 'ava'
import HashTable, { HashNode } from '../../src/HashTable/HashTable'

test( 'hash', t =>{
    let ht = new HashTable()
    t.truthy( ht.hash, 'hash() is not defined on the prototype' )
    let firstHash = ht.hash( 'hash' )
    t.truthy( firstHash, '.hash() returns undefined or null' )
    let secondHash = ht.hash( 'hash' )
    t.is( firstHash, secondHash, '.hash() does not create consistant keys' )
 } )

test( 'put', t => {
    let ht = new HashTable()
    t.truthy( ht.put, 'put() is not defined on the prototype.' )
    ht.put( 'name', 'yogi' )
    t.deepEqual( ht.size, 1, 'HashTable size returns incorrectly after .put()' )
    t.true( ht.contains( 'name' ), 'contains() did not find the inserted key' )
    ht.put( 'name', 'booboo' )
    t.deepEqual( ht.size, 2, 'second insert did not increment size.' )
} )

test( 'get', t=> {
    let ht = new HashTable()
    t.truthy( ht.get, 'get() is not defined on the prototype.' )
    ht.put( 'name', 'booboo' )
    t.is( ht.get( 'name' ), 'booboo', 'get() does not return expected value.' )
    let error = t.throws( () => ht.get( 'jiggy with it' ) )
    t.is( error.message, 'key does not exist in hash table' )
} )

test( 'remove', t =>{
    let ht = new HashTable()
    t.truthy( ht.remove, 'remove() is not defined on the prototype.' )
    ht.put( 'name', 'ranger rick' )
    t.is( ht.size, 1, 'First insertion did not alter size correctly' )
    ht.remove( 'name' )
    t.is( ht.size, 0, 'remove() did not alter size correctly' )
    ht.put( 'hobbies', 'eating' )      
    ht.put( 'hobbies', 'sleeping' )
    ht.remove( 'hobbies' )
    t.is( ht.size, 1, 'did not remove node when chained under a key' )
    let error = t.throws(  () => { ht.remove( 'fungus' ) } )
    t.is( error.message, 'key does not exist in hash table' )
} )

test( 'contains', t =>{
    let ht = new HashTable()
    t.truthy( ht.contains, '.contains() is not defined on the prototype' )
    ht.put( 'diet', 'picnic baskets' )
    t.true( ht.contains( 'diet' ), '.contains() returned false when should return true' )
    t.false( ht.contains( 'picnic baskets' ), '.contains() found the data instead of the key' )
} )

test( 'size', t =>{
    let ht = new HashTable()
    ht.put( 'name', 'yogi' )
    t.deepEqual( ht.size, 1, 'size did return as 1 after single insert' )
    ht.put( 'name', 'boobo' )
    t.deepEqual( ht.size, 2, 'size was not increased data with identical key was added' )
    ht.put( 'diet', 'picnic baskets' )     
    ht.put( 'hobbies', 'eating' )     
    ht.put( 'hobbies', 'sleeping' )
    t.deepEqual( ht.size, 5, 'size modified incorrectly during multiple inserts' )
    ht.size = 0
    t.not( ht.size, 0, 'size property was allowed to be reassigned by user.' )
} )

test( 'iterate', t =>{
    let ht = new HashTable()
    t.truthy( ht.iterate, '.iterate() is not defined on the prototype' )
    ht.put( 'name', 'Yogi' )     
    ht.put( 'diet', 'picnic baskets' )     
    ht.put( 'hobbies', 'eating' )     
    ht.put( 'hobbies', 'sleeping' )
    let count = 0
    let callback = ( k, v ) => { count++ }
    ht.iterate( callback )
    t.is( count, 4, 'callback function was not run for every node in hash table' )
} )

test( 'dastardly shit', t => {
    let ht = new HashTable()
    ht.put( 'evil', 'shenanigens' )
    let items = ht._getItems()
    let hash = ht.hash( 'evil' )
    let error = t.throws( () => items[hash].next = 'sneaky sneaky' )
    t.is( error.message, 'can only be set to another node.', 'user was not prevented from reassigning property of a node' )
} )

test( 'getTailNode', t => {
    let ht = new HashTable
    ht.put( 'name', 'yogi' )
    ht.put( 'name', 'booboo' )
    ht.put( 'name', 'ranger rick' )
    let items = ht._getItems()
    let node = items[ ht.hash( 'name' ) ]
    t.is( node.data, 'yogi', 'first node in chain is not same as first insert.' )
    let tailNode = HashNode.getTailNode( node )
    t.is( tailNode.data, 'ranger rick', 'tail node in chain not same as last insert.' )
} )
