import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, AlertCircle, Loader2, Briefcase, TrendingUp, Users, Award } from "lucide-react";

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

  const features = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "10,000+ Jobs",
      description: "Access opportunities worldwide"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Personalized recommendations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Top Companies",
      description: "Connect with industry leaders"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Success Stories",
      description: "Join thousands of professionals"
    }
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-transparent to-purple-900/50"></div>

      
      <div className="relative z-10 hidden lg:flex flex-1 flex-col justify-between p-12 text-white">
        <div className="space-y-8">
         
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
              <Briefcase className="w-8 h-8" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              JobPortal
            </span>
          </div>

          
          <div className="space-y-6 max-w-xl">
            <h1 className="text-6xl font-bold leading-tight">
              Welcome Back to Your
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Career Journey
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join thousands of professionals finding their dream jobs. Your next opportunity is just a login away.
            </p>
          </div>

          
          <div className="grid grid-cols-2 gap-4 pt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 group"
              >
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <div>
            <p className="text-3xl font-bold">500K+</p>
            <p className="text-sm text-gray-400">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold">15K+</p>
            <p className="text-sm text-gray-400">Companies</p>
          </div>
          <div>
            <p className="text-3xl font-bold">98%</p>
            <p className="text-sm text-gray-400">Success Rate</p>
          </div>
        </div>
      </div>

     
      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
         
          <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-lg">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">JobPortal</span>
          </div>

         
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Sign In
              </h2>
              <p className="text-gray-600">
                Enter your credentials to access your account
              </p>
            </div>

            
            {errorMsg && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3 animate-shake">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{errorMsg}</p>
              </div>
            )}

            
            <form onSubmit={handleLogin} className="space-y-5">
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    required
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

             
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="ml-2 text-gray-600 group-hover:text-gray-900">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin w-5 h-5 mr-2" />
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

           
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  New to JobPortal?
                </span>
              </div>
            </div>

            
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>

         
          <div className="mt-8 text-center text-sm text-gray-300">
            <p>Trusted by professionals at</p>
            <div className="flex items-center justify-center space-x-6 mt-3 opacity-60">
              <span className="font-semibold">Google</span>
              <span>•</span>
              <span className="font-semibold">Microsoft</span>
              <span>•</span>
              <span className="font-semibold">Amazon</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;