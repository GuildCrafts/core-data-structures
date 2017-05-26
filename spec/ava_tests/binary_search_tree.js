import test from 'ava'
import BinarySearchTree, { TreeNode } from '../../src/BinarySearchTree/BinarySearchTree'

test( 'Binary Search Tree', t => {
    t.truthy( BinarySearchTree, 'BinarySearchTree is not defined.' )
} )

test( 'insert', t => {
    let bst = new BinarySearchTree()
    t.truthy( bst.insert, 'insert() is not defined on the prototype.' )
    bst.insert( 5 )
    t.is( bst.count(), 1, 'Incorrect count reported after single insert.' )
    bst.insert( 3 )
    t.is( bst.count(), 2, 'Incorrect count reported after second insert.' )
    bst.insert( 1 )
    bst.insert( 7 )
    t.is( bst.count(), 4, 'incorrect count reported after 4 insertions.' )
} )

test( 'search', t => {
    let bst = new BinarySearchTree()
    t.truthy( bst.search, 'search() is not defined on the prototype.')
    bst.insert( 5 )
    bst.insert( 3 )
    let node = bst.search( 3 )
    t.true( ( node instanceof TreeNode ), 'return is not an instance of TreeNode'  )
    t.is( node.key, 3, 'search() did not return node with correct key' )
} )

test( 'remove', t => {
    let bst = new BinarySearchTree()
    t.truthy( bst.remove, 'remove() is not defined on the prototype.' )
    bst.insert( 10 )
    bst.insert( 11 )
    bst.insert( 5 )
    bst.insert( 3 )
    bst.insert( 7 )
    bst.insert( 6 )
    bst.insert( 8 )
    bst.insert( 1 )
    t.is( bst.count(), 8, 'incorrect count reported after three insertions.' )
    bst.remove( 8 )
    t.is( bst.count(), 7, 'incorrect count reported after single deletion.' )
    bst.remove( 3 )
    t.is( bst.count(), 6, 'incorrect count reported after single deletion.' )
    bst.remove( 5 )
    t.is( bst.count(), 5, 'incorrect count reported after single deletion.' )

} )

test( 'traverse', t => {

} )

test( 'count', t => {

} )

/*

const bst = new BinarySearchTree()
bst.insert(3)  // inserts a node with the specified key into the tree.
bst.search(3)  // returns a node object or null if not found.
bst.remove(3)  // removes a key's node (if exists) from the tree.
bst.traverse('inOrder', (key) => console.log(key)) // traverse the tree in the defined order (either 'preOrder', 'inOrder', or 'postOrder') and apply function on each node's keys.
bst.count()    // return the number of nodes in the tree.

*/