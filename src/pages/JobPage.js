
import React from 'react';
import JobList from '../component/JobList';

const JobPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>All Job Listings</h1>
      <JobList />
    </div>
  );
};

export default JobPage;
