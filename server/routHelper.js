const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const DB_name = 'book_manager_DB';
const book_collection = 'collections' ;
const rated_books = 'ratings';
const user_registration = 'users';
let dbo;
const { v4: uuid } = require('uuid');

async function init() {
    try {
        const db = await MongoClient.connect(url)
        dbo = db.db(DB_name);
        const results = await dbo.collection(book_collection).find({});
        const allCollections = await results.toArray();
        if (!allCollections.find((item) => item.collectionName === 'Books I Liked')) {
            await dbo.collection(book_collection).insertOne({ _id: 'likes', collectionName: 'Books I Liked', books: [], readonly: true })
            await dbo.collection(book_collection).insertOne({ _id: uuid(), collectionName: 'Books For Vacation', books: [] })

        }


    } catch (err) {
        console.log('faild to initilize DB', err);
    }
}
init();



async function AddNewCollection(req, res) {

    if (!dbo) {
        return res.status(500).send({ err: 'no db connection' });
    }
    console.log('add new collection is accessed');
    const newCollection = req.body;
    newCollection._id = uuid();
    newCollection.books =  newCollection.books || [];
    const existingCollection = await dbo.collection(book_collection).findOne({ collectionName: newCollection.collectionName })
    if (existingCollection) {
        return res.status(400).send({ error: 'collection name already exist' });
    }
    try {
        
        const result = await dbo.collection(book_collection).insertOne(newCollection)

        return res.status(201).send(newCollection);
    } catch (error) {
        console.log('err!!! inside if', error)
        return res.status(500).send({ error: 'err insert new collection' });
    }
}

async function DeleteCollection(req, res) {
    if (!dbo) {
        return res.status(500).send({ err: 'no db connection' });
    }
    console.log('delete collection is accessed');
    const collectionId = req.params.collectionId;
    const queryIdToDelete = { "_id":collectionId };

    const existingCollectionToDelete = await dbo.collection(book_collection).findOne(queryIdToDelete)
    if (!existingCollectionToDelete ) {  // can not find collection to delete
        return res.status(404).send({ error: 'collection was not found' });  //try to delete collection that was not excist
    }if(existingCollectionToDelete.readonly){
        return res.status(403).send({ error: 'permition denaid' });  

    }
    try {
        const result = await dbo.collection(book_collection).deleteOne(queryIdToDelete)
        return res.status(204).send({ id: collectionId});
    } catch (error) {
        console.log('err!!! can not delete', error)
        return res.status(500).send({ error: 'err deleting  collection' });
    }
}

async function UpdateCollectionName(req,res){
    if (!dbo) {
        return res.status(500).send({ err: 'no db connection' });
    }
    console.log('update collection is accessed');
    const collectionId = req.params.collectionId;
    const queryIdToUpdate = { "_id":collectionId };
    const collectionName = req.body.collectionName
    const existingCollectionToUpdate = await dbo.collection(book_collection).findOne(queryIdToUpdate)
    if (!existingCollectionToUpdate ) { 
        return res.status(404).send({ error: 'collection was not found' });  
    }if(existingCollectionToUpdate.readonly){
        return res.status(403).send({ error: 'permition denaid' });  

    }
    try {
       await dbo.collection(book_collection).updateOne(queryIdToUpdate, {$set: {collectionName}})
        const updatedCollection =  await dbo.collection(book_collection).findOne(queryIdToUpdate)
    
        return res.status(200).send( updatedCollection);

    } catch (error) {
        console.log('err!!! can not update', error)
        return res.status(500).send({ error: 'err update  collection' });
    }

}

async function GetCollections(req, res) {
    try {
        const results = await dbo.collection(book_collection).find({});
        const allCollections = await results.toArray();
        return res.status(200).send({collections: allCollections});
    }
    catch (error) {
        console.log('error', error)
        return res.status(500).send({ error: 'err insert new collection' });
    }
}

async function GetRatedBooks(req, res) {
    try {
        const results = await dbo.collection(rated_books).find({});
        const allBooks = await results.toArray();
        return res.status(200).send({books: allBooks});
    }
    catch (error) {
        console.log('error', error)
        return res.status(500).send({ error: 'err get rated book' });
    }
}

async function AddToRatedBooks(req, res) {

    if (!dbo) {
        return res.status(500).send({ err: 'no db connection' });
    }
    console.log('add new rated book is accessed');
    const newBook = req.body;
    
    const existingBook = await dbo.collection(rated_books).findOne({ key: newBook.key })
    if (existingBook) {
        return res.status(400).send({ error: 'book already exist' });
    }
    try {
        
        const result = await dbo.collection(rated_books).insertOne(newBook)
     
        return res.status(201).send(newBook);
    } catch (error) {
        console.log('err!!! adding rate book', error)
        return res.status(500).send({ error: 'err insert new book rate' });
    }
}

