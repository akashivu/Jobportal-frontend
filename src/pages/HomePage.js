import React, { useState } from "react";
import { Search, Briefcase, MapPin, TrendingUp, Users, Building2, ChevronRight } from "lucide-react";

const HomePage = () => {
  const [jobSearch, setJobSearch] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", jobSearch, "in", location);
  };

  const stats = [
    { icon: Briefcase, value: "50,000+", label: "Active Jobs" },
    { icon: Building2, value: "10,000+", label: "Companies" },
    { icon: Users, value: "2M+", label: "Job Seekers" },
  ];

  const categories = [
    "Technology",
    "Healthcare",
    "Finance",
    "Marketing",
    "Design",
    "Sales",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4 shadow-sm sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Job<span className="text-blue-600 dark:text-blue-400">Portal</span>
          </h1>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-slate-700 dark:text-slate-300 text-sm font-medium">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
              <a href="/jobs" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Jobs</a>
              <a href="/companies" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Companies</a>
              <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
            </nav>
            <a
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    #1 Job Portal in 2024
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Find Your Dream Job
                </h2>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  Discover thousands of job opportunities from top companies. Start your career journey today.
                </p>
              </div>

              {/* Search Bar */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Job title or keyword"
                      value={jobSearch}
                      onChange={(e) => setJobSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  
                  <button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition flex items-center justify-center gap-2"
                  >
                    Search
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Popular Categories */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Popular Categories:
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`/jobs?category=${category.toLowerCase()}`}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Professional team collaboration"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 px-6 py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            © 2024 JobPortal. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;