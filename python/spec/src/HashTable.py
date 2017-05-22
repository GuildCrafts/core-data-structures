
class HashNode():
    def __init__( self, data ):
        self.data = data
        self.next = None

    def setData( self, newdata ):
        self.data = newData

    def setNext( self, node ):
        self.next = node

    def getData( self ):
        return self.data

    def getNext( self ):
        return self.next


class HashTable():
    def __init__( self ):
        self.theArray = {}
        self.arraySize = 0

    def getTailNode( self, node ):
        nextNode = node.getNext()
        if nextNode == None:
            return node
        else:
            self.getTailNode( nextNode )

    def hash( self, key ):
        return hash( key )

    def put( self, key, data ):
        dataNode = HashNode( {key: data} )
        keyHash = self.hash( key )
        if self.contains( key ):
            tailNode = self.getTailNode( self.theArray[ keyHash ] )
            tailNode.next = dataNode
        else:
            self.theArray[ keyHash ] = dataNode
        self.arraySize += 1

    def get( self, key ):
        if self.contains( key ):
            keyHash = self.hash( key )
            return self.theArray[ keyHash ].getData()[key]
        else:
            return None

    def contains( self, key ):
        keyHash = self.hash( key )
        if keyHash in self.theArray:
            return True
        else:
            return False

    def remove( self, key ):
        if self.contains( key ):
            keyHash = self.hash( key )
            del self.theArray[ keyHash ]
            self.arraySize -= 1

    def size( self ):
        return self.arraySize
