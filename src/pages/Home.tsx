// src/pages/Home.tsx
import React, { useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { useSearch } from '../context/SearchContext';

const Home: React.FC = () => {
  const {
    searchResults,
    setSearchResults,
    query,
    setQuery,
  } = useSearch();

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setSearchResults(res.data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="container">
      <SearchBar
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <BookList books={searchResults} />
    </div>
  );
};

export default Home;
