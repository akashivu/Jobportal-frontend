import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(company, location);
  };

  return (
    <div className="bg-indigo-700 text-center rounded-lg py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Find your new Jobs</h1>
      <p className="text-lg text-gray-200 mb-6">
        Search for jobs by company and location
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-3 max-w-2xl mx-auto"
      >
        <input
          type="text"
          placeholder="Search by company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
