import React from 'react';

class Pagination extends React.Component {
  handleClick(pageNumber) {
    const { onPageChange } = this.props;
    onPageChange(pageNumber);
  }

  render() {
    const { itemsPerPage, totalItems, activePage } = this.props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              this.handleClick(number);
            }}
            type="button"
            className={number === activePage ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    );
  }
}

export default Pagination;
