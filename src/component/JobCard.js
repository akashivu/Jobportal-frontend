import './jobcard.css'
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div style={styles.card}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> ₹{job.salary}</p>
    </div>
  );
};


export default JobCard;
