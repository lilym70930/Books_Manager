import React, { useState } from "react";
import BookItem from './BookItem';
import { searchBooks} from '../../BooksApi';
import Pagination from '../../components/Pagination/Pagination';
import consts from '../../consts';
import searchImgPage from './searchImgPage.jpg';
import './index.scss';
import bookR from './bookR.png';
import { Header } from '../../components/Header';




const { bookPerPage } = consts;
export const BooksSearch = (props) => {


  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [text, setText] = useState('harry potter');
  const [version, setVersion] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const [sortedByAuthor, setSortedByAuthor] = useState(true);
  const [sortedByPublication, setSortedByPublication] = useState(false)
  const [sortedByTitle, setSortedByTitle] = useState(false);
  const [filterOnlineBook , setFilterOnlineBook]  = useState(false);


  const [isClick, setClick] = useState(false);

  const maxPages = 10;

  const authorComperator = (a, b) => ((a.author_name ? a.author_name[0] : '') > (b.author_name ? b.author_name[0] : '') ? 1 : -1);
  const yearComperator = (a, b) => a.first_publish_year > b.first_publish_year ? -1 : 1;
  const titleComperator = (a, b) => a.title > b.title ? 1 : -1;

  const getBooksByPage = async (pageNumber) => {
    setIsLoading(true);
    const { docs, numFound } = await searchBooks(text, pageNumber)
    docs.forEach(b => {
      props.tryRateBook(props.ratedBooks, b)
    });
    console.log('docs@@', docs )
    const maxTotalResults = maxPages * bookPerPage
    setTotalBooks(numFound > maxTotalResults ? maxTotalResults : numFound);
    
    let comperator = authorComperator;
    if (sortedByPublication) {
      comperator = yearComperator;
    } else if (sortedByTitle) {
      comperator = titleComperator;
    }
    docs.sort(comperator)
    console.log('books-DOCS', docs);
    setBooks(docs);
    setIsLoading(false);
    setCurrentPage(pageNumber);
    setHasSearched(true);
  }

  const paginateThePage = (pageNumber) => {
    getBooksByPage(pageNumber);
  }

  const refreshPage = () => {
    setVersion(version + 1);
  }

  const likeHandler = (book, liked) => {
    if(!liked){
      props.addToCollection("likes", book);
      setClick(!isClick)
    }else{
      props.removeFromCollection("likes", book);
      setClick(!isClick)
    }
 
    refreshPage();
  }

  const SearchBooks = async () => {
    getBooksByPage(1);
  }

  const updateComperatorOnState = (comperator) =>{
    const newBooksSort = [...books];
    newBooksSort.sort(comperator);
    setBooks(newBooksSort);

  }

  const sortByAuthorName = () => {
    if (sortedByAuthor) return;
    setSortedByAuthor(true);
    setSortedByPublication(false);
    setSortedByTitle(false);
    updateComperatorOnState(authorComperator)
  }

  const sortByPublicationYear = () => {
    if (sortedByPublication) return;
    setSortedByPublication(true);
    setSortedByTitle(false);
    setSortedByAuthor(false);
    updateComperatorOnState(yearComperator)
  }

  const sortByTitle = () => {
    if (sortedByTitle) return;
    setSortedByPublication(false);
    setSortedByTitle(true);
    setSortedByAuthor(false);
    updateComperatorOnState(titleComperator)
  }

  const handleKeypress = event => {
    if (event.keyCode === 13) {
      SearchBooks();
    }
  };

  const filterReadOnline = () =>{

   setFilterOnlineBook(!filterOnlineBook);
  }

  return (
    <div className="bookSearchMainContainer">
      <div className="pageImgContainer">
        <img src={searchImgPage} alt="" />
      </div>
      <div className="searchHeader">
        <h3>Search for your favorite books</h3>
        <input placeholder="Search book name" value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeypress}></input>
        <button onClick={SearchBooks}>Search</button>
        {!isLoading && hasSearched && books.length !== 0 && <div>
          <h5 style={{ display: "block", margin: "15px" }}>You can also sort the results by</h5>
          <span><input onClick={sortByAuthorName} checked={sortedByAuthor} type="radio" id="authorName" name="filterBooks" value="authorName" /> <label style={{ display: "inline", marginRight: "10px" }} for="authorName">Author Name</label></span>
          <span><input onClick={sortByPublicationYear} checked={sortedByPublication} type="radio" id="publicationYear" name="filterBooks" value="publicationYear" /> <label style={{ display: "inline", marginRight: "10px" }} for="publicationYear">Publication Year</label></span>
          <span><input onClick={sortByTitle} checked={sortedByTitle} type="radio" id="bookTitle" name="filterBooks" value="bookTitle" /> <label style={{ display: "inline", marginRight: "10px" }} for="bookTitle">Book Title</label></span>
        </div>}
        {!isLoading && hasSearched && books.length !== 0 && <div>
          <label > 
            <input onClick={filterReadOnline} checked={filterOnlineBook} style={{marginRight: '3px'}} type="checkbox" />
            Read Online 
          </label>
          <img style={{marginLeft: '7px'}} src={bookR} alt="" />
        </div>}
      </div>
      {!isLoading && hasSearched && books.length === 0 && <h1 >Sorry, NO book was found</h1>}
      {isLoading ? <div>
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> : <div className="booksCardConrainer">
          {books.filter( (book) =>!filterOnlineBook || book.readURL).map(book => (
            <BookItem key={book.key} book={book} likeHandler={(liked) => { likeHandler(book, liked) }} collections={props.collections} addToCollection={props.addToCollection} removeFromCollection={props.removeFromCollection} addRateBook={props.addRateBook} updateBookRate={props.updateBookRate}/>
          ))}
        </div>}
      <div className="pagination">
        {!isLoading && hasSearched && books.length !== 0 && <Pagination bookPerPage={bookPerPage} totalBooks={totalBooks} paginate={paginateThePage} currentPage={currentPage} />}
      </div>
    </div>
  );
};


