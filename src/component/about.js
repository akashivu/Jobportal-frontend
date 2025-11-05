import React from "react";
import { Briefcase, Users, Shield, Zap, CheckCircle, Code } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Job Management",
    description: "Comprehensive job posting and application tracking system"
  },
  {
    icon: Users,
    title: "Dual Interface",
    description: "Separate dashboards for recruiters and job seekers"
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "JWT-based security with role-based access control"
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Instant application status tracking and notifications"
  }
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "JWT", category: "Security" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "REST API", category: "Architecture" },
  { name: "Oracle DB", category: "Database" }
];

export default function About() {
  return (
    <section className="min-h-screen px-4 py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            Full-Stack Application
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">JobPortal</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A modern recruitment platform bridging the gap between talent and opportunity through intelligent design and robust architecture.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Overview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              Platform Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              JobPortal is an enterprise-grade recruitment solution designed to streamline the hiring process. The platform empowers recruiters to efficiently manage job postings and review applications, while providing job seekers with an intuitive interface to discover opportunities and track their application journey.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Built with scalability and performance in mind, JobPortal implements industry best practices including secure authentication, RESTful API design, and responsive user interfaces that work seamlessly across all devices.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Secure</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              Key Features
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Why JobPortal?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Production Ready</h3>
              <p className="text-sm text-blue-100">Built with enterprise standards and best practices</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Scalable Architecture</h3>
              <p className="text-sm text-blue-100">Designed to grow with your business needs</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">User-Centric Design</h3>
              <p className="text-sm text-blue-100">Intuitive interfaces for all user types</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}