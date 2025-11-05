import React, { useState } from "react";


const JobList = ({ filters }) => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Innovation Labs",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $130k",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "New York, NY",
      type: "Contract",
      salary: "$80k - $100k",
      posted: "3 days ago"
    }
  ];

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  🏢 {job.company}
                </span>
                <span className="flex items-center gap-1">
                  📍 {job.location}
                </span>
                <span className="flex items-center gap-1">
                  💼 {job.type}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <span className="text-lg font-semibold text-blue-600">
                {job.salary}
              </span>
              <span className="text-sm text-slate-500">{job.posted}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const JobPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");

  const filters = {
    search: searchTerm,
    location: selectedLocation,
    type: selectedType,
    experience: selectedExperience
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Next Opportunity
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Browse through thousands of job openings from top companies
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Filters
              </h2>

              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Search Jobs
                </label>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                />
              </div>

             
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                >
                  <option value="all">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">On-site</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                >
                  <option value="all">All Types</option>
                  <option value="fulltime">Full-time</option>
                  <option value="parttime">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>

              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                >
                  <option value="all">All Levels</option>
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior Level</option>
                  <option value="lead">Lead/Manager</option>
                </select>
              </div>

              
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLocation("all");
                  setSelectedType("all");
                  setSelectedExperience("all");
                }}
                className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          
          <main className="lg:col-span-3">
           
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Available Jobs
                </h2>
                <p className="text-slate-600 mt-1">
                  Showing 156 jobs matching your criteria
                </p>
              </div>
              <select className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-white">
                <option>Most Recent</option>
                <option>Most Relevant</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
              </select>
            </div>

            
            <JobList filters={filters} />

            
            <div className="mt-8 flex justify-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium">
                1
              </button>
              <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition">
                3
              </button>
              <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition">
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JobPage;