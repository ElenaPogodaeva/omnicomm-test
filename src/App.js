import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Pagination from './components/Pagination';
import { getUniversities } from './api/api';
import { itemsPerPage } from './utils/constants';

const App = () => {
  const [universities, setUniversities] = useState([]);
  const [searchValue, setSearchValue] = useState('Russian Federation');
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    search(searchValue);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const search = async (searchValue) => {
    const params = {
      country: searchValue,
    };
    try {
      const fetchedUniversities = await getUniversities(params);
      setUniversities(fetchedUniversities);
      setTotalItems(fetchedUniversities.length);
      setError(null);
    } catch (err) {
      setUniversities([]);
      setTotalItems(0);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    search(searchValue);
  }, []);

  const start = itemsPerPage * (currentPage - 1);
  const end = start + itemsPerPage;
  const currentUniversities = universities.slice(start, end);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="search" onChange={handleSearchChange} type="text" value={searchValue} />
        <button type="submit">Поиск</button>
      </form>
      {error && <div>Error occured</div>}
      {isLoading ? <div>Loading...</div> : <Table universities={currentUniversities} />}
      <Pagination
        totalItems={totalItems}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export { App };
