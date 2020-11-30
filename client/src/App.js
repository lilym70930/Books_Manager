import React, { useState, useEffect } from "react";
import * as style from "./App.module.scss";
import { Switch, Route } from "react-router-dom";
import { Collections } from "./pages/Collections";
import { BooksSearch } from "./pages/BooksSearch";
 import { Redirect } from 'react-router-dom';

import { Header } from "./components/Header";
import CollectionService from './CollectionService';
import Home from './pages/Home/index';
import  BooksILiked  from "./pages/BooksLiked";
import  MyRatings  from './pages/MyRates';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  const [collections, setCollections] = useState(null);
  const [ratedBooks , setRatedBooks] = useState(null);
  const userFromStorage = localStorage.getItem('user')
  const [user, setUser] = useState(userFromStorage ? JSON.parse(userFromStorage) : null);

  let userName = JSON.parse(userFromStorage)

  const { AddToCollection,
    DeleteCollection,
    CreateCollection,
    RemoveFromCollection,
    GetCollections,
    UpdateCollection,
     GetRateBooks, 
     AddRateBook, 
     UpdateBookRate } = CollectionService;

  async function addNewCollection(collectionName) {
    const newCollection = await CreateCollection(collectionName)
    setCollections([...collections, newCollection]);
  }

  async function deleteCollection(id) {
    const collectionId = await DeleteCollection(id);
    console.log('collectionId##', collectionId);
    const newCollections = [...collections].filter((collection) => collection._id !== collectionId)
    setCollections(newCollections);
  }

  async function updateCollection(updatedCollection) {
    console.log('about to call updateCollection', updatedCollection);
    const updatedCollectionFromServer = await UpdateCollection(updatedCollection);
    const newCollections = [...collections]
    const collectionToUpdate = newCollections.find((collection) => collection._id === updatedCollection._id)
    Object.assign(collectionToUpdate, updatedCollectionFromServer);
    setCollections(newCollections);
  }

  async function addToCollection(collectionId, book) {
    console.log('app.add to collection', collectionId, book)
    const updatedCollectionWithNewBook = await AddToCollection(collectionId, book);
    const newCollections = [...collections]
    const collectionToUpdate = newCollections.find((collection) => collection._id === collectionId)
    console.log('collectionToUpdate', collectionToUpdate);
    console.log('newCollections', newCollections);
    console.log('collectionId', collectionId);

    Object.assign(collectionToUpdate, updatedCollectionWithNewBook);
    setCollections(newCollections);
  }

  async function removeFromCollection(collectionId, book) {
    console.log('app.remove from collection', collectionId, book)

    const updatedCollectionWithoutBook = await RemoveFromCollection(collectionId, book);
    const newCollections = [...collections]
    const collectionToUpdate = newCollections.find((collection) => collection._id === collectionId)
    Object.assign(collectionToUpdate, updatedCollectionWithoutBook);
    setCollections(newCollections);
  }

  async function addRateBook(book) {
    const addedBookRate = await AddRateBook(book);
    const newBooks = [...ratedBooks, addedBookRate]
    setRatedBooks(newBooks);
  }
  

  async function updateBookRate(book) {
    const serverUpdatedBookRate = await UpdateBookRate(book);
    const newBooks = [...ratedBooks]
   const updatedBookRate =  newBooks.find((b) => b.key === book.key);
   Object.assign(updatedBookRate, serverUpdatedBookRate);

    setRatedBooks(newBooks);
  }

const tryRateBook = ( serverRateBooks, book) =>{
 const ratedBook = serverRateBooks.find( (b) => b.key === book.key);
 if(ratedBook){
  console.log('!ratedBook found', ratedBook);

   book.rate = ratedBook.rate;
 }else{
   console.log('!serverRateBooks', serverRateBooks)
      console.log('!book', book)

 }
}

const addBooksRatingsToCollections = (serverCollections, serverRateBooks) =>{
  console.log('!!serverCollections', serverCollections);
  serverCollections.forEach(collection => {
    console.log('!about to try add rating to collection,', collection.collectionName, collection.books);
    collection.books.forEach((book) => tryRateBook(serverRateBooks, book));
  });
}

  useEffect(() => {
    (async () => {
      // You can await here
     const [serverCollections, serverRateBooks] = await Promise.all([GetCollections(),GetRateBooks()])
        addBooksRatingsToCollections(serverCollections, serverRateBooks)
      
        setRatedBooks(serverRateBooks);
      setCollections(serverCollections);

    })();
  

  }, [])

  if(!collections || !ratedBooks){
    return 'Loading'
  }

  const onLogin = (user) =>{
    console.log('ONLOGIN,', user);
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    //  document.location.href = "/"
  }

  const url= window.location.href;
  const likedCollection = collections.find( (collection) => collection._id === "likes")
  console.log('window.location.href,', url);

  return (

    <div className={style.app}>
    <Header collections={collections} user={user} userName={userName}/>
    <main>
      <Switch>
        <Route
          exact
          path="/search"
          render={(props) => (
            <BooksSearch {...props} collections={collections}
              removeFromCollection={removeFromCollection}
              addToCollection={addToCollection} 
              addRateBook={addRateBook} 
              updateBookRate={updateBookRate}
              ratedBooks={ratedBooks}
              tryRateBook={tryRateBook}

              />
          )}
        />
        <Route
          exact
          path="/collections"
          render={(props) => (<Collections {...props}
            collections={collections}
            addNewCollection={addNewCollection}
            deleteCollection={deleteCollection}
            removeFromCollection={removeFromCollection}
            addToCollection={addToCollection}
            updateCollection={updateCollection}
            addRateBook={addRateBook} 
            updateBookRate={updateBookRate}
            ratedBooks={ratedBooks}

          />
          )}
        />
            <Route
          exact
          path="/booksILiked"
          render={(props) => (
            <BooksILiked {...props}
            collection={likedCollection}
            collections={collections}
            removeFromCollection={removeFromCollection}
            addToCollection={addToCollection}
            addRateBook={addRateBook} 
            updateBookRate={updateBookRate}
            ratedBooks={ratedBooks}

             />
          )}
        />  
        <Route
        exact
        path="/myRatings"
        render={(props) => (
          <MyRatings {...props}
          ratedBooks={ratedBooks}
          addRateBook={addRateBook} 
          updateBookRate={updateBookRate}
          collection={likedCollection}
          collections={collections}
          removeFromCollection={removeFromCollection}
          addToCollection={addToCollection}
          />
        )}
      />
       <Route
          exact
          path="/signIn"
          render={() => (
            <SignIn user={user} onLogin={onLogin}/>
          )}
        />
         <Route
          path="/signUp"
          render={() => (
            <SignUp user={user} onLogin={onLogin}/>
          )}
        />
        <Route
          path="/"
          render={() => (
            <Home />
          )}
        />
      
      </Switch>
    </main>
  </div>


  );
}

export default App;
