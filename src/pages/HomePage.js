
import { Link } from "react-router-dom";
import { postJob } from "../service/JobService";
const JobPortal = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-blue-900 text-white font-sans">
     
      <header className="bg-blue-800 px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold">JobPortal</h1>
        <div className="flex items-center">
            <nav className="space-x-6 text-white  text-base  mr-10">
          <a href="#" className="hover:bg-green-500 rounded-sm">Home</a>
          <a href="#" className="hover:bg-green-500 rounded-sm">Jobs</a>
          <a href="#" className="hover:bg-green-500 rounded-sm">Companies</a>
          <a href="#" className="hover:bg-green-500 rounded-sm">About</a>
        </nav>
       <Link to="/login" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
  Sign in
</Link>

        </div>
        
      </header>

     
      <main className="flex flex-col items-center justify-center px-4 py-12 text-center bg-blue-900">
        <h2 className="text-4xl font-bold mb-4">Find your new job</h2>
        <p className="text-lg mb-8">Search for jobs, companies, or locations.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="px-4 py-2 rounded w-64 text-black"
          />
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-2 rounded w-64 text-black"
          />
          <button className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </main>

     
      <footer className="bg-blue-800 px-6 py-4 flex flex-wrap justify-between items-center text-sm">
        <div>© 2024 JobPortal</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default JobPortal;