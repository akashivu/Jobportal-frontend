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
    <div className="min-h-screen flex items-center justify-center bg-blue-500 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4 "
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">Post a Job</h2>

        <input
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="description"
          placeholder="Description"
          value={job.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;
