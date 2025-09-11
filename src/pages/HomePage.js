import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      
      {/* Header */}
      <header className="bg-blue-900/90 backdrop-blur-md px-8 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold tracking-wide">JobPortal</h1>
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6 text-white text-lg">
            <a href="#" className="hover:text-green-400 transition">Home</a>
            <a href="#" className="hover:text-green-400 transition">Jobs</a>
            <a href="#" className="hover:text-green-400 transition">Companies</a>
            <a href="#" className="hover:text-green-400 transition">About</a>
          </nav>
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded-md font-medium shadow-md"
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10">
        
        {/* Left side - Search bar and text */}
        <div className="flex-1 flex flex-col items-center md:items-start space-y-6">
          
          
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 w-full max-w-lg">
  <input
    type="text"
    placeholder="Job title or keyword"
    className="px-5 py-4 rounded-xl w-full sm:w-64 text-gray-800 font-medium shadow-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-400 transition placeholder-gray-400"
  />
  <input
    type="text"
    placeholder="Location"
    className="px-5 py-4 rounded-xl w-full sm:w-64 text-gray-800 font-medium shadow-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-400 transition placeholder-gray-400"
  />
  <button className="bg-green-500 hover:bg-green-600 transition px-6 py-4 rounded-xl text-white font-semibold shadow-lg">
    Search
  </button>
</div>


          <h2 className="text-6xl md:text-7xl font-extrabold leading-snug text-gray-500 drop-shadow-lg text-center md:text-left">
  Find your dream job
</h2>
<p className="text-xl md:text-2xl text-gray-500 drop-shadow-md max-w-lg text-center md:text-left mt-4">
  Search thousands of jobs, explore top companies, and apply for your next career opportunity.
</p>

        </div>

      
        <div className="flex-1 hidden md:flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80" // professional office / work image
            alt="Professional job search illustration"
            className="rounded-3xl shadow-2xl max-w-full"
          />
        </div>
      </main>

      <footer className="bg-blue-900/90 backdrop-blur-md px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm mt-auto">
        <div>© 2024 JobPortal</div>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#privacy" className="hover:text-green-400 transition">Privacy</a>
          <a href="#terms" className="hover:text-green-400 transition">Terms</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
