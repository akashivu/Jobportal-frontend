
import React, { useEffect, useState } from 'react';
import { getAllJobs, searchJobs } from '../service/JobService';
import JobCard from '../component/JobCard';

import SearchBar from '../component/SearchBar';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      setJobs(response.data);
    } catch (err) {
      
      console.error('Error fetching jobs:', err);
    }
  };

  const handleSearch = async (company, location) => {
    try {
      const response = await searchJobs(company, location);
      setJobs(response.data);
    } catch (error) {
      console.error('Error searching jobs:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h2>Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
};

export default JobList;
