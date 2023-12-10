import React from 'react';
import { itemsPerPage } from '../utils/constants';

const Pagination = ({ totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => {
            handleClick(number);
          }}
          type="button"
          className={number === currentPage ? 'active' : ''}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
