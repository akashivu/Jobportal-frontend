import './searchbar.css';
import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(company, location);
    
  };

  return (

     <div className='container'>
      <div>
        <h1>Find your new Jobs</h1>
        <p>Search for jobs companies and location</p>
      </div>
        
      
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
     
      
      
    </div>
  );
};

  

export default SearchBar;
