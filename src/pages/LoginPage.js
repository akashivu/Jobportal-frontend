import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { username: email, password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      const { token, role, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      if (user) localStorage.setItem("user", JSON.stringify(user));

      if (role === "USER") navigate("/jobs");
      else if (role === "RECRUITER") navigate("/post-job");
      else navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 401) setErrorMsg("Invalid email or password");
        else if (status === 403) setErrorMsg("Access forbidden");
        else setErrorMsg(error.response.data?.message || "Login failed");
      } else {
        setErrorMsg("Cannot connect to server. Try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-blue-900 to-blue-800 text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Left Hero Text + Form */}
      <div className="relative z-10 flex-1 flex flex-col items-center md:items-start justify-center px-8 py-16 gap-8">
        <div className="max-w-lg space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-snug drop-shadow-lg">
            Welcome Back
          </h2>
          <p className="text-xl md:text-2xl drop-shadow-md text-gray-200">
            Login to access thousands of jobs and manage your applications easily.
          </p>

          <div className="bg-white/90 dark:bg-gray-900 rounded-3xl shadow-2xl p-8 w-full backdrop-blur-md">
            {errorMsg && (
              <p className="text-red-500 bg-red-100 dark:bg-red-900/40 dark:text-red-300 p-2 rounded-md mb-3 text-center text-sm">
                {errorMsg}
              </p>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:border-cyan-500 transition placeholder-gray-400"
              />

              <div className="text-right text-sm">
                <Link to="/" className="text-cyan-600 hover:text-cyan-700">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-6">
              Don't have an account?{" "}
              <Link to="/register" className="text-cyan-600 hover:text-cyan-700 font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>

 {/* Optional right-side illustration */}
<div className="relative z-10 hidden md:flex flex-1 justify-center items-center px-8">
  <img
  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  alt="Professional login illustration"
  className="rounded-3xl shadow-2xl max-w-full"
/>

</div>


    </div>
  );
};

export default LoginPage;
