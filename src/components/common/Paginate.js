import React from 'react';
import usePagination from '../../hooks/usePagination';
import Arrow2 from '../../Icons/Arrow2';
import ReactPaginate from 'react-paginate';

export default function Paginate({ list, children }) {
    const { currentItems, pageCount, handlePageClick } = usePagination(list);

    return (
        <>
            {children(currentItems)}
            <ReactPaginate
                breakLabel="..."
                nextLabel={<Arrow2 className="pagination__icon" />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<Arrow2 className="pagination__icon" />}
                renderOnZeroPageCount={null}
                pageClassName="pagination__item"
                pageLinkClassName="pagination__button"
                previousClassName="pagination__item"
                previousLinkClassName="pagination__button pagination__button--prev"
                nextClassName="pagination__item"
                nextLinkClassName="pagination__button pagination__button--next"
                breakClassName="pagination__item"
                breakLinkClassName="pagination__button"
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    );
}
