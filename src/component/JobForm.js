import React, { useState } from 'react';
import { postJob } from '../service/JobService';


const JobForm = () => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postJob(job);
      alert('Job posted successfully!');
    } catch (err) {
      alert('Failed to post job');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <input name="salary" placeholder="Salary" onChange={handleChange} />
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobForm;