async function UpdateBookRate(req, res) {

    if (!dbo) {
        return res.status(500).send({ err: 'no db connection' });
    }
    console.log('add new rated book is accessed');
    const updatedBook = req.body;
    const bookKey = decodeURIComponent(req.params.bookKey);

    const existingBook = await dbo.collection(rated_books).findOne({ key: bookKey })
    if (!existingBook) {
        return res.status(404).send({ error: 'book not found@@@@@@' });
    }
    try {
        await dbo.collection(rated_books).updateOne({ key: bookKey }, {$set: {rate: updatedBook.rate}})

     
        return res.status(200).send(updatedBook);
    } catch (error) {
        console.log('err!!! update book', error)
        return res.status(500).send({ error: 'err update book' });
    }
}



async function AddToCollection(req,res){
    if (!dbo) {
        return res.status(500).send({ err: 'no db connection' });
    }
    try{
        console.log('add to  collection is accessed');
        const collectionId = req.params.collectionId;
        const bookToAdd = req.body;
        const queryIdToUpdate = { "_id":collectionId };
    
        const existingCollectionToUpdate = await dbo.collection(book_collection).findOne(queryIdToUpdate)
        if (!existingCollectionToUpdate ) { 
            return res.status(404).send({ error: 'collection was not found' });  
        }
        existingCollectionToUpdate.books.push(bookToAdd);
        await dbo.collection(book_collection).updateOne(queryIdToUpdate, {$set: {books:existingCollectionToUpdate.books}})
        return res.status(200).send(existingCollectionToUpdate);
    }
    catch (error) {
        console.log('error', error)
        return res.status(500).send({ error: 'err insert book to collection' });
    }
  
}

async function RemoveFromCollection(req,res){
    if (!dbo) {
        return res.status(500).send({ err: 'no db connection' });
    }
    try{
        console.log('remove book from  collection is accessed');
        const collectionId = req.params.collectionId;
        const bookId = decodeURIComponent(req.params.bookId);
        const queryIdToUpdate = { "_id":collectionId };
    
        const existingCollectionToUpdate = await dbo.collection(book_collection).findOne(queryIdToUpdate)
        if (!existingCollectionToUpdate ) { 
            return res.status(404).send({ error: 'collection was not found' });  
        }
        existingCollectionToUpdate.books = existingCollectionToUpdate.books.filter((book) => book.key !== bookId)
        await dbo.collection(book_collection).updateOne(queryIdToUpdate, {$set: {books:existingCollectionToUpdate.books}})
        return res.status(200).send(existingCollectionToUpdate);
    }
    catch (error) {
        console.log('error', error)
        return res.status(500).send({ error: 'err insert book to collection' });
    }
}

function Login(queryUser, res) {
    if (queryUser.accessToken) {
        return facebookLogin(queryUser, res);
    }
    MongoClient.connect(url, function (err, db) {
        if (err) {
            return res.status(500).send({ err: 'err@' });
        }
        const dbo = db.db(DB_name);
        console.log('queryUser', queryUser)
        dbo.collection(user_registration).findOne(queryUser, function (err, user) {
            
            if (err) {
                return res.status(500).send({ err: 'err@' });
            }
            if (user) {
                console.log('user login ok!');
                return res.status(200).send(user);
            }
            console.log('user login NOT ok!');
            return res.status(403).send({ err: 'wrong password, user might try to connect as another user' });
        });
    });
}

function SignUp(req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            return res.status(500).send({ err });
        }
        const dbo = db.db(DB_name);
        const queryUser = req.body;
        dbo.collection(user_registration).findOne({ email: queryUser.email }, function (err, userFound) {
            if (err) {
                return res.status(500).send({ err });
            }
            if (userFound) {
                console.log(queryUser);
                return res.status(400).send({ err: 'user already exists' });
            }
            dbo.collection(user_registration).insertOne(queryUser, function (err, result) {
                if (err) {
                    return res.status(500).send({ err });
                }
                console.log('user signup ok!');
                return res.status(201).send(result);
            })
        });
    });
}



module.exports = {
    AddNewCollection,
    GetCollections,
    DeleteCollection,
    UpdateCollectionName,
    AddToCollection,
    RemoveFromCollection,
    GetRatedBooks,
    AddToRatedBooks,
    UpdateBookRate,
    Login,
    SignUp,
}