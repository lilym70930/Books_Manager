import consts from '../consts';
const {bookPerPage}=consts;

const getApiSearchUrl = (searchTerm, page) =>
  `http://openlibrary.org/search.json?q=${searchTerm}&page=${page}&limit=${bookPerPage}`;

export const getBookCoverByOLID = (olid) =>
  `http://covers.openlibrary.org/b/olid/${olid}-M.jpg`;

export const searchBooks = async (searchTerm = "", page=1) => {
  const { docs, numFound } = await fetch(getApiSearchUrl(searchTerm, page)).then((r) => r.json());
  const books = docs.map(book => {

    return {
      key: book.key,
      imageUrl: book.cover_edition_key ? getBookCoverByOLID(book.cover_edition_key) : null,
     readURL:  book.ebook_count_i && book.ia ? getBookReadURL(book.ia[0]) : null,
     rate: book.rate,
     title: book.title,
    first_publish_year: book.first_publish_year,
    author_name: book.author_name
    } 
  });

  return {docs:books, numFound}
};


export const getBookReadURL = (ia) =>
  `https://archive.org/stream/${ia}`;