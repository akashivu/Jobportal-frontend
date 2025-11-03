import React, { useEffect, useState } from "react";
import { getAllJobs, searchJobs } from "../service/JobService";
import JobCard from "../component/JobCard";
import SearchBar from "../component/SearchBar";
import { Briefcase, AlertCircle, Loader2 } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Find Your Dream Job
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore thousands of opportunities from top companies around the world
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Jobs Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Available Positions
            </h2>
            {!loading && !error && jobs.length > 0 && (
              <p className="text-gray-600">
                Showing {jobs.length} {jobs.length === 1 ? 'opportunity' : 'opportunities'}
              </p>
            )}
          </div>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <p className="text-lg text-gray-600 font-medium">Loading opportunities...</p>
            <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the latest jobs</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 max-w-md w-full">
              <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mx-auto mb-4">
                <AlertCircle className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-900 text-center mb-2">
                Something Went Wrong
              </h3>
              <p className="text-red-700 text-center mb-6">{error}</p>
              <button
                onClick={fetchJobs}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : jobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-12 max-w-md w-full shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                No Jobs Found
              </h3>
              <p className="text-gray-600 text-center mb-6">
                We couldn't find any positions matching your criteria. Try adjusting your search filters.
              </p>
              <button
                onClick={fetchJobs}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                View All Jobs
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JobList;