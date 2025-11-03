import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../service/AuthService";

const RegisterPage = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
  await registerUser(userData); 

  setSuccessMsg("Registration successful! Redirecting to login...");
  setUserData({ name: "", email: "", password: "" });

  setTimeout(() => navigate("/login"), 2000);
} catch (error) {
  setErrorMsg(error.response?.data?.message || "Registration failed. Please try again.");
} finally {
  setIsLoading(false);
}
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center bg-gradient-to-b from-blue-900 to-blue-800 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center md:justify-start px-8 py-16 gap-12">
        <div className="flex-1 max-w-lg space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-snug drop-shadow-lg">
            Create Your Account
          </h2>
          <p className="text-xl md:text-2xl drop-shadow-md text-gray-200">
            Join thousands of professionals and explore the best job opportunities in your industry.
          </p>

          <div className="bg-white/90 dark:bg-gray-900 rounded-3xl shadow-2xl p-8 w-full backdrop-blur-md">
            {errorMsg && (
              <p className="text-red-500 bg-red-100 dark:bg-red-900/40 dark:text-red-300 p-2 rounded-md mb-3 text-center text-sm">
                {errorMsg}
              </p>
            )}
            {successMsg && (
              <p className="text-green-500 bg-green-100 dark:bg-green-900/40 dark:text-green-300 p-2 rounded-md mb-3 text-center text-sm">
                {successMsg}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                disabled={isLoading}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition placeholder-gray-400 text-gray-800 font-medium"
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                disabled={isLoading}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition placeholder-gray-400 text-gray-800 font-medium"
              />
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                disabled={isLoading}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition placeholder-gray-400 text-gray-800 font-medium"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Registering...
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            </form>

            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-600 hover:text-cyan-700 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

     
      <div className="relative z-10 hidden md:flex flex-1 justify-center items-center px-8">
        <img
             src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="registration"
          className="rounded-3xl shadow-2xl max-w-full"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
