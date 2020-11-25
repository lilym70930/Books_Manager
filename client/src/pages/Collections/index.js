import React, { useState, useEffect } from 'react';
import CollectionTable from './CollectionTable';
import AddCollectionForm from './AddCollectionForm';
import EditCollectionForm from './EditCollectionForm';
import BookItem from '../BooksSearch/BookItem';
import collection_img from './collection_img.jpg';
import './index.scss';
import { Header } from '../../components/Header';



export const Collections = (props) => {

  const [version, setVersion] = useState(0);
  const [editing, setEditing] = useState(false);
  const [currentCollection, setCurrentCollection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [isClick, setClick] = useState(false);

 
  const addCollection = async (collectionName) => {
    setIsLoading(true);
    await props.addNewCollection(collectionName);


    setIsLoading(false);
  }

  const deleteCollection = async (id) => {
    setIsLoading(true);
    await props.deleteCollection(id);
    setIsLoading(false);

  }

  const editRow = (collection) => {
    setEditing(true)
    setCurrentCollection({ ...collection })
  }

  const updateCollection = async (updatedCollection) => {
    setIsLoading(true);
    setEditing(false)
    await props.updateCollection(updatedCollection);
    setIsLoading(false);

  }

  const showBooks = (collection) => {
    console.log('collection', collection);

    setCurrentCollection(collection);

  }

  const setVersionNew = () => {
    setVersion(version + 1);
  }

  const likeHandler = (book, liked) => {
    if(!liked){
      props.addToCollection("likes", book);
    }else{
      props.removeFromCollection("likes", book);
    }
  }
 



  return (
    <div >
      
      <div className="topContainer">
        <h3> Your Book Collections</h3>
        <img src={collection_img} alt="" />
      </div>
      <section className="my-4 mx-5">

        <div className="row1">
          <div className="col-lg-5">{editing ? (
            <div>
              <h4 >Edit collection</h4>
              <EditCollectionForm onCancel={() => setEditing(false)} currentCollection={currentCollection} onUpdate={updateCollection} />
            </div>
          ) : (
              <div >
                <h4>Add Collection</h4>
                {isLoading ? "loading" : <AddCollectionForm AddToCollection={addCollection} />}
                <h4>Your Collections</h4>
                <div className="collectionTable">
                  <CollectionTable collections={props.collections} deleteCollection={deleteCollection} editRow={editRow} showBooks={showBooks} />
                </div>
              </div>
            )}</div>
          <div >
          </div>
          <div className="bookItemContainer col-lg-7 px-5 pt-5 py-5">
            <h4>{currentCollection ? currentCollection.collectionName : "Your Books"}</h4>
            <h6>Here you can see all the books from your chosen collection</h6>
            {currentCollection && currentCollection.books.map(book => (
              <BookItem key={book.key} book={book} likeHandler={(liked) => likeHandler(book,liked)} setVersion={setVersionNew} collections= {props.collections} addToCollection={props.addToCollection} removeFromCollection={props.removeFromCollection} addRateBook={props.addRateBook} updateBookRate={props.updateBookRate}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
