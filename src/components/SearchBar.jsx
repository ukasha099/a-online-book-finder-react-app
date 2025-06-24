import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => (
  <div style={{ marginBottom: '1rem' }}>
    <input type="text" value={value} onChange={onChange} placeholder="Search books..." />
    <button onClick={onSearch} style={{ marginLeft: '0.5rem' }}>Search</button>
  </div>
);

export default SearchBar;
