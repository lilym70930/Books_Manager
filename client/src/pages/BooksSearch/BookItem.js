import React, { useState } from 'react';
import './BookItem.scss';
import bookR from './bookR.png';
import Heart from "react-animated-heart";
import ReactStars from "react-rating-stars-component";

const BookItem = ({ book, likeHandler, collections, addToCollection, removeFromCollection, addRateBook, updateBookRate }) => {

    const [showAddMenu, setShowAddMenu] = useState(false);
    const [showRemoveMenu, setShowRemoveMenu] = useState(false);
    const [isClick, setClick] = useState(false);

    const ratingChanged = (newRating) => {
        if (book.rate) {
            if (book.rate !== newRating) {
                // update book rate
                book.rate = newRating
                updateBookRate(book);
                // setNewRatedBook(newRating)
            }
        } else {
            // add book rate
            book.rate = newRating
            addRateBook(book);
            // setNewRatedBook(newRating)
        }
    };


    const likeCollection = collections.find(c => c._id === 'likes');
    const liked = likeCollection.books.some((b) => b.key === book.key);
    const collectionBookNotIn = collections.filter(collection => !collection.books.some(b => b.key === book.key));
    const collectionBookIn = collections.filter(collection => collection.books.some(b => b.key === book.key));

    return (
        <div className="bookCard">

            {book.imageUrl ? <img className="bookImage" src={book.imageUrl} alt="" /> : <img className="bookImage" src="https://www.gollancz.co.uk/wp-content/uploads/2018/07/missingbook.png" alt="" />}
            <div className="detailContainer">
                <div className="bookNameDiv">
                    {book.title}
                </div>
                <ul>
                    <li><strong>Book by: </strong>{book.author_name}</li>
                    {book.first_publish_year && <li> <strong>Publish year: </strong>{book.first_publish_year}</li>}
                </ul>
            </div>
            <div className="mainBtnsContainer">
                <div className="btnsContainer">
                    {!showRemoveMenu && <button disabled={collectionBookNotIn.length === 0} className="btns sideBySide" onClick={() => setShowAddMenu(!showAddMenu)}>{showAddMenu ? "Cancel" : "Add to..."}</button>}
                    {showAddMenu && (<div className="clear" >
                        {collectionBookNotIn.map(collection => {
                            return <div onClick={() => {
                                addToCollection(collection._id, book);
                                setShowAddMenu(false);
                            }
                            } className={`collectionsMenuItem `}>{collection.collectionName}</div>
                        })}
                    </div>)}
                    {!showAddMenu && <button disabled={collectionBookIn.length === 0} className="btns sideBySide" onClick={() => setShowRemoveMenu(!showRemoveMenu)}>{showRemoveMenu ? "Cancel" : "Remove From..."}</button>}
                    {showRemoveMenu && (<div className="clear" >
                        {collectionBookIn.map(collection => {
                            return <div onClick={() => {
                                removeFromCollection(collection._id, book);
                                setShowRemoveMenu(false)
                            }
                            } className={`collectionsMenuItem `}>{collection.collectionName}</div>
                        })}
                    </div>)}
                    {!showRemoveMenu && !showAddMenu && <Heart isClick={liked} onClick={() => likeHandler(liked)} className="btns sideBySide" />}
                    {book.readURL && !showRemoveMenu && !showAddMenu && <a className="btnReadingOnLInk  " href={book.readURL} rel="noopener noreferrer" target="_blank" > <img src={bookR} alt="" /></a>}
                    <div className="btnRate">
                        {!showRemoveMenu && !showAddMenu && <ReactStars count={5} value={book.rate} onChange={ratingChanged} size={29} activeColor="#ffd700" />}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookItem;