export default class HashTable {
    constructor() {
        let size = 0
        let items = {}
        function inc() {
            ( size < 1 ) ?   size = 1 : size++
        }
        function dec() {
            ( size < 1 ) ? size = 0 : size--
        }

        this._incrementSize = function() {
            inc()
        }
        this._decrementSize = function() {
            dec()
        }
        this._getSize = function() {
            return size
        }
        this._getItems = function() {
            return items
        }
        this._setItems = function( newItems ) {
            items = newItems
        }
    }

    hash( key ) {
        return HashTable.hash( key )
    }

    put( key, data ) {
        key = this.hash( key )
        let items = this._getItems()
        if ( !Object.keys( items ).includes( key ) ) {
            items[ key ] = new HashNode( data )
        } else {
            let tailNode = HashNode.getTailNode( items[ key ] )
            tailNode.spawnNextNode( data )
        }
        this._setItems( items )
        this._incrementSize()
    }

    get( key, data = null ) {
        if ( !this.contains( key ) ) {
            throw new Error( 'key does not exist in hash table' )
        }
        key = this.hash( key )
        let items = this._getItems()
        if ( data === null ) {
            return items[ key ].data
        }

    }

    remove( key ) {
        if ( !this.contains( key ) ) {
            throw new Error( 'key does not exist in hash table' )
        }
        key = this.hash( key )
        let items = this._getItems()
        if ( items[ key ].next === null ) {
            delete items[ key ]
        } else {
            items[ key ] = items[ key ].next
        }
        this._setItems( items )
        this._decrementSize()
    }

    contains( key ) {
        key = this.hash( key )
        let items = this._getItems()
        return Object.keys( items ).includes( key )

    }

    iterate( cb ) {
        let items = this._getItems()
        Object.keys( items ).forEach( key => {
            HashTable.iterateOverNodes( items[ key ], key, cb )
        })

        }

    get size() {
        return this._getSize()
    }

    set size(input) {
        return 
    }

    static hash( key ) {
       return key.split( '' ).reduce( ( code , char, index ) => {
            return  code += String( char.charCodeAt( 0 ) ) + String( ( ( index + char.charCodeAt( 0 ) ) * 47 ) )
        }, '' )
    }

    static iterateOverNodes( node, key, cb ) {
        cb( key, node.data )
        if ( node.next === null ) {
            return
        }
        return HashTable.iterateOverNodes( node.next, key, cb )
    }
}

class HashNode {
    constructor( data ) {
        this.data = data
        this.nextNode = null
    }

    set next( node ) {
        if ( node instanceof HashNode || node === null ) {
            this.nextNode = node
        }
        else {
            throw new Error( 'can only be set to another node.' ) 
        }
    }

    get next() {
        return this.nextNode
    }

    spawnNextNode( data ) {
        this.next = new HashNode( data )
    }

    static getTailNode( node ) {
        if ( node.next === null ) {
            return node
        }
        return HashNode.getTailNode( node.next )
    }

}

export { HashNode }