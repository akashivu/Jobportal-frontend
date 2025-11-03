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
      setJob({ title: '', description: '', location: '', salary: '' });
    } catch (err) {
      alert('Failed to post job');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-blue-900 to-blue-800 relative text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

    
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-8 py-16 gap-8">
        <div className="max-w-lg w-full space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-center md:text-left">
            Post a New Job
          </h2>
          <p className="text-xl md:text-2xl drop-shadow-md text-gray-200 text-center md:text-left">
            Fill in the job details below to publish it on your portal and attract top talent.
          </p>

          <div className="bg-white/90 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="title"
                placeholder="Job Title"
                value={job.title}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400"
              />
              <textarea
                name="description"
                placeholder="Job Description"
                value={job.description}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400"
              />
              <input
                name="location"
                placeholder="Location"
                value={job.location}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400"
              />
              <input
                name="salary"
                placeholder="Salary"
                value={job.salary}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Post Job
              </button>
            </form>
          </div>
        </div>
      </div>

     
      <div className="relative z-10 hidden md:flex flex-1 justify-center items-center px-8">
        <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="office"
          className="rounded-3xl shadow-2xl max-w-full"
        />
      </div>

      
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </div>
  );
};

export default JobForm;
