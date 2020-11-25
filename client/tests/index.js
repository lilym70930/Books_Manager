global.window = {}
import 'mock-local-storage'
window.localStorage = global.localStorage;

import CollectionService from '../src/CollectionService';
import assert from 'assert';


console.log('**************')
console.log('** TEST START')
console.log('*************')

const { GetCollections,
    CreateCollection,
    AddToCollection,
    DeleteCollection,
    RemoveFromCollection,
    UpdateCollection } = CollectionService;


function getAllCollectionTest() {
    console.log('Test getCollection');
    try {
        const result = GetCollections();
        assert(result.length === 2, 'wrong length of results');
        assert(result[0].id === 'likes', 'wrong data in collection')
        console.log('Test has passed')
    } catch (error) {
        console.log('Test has failed:', error.message)
    }
}

function CreateAndUpdateAndDeleteCollectionTest() {
    console.log('Test CreateCollection/UpdateCollection/DeleteCollection');
    try {
        CreateCollection('my new collection');
        const result = GetCollections();
        assert(result.length === 3, 'wrong length of results');

        assert(result[2].collectionName === 'my new collection', 'wrong name in new collection')
        const updatedCollection = { ...result[2] }
        updatedCollection.collectionName = 'new collection name';
        UpdateCollection(updatedCollection)
        const resultAfterUpdate = GetCollections();
        assert(resultAfterUpdate[2].collectionName === 'new collection name', 'wrong name in new collection')

        DeleteCollection(resultAfterUpdate[2].id)
        assert(result.length === 3, 'collection copy was affected by delete');

        const resultAfterDelete = GetCollections();
        assert(resultAfterDelete.length === 2, 'wrong length of results.');
        console.log('Test has passed')
    } catch (error) {
        console.log('Test has failed:', error.message)
    }
}

function addAndRemoveBookFromCollectionTest() {
    console.log('Test AddToCollection/RemoveFromCollection');
    try {
        const result = GetCollections();
        assert(result.length === 2, 'wrong length of results');
        const collectionId = result[1].id;
        assert(result[1].books.length === 0, 'collection already had books');
        const book = { key: 'new book' }
        AddToCollection(collectionId, book);
        assert(result[1].books.length === 1, 'book was not added to collection');
        RemoveFromCollection(collectionId, book);
        assert(result[1].books.length === 0, 'book was not removed from collection');

        console.log('Test has passed')
    } catch (error) {
        console.log('Test has failed:', error.message)
    }
}



function Tests() {
    getAllCollectionTest();
    CreateAndUpdateAndDeleteCollectionTest();
    addAndRemoveBookFromCollectionTest();

}
Tests();