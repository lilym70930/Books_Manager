import React, { useState } from "react";
import ratings from './ratings.jpg';
import BookItem from '../BooksSearch/BookItem';
import ReactStars from "react-rating-stars-component";
import './index.scss';




const MyRatings = (props) => {
    const [ratedBooks, setRatedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filterByStars, setFilterByStars] = useState(0);

    const ratingChanged = (newRating) => {

        setFilterByStars(newRating);
    }


    const likeHandler = (book, liked) => {
        if (!liked) {
            props.addToCollection("likes", book);
        } else {
            props.removeFromCollection("likes", book);
        }
    }
    const ratedBooksToShow = props.ratedBooks.filter((book) => !filterByStars || book.rate === filterByStars);

    return (
        <div>
            <img id="mainPic" src={ratings} alt="" />
            <h3>Here are all the books you have rated</h3>
            <h4>You can filter your books by rating! Click on the stars.</h4>

            {props.ratedBooks.length !== 0 && <div>
                {filterByStars === 0 ?
                    <div className="starsContainer">
                        <ReactStars count={5} value={0} onChange={ratingChanged} size={29} activeColor="#ffd700" />
                    </div>
                    :
                    <div >
                        <h5 style={{color: 'red'}}>Results for {filterByStars} star(s) </h5>
                        <button className="clearButton" onClick={() => setFilterByStars(0)}>Clear filter</button>
                        </div>
                   }

              
            </div>}


            {isLoading ? <div>
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> : <div className="booksCardConrainer">

                    {ratedBooksToShow.map(book => (
                        <BookItem key={book.key} book={book} likeHandler={(liked) => likeHandler(book, liked)} collections={props.collections} addToCollection={props.addToCollection} removeFromCollection={props.removeFromCollection} addRateBook={props.addRateBook} updateBookRate={props.updateBookRate} />
                    ))}

                </div>}




        </div>
    )
}

export default MyRatings;



