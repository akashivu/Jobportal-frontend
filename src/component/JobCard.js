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

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};

export default JobCard;
