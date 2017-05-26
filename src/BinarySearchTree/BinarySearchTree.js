
export default class BinarySearchTree {
    constructor() {
        let root = null
        let count = 0
        this._getRoot = function() {
            return root
        }
        this._setRoot = function( node ) {
            root = node
        }
        this._bumpCount = function( direction ) {
            ( direction === 'up' ) ? count++ : count--
        }
        this._getCount = function() {
            return count
        }
    }

    set root( node ) {
        if ( !( node instanceof TreeNode ) ) {
            throw 'Must be a TreeNode'
        }
        this._setRoot( node )
    }
    get root() {
        return this._getRoot()
    }

    insert( key ) {
        if ( this.root === null ) {
            this.root = new TreeNode ( key )
        } else {
            let success = this.root.add( key )
            if ( !success ) {
                throw 'Insertion Error: Identical key likely found.'
            } 
        }
        this._bumpCount( 'up' )        
    }

    search( key, node = this.root ) {
        if ( node === null || node.key === key) {
            return node
        } else if ( key < node.key ) {
            return this.search( key, node.left )
        } else {
            return this.search( key, node.right )
        }
    }

    remove( key ) {
        let node = this.search( key )
        let { node: p_node, direction: c_direction } = this.getParentNodeOfKey( key, this.root )
        let number_of_children = node.getChildCount()
        switch( number_of_children ) {
            case 0:
                p_node[ c_direction ] = null
                break
            case 1:
                let c_node = node.getOnlyChild()
                p_node[ c_direction ] = c_node
                break
            case 2:
                let lm_node = node.right.findLeftMost()
                let { node: lmp_node, direction: lm_direction } = this.getParentNodeOfKey( lm_node.key, node )
                node.key = lm_node.key
                lmp_node[lm_direction] = null
                break
            default:
                throw new Error( "Remove ran into some snags..." )
            
        }
        this._bumpCount( '')
    }

    count() {
        return this._getCount()
    }

    getParentNodeOfKey( key, node ) {
        if ( node.left && node.left.key === key ) {
            return { node: node, direction: 'left' }
        }
        if ( node.right && node.right.key === key ) {
            return { node: node, direction: 'right'}
        }
        if ( key < node.key ) {
            return this.getParentNodeOfKey( key, node.left )
        }
        if ( key > node.key ) {
            return this.getParentNodeOfKey( key, node.right )
        }
        throw new Error( "getParentNodeOfKey failed." )
    }

    




}


class TreeNode {
    constructor( key ) {
        this.key = key
        this.right = null
        this.left = null
    }

    add( key ) {
        if ( key === this.key ) {
            return
        }
        if ( key < this.key ) {
            if ( this.left ) {
                return this.left.add( key )
            }
            return this.left = new TreeNode( key )
        }
        if ( key > this.key ) {
            if ( this.right ) {
                return this.right.add( key )
            }
            return this.right = new TreeNode( key )
        }
        return true
    }

    getOnlyChild() {
        if ( this.left && !this.right ) {
            return this.left
        }
        if ( !this.left && this.right ) {
            return this.right
        }
        throw new Error( "getOnlyChild: node has either less or more than 1 child." )
    }


    getChildCount() {
        if ( !this.left && !this.right ) {
            return 0
        }
        if ( ( this.left  && !this.right ) || ( !this.left && this.right ) ) {
            return 1
        }
        if ( this.left && this.right ) {
            return 2
        }
        throw new Error( "TreeNode.prototype.hasXChildren() did not find a valid case." )
    }

    findLeftMost( node = this ) {
        if ( !node ) {
            throw new Error()
        }
        if ( !node.left ) {
            return node
        }
        return node.left.findLeftMost()
    }

    static isValidNode( input ) {
        return input instanceof TreeNode || input === null
    }
} 
export { TreeNode }