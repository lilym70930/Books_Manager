import axios from 'axios';

const prefix = window.location.origin.includes('localhost') ? 'https://localhost:4000' : window.location.origin

async function CreateCollection(collectionName) {
  console.log('inside collection name', collectionName)


  try {
    const result = await axios.post(prefix + '/collections', {
      collectionName, books: [], readonly: false
    })



    if (result.status === 201) {
      console.log('created collection', result.data)

      return result.data;
    }
  }
  catch (err) {
    console.log(err, 'err post new collection')
  }
}



async function AddToCollection(collectionId, book) {

  try {
    console.log('AddToCollection',collectionId, book );
    const result = await axios.post(prefix + `/collections/${collectionId}/books`, book);
    if (result.status === 200) {
      return result.data;

    } else {
      console.log('add book to collection return:', result.status);
    }
  }
  catch (err) {
    console.log('!!!! err add book to collection', err)
  }
}


async function RemoveFromCollection(collectionId, bookToRemove) {

  try {
    console.log('removeFromCollection',collectionId, bookToRemove );
    const bookId = encodeURIComponent(bookToRemove.key)
    const result = await axios.delete(prefix +`/collections/${collectionId}/books/${bookId}`);
    if (result.status === 200) {
      return result.data;

    } else {
      console.log('add book to collection return:', result.status);
    }
  }
  catch (err) {
    console.log('!!!! err add book to collection', err)
  }
}

async function GetCollections() {
  try {
    const result = await axios.get(prefix +'/collections')
    if (result.status === 200) {
      console.log('res.data', result.data.collections);
      console.log('isArray data', Array.isArray(result.data.collections));
    

      return result.data.collections;
    }
  }
  catch (err) {
    console.log(err, 'err geting collection')
  }
}

async function UpdateCollection(updatedCollection) {
  try {
    console.log('updatedCollection', updatedCollection);
    const result = await axios.patch(prefix +`/collections/${updatedCollection._id}`, {

      collectionName: updatedCollection.collectionName
    });
    if (result.status === 200) {
      return result.data;

    } else {
      console.log('update return:', result.status);
    }
  }
  catch (err) {
    console.log('!!!! err update collection', err)
  }
}

async function DeleteCollection(id) {

  try {

    const result = await axios.delete(prefix +`/collections/${id}`)
    if (result.status === 204) {
      console.log('res.data', result.data)
      return id;
    } else {
      console.log('delete return:', result.status);
    }
  }
  catch (err) {
    console.log(err, 'err deleting collection')
  }
}

async function GetRateBooks(){
  try {
    const result = await axios.get(prefix +'/rated-books')
    if (result.status === 200) {
      console.log('res.data', result.data.books);
      return result.data.books;
    }
  }
  catch (err) {
    console.log(err, 'err geting books')
  }
}

async function AddRateBook(book) {

  try {
    const result = await axios.post(prefix +'/rated-books', book);
    if (result.status === 201) {
      return result.data;

    } else {
      console.log('add rate book  return:', result.status);
    }
  }
  catch (err) {
    console.log('!!!! err add rate book ', err)
  }
}

async function UpdateBookRate(book) {

  try {
    const result = await axios.patch(prefix +`/rated-books/${encodeURIComponent(book.key)}`, book);
    if (result.status === 200) {
      console.log('UPDATED BOOK RATE')
      return result.data;

    } else {
      console.log('update rate book  return:', result.status);
    }
  }
  catch (err) {
    console.log('!!!! err udate rate book ', err)
  }
}

export default {
  CreateCollection, DeleteCollection, AddToCollection, RemoveFromCollection, GetCollections, UpdateCollection, GetRateBooks, AddRateBook, UpdateBookRate
}

