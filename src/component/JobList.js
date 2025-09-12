import React, { useEffect, useState } from "react";
import { getAllJobs, searchJobs } from "../service/JobService";
import JobCard from "../component/JobCard";
import SearchBar from "../component/SearchBar";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await getAllJobs();
      setJobs(response.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (company, location) => {
    try {
      setLoading(true);
      const response = await searchJobs(company, location);
      setJobs(response.data);
    } catch (error) {
      console.error("Error searching jobs:", error);
      setError("Failed to search jobs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
     
      <SearchBar onSearch={handleSearch} />

      
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-6 border-b pb-2">
        Available Jobs
      </h2>

      
      {loading ? (
        <p className="text-center text-gray-500">Loading jobs...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-600">No jobs available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
