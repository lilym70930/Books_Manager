import React, { useState } from 'react';
import liked from './liked.jpg';
import BookItem from '../BooksSearch/BookItem';
import './index.scss';


const BooksILiked = (props) => {
  
  const likeHandler = (book, liked) => {
    if(!liked){
      props.addToCollection("likes", book);
    }else{
      props.removeFromCollection("likes", book);
    }
  }

  return (
    <div className="booksILikeMainContainer">
      <img id="mainPic" src={liked} alt="" />
      <h3>Here you can see all of your favorite books</h3>

      <div >

        {props.collection.books.map(book => (
          <BookItem key={book.key} book={book} likeHandler={(liked) => likeHandler(book,liked)} collections={props.collections} addToCollection={props.addToCollection} removeFromCollection={props.removeFromCollection} addRateBook={props.addRateBook} updateBookRate={props.updateBookRate}/>
        ))}
      </div>
    </div>
  )
}

export default BooksILiked;

