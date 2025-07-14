
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(company, location);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
