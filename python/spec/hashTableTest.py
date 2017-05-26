import unittest
from src.HashTable import HashTable

class TestHashTable( unittest.TestCase ):

    def setUp( TestHashTable ):
        TestHashTable.ht = HashTable()

    def tearDown( TestHashTable ):
        del TestHashTable.ht

    def test_put( self ):
        self.ht.put( "name", "Zanzibar" )
        self.assertTrue(
            self.ht.contains( "name" ),
            msg=".put() does not add the key."
        )

    def test_get( self ):
        self.ht.put( "name", "Zanzibar" )
        self.ht.put( "name", "Eckle" )
        print( self.ht.get( "name" ) )
        self.assertEqual(
            self.ht.get( "name" ),
            "Zanzibar",
            msg="get() does not return the correct data for the given key."
        )

    def test_contains( self ):
        self.ht.put( "name", "Zanzibar" )
        self.ht.put( "power", "epic farts" )
        self.assertTrue(
            self.ht.contains( "name" ),
            msg="contains() did not find the key 'name'."
        )
        self.assertFalse(
            self.ht.contains( "Zanzibar" ),
            msg="contains() found the data for the key instead of the key itself."
        )

    def test_remove( self ):
        self.ht.put( "name", "Zanzibar" )
        self.ht.remove( "name" )
        self.assertFalse(
            self.ht.contains( "name" ),
            msg="remove() does not remove key from hashtable."
        )

    def test_size( self ):
        self.ht.put( "name", "Taco" )
        self.assertEqual(
            self.ht.size(),
            1,
            msg="size() does not report correct number of key."
        )


if __name__ == '__main__':
    unittest.main()
