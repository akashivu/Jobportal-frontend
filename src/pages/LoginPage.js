import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      const { token, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role === "USER") navigate("/jobs");
      else if (role === "RECRUITER") navigate("/post-job");
    } catch (error) {
      setErrorMsg("Invalid credentials or server error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a23] text-white flex items-center justify-center px-4 font-sans">
      <div className="bg-[#1a1a3d] w-full max-w-sm rounded-xl shadow-lg p-6 text-center space-y-6">
        <h1 className="text-3xl font-bold">Login</h1>

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-right text-sm">
            <a href="#" className="text-blue-400 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm">
          Don’t have an account?{" "}
         <Link to="/register" className="text-blue-400 hover:underline">
  Sign in
</Link>
        </p>

        <div className="text-xs border-t border-gray-600 pt-4 space-y-1">
          <p>© 2024 JobPortal</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-400 hover:underline">Privacy</a>
            <a href="#" className="text-blue-400 hover:underline">Terms</a>
            <a href="#" className="text-blue-400 hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;