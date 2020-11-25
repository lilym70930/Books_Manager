import React from 'react';
import './Pagination.scss';

const Pagination = ( {bookPerPage, totalBooks, paginate, currentPage}) =>{

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil( totalBooks / bookPerPage) ; i++) {
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li  key={number} className={`page-item ${number === currentPage ? "currentPageStyle" : ""}` }>
                        <span onClick={ () => paginate(number)}  className={`page-link pageLink ${number === currentPage ? "currentPageStyle" : ""}`}>{number}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;