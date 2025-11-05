import React, { useState } from "react";
import { Building2, Briefcase, MapPin, TrendingUp, Users, ArrowRight, Star } from "lucide-react";

const COMPANIES = [
  {
    name: "TechCorp Solutions",
    location: "San Francisco, CA",
    openings: 12,
    industry: "Software Development",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
    tagline: "Innovating the future of enterprise software.",
    rating: 4.8,
    employees: "500+"
  },
  {
    name: "Designify Studio",
    location: "New York, NY",
    openings: 7,
    industry: "UI/UX & Branding",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    tagline: "We craft digital experiences that inspire.",
    rating: 4.9,
    employees: "200+"
  },
  {
    name: "FinEdge Analytics",
    location: "London, UK",
    openings: 9,
    industry: "Finance & AI",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968915.png",
    tagline: "Turning financial data into actionable insights.",
    rating: 4.7,
    employees: "1000+"
  },
  {
    name: "HealthPlus Care",
    location: "Bangalore, India",
    openings: 15,
    industry: "Healthcare Tech",
    logo: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
    tagline: "Empowering hospitals with smart healthcare systems.",
    rating: 4.6,
    employees: "750+"
  },
  {
    name: "EduSmart Learning",
    location: "Toronto, Canada",
    openings: 5,
    industry: "EdTech",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
    tagline: "Revolutionizing online education globally.",
    rating: 4.8,
    employees: "300+"
  },
  {
    name: "CloudNine Infrastructure",
    location: "Seattle, WA",
    openings: 18,
    industry: "Cloud Computing",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
    tagline: "Building the infrastructure for tomorrow's web.",
    rating: 4.9,
    employees: "2000+"
  },
];

const STATS = [
  { label: "Companies", value: "500+", icon: Building2 },
  { label: "Active Jobs", value: "2,500+", icon: Briefcase },
  { label: "Candidates Hired", value: "10,000+", icon: Users },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
];

export default function Companies() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 py-20 relative overflow-hidden">
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
       
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Trusted by Industry Leaders
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Featured Companies
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connect with top-tier organizations actively hiring talented professionals across diverse industries and locations worldwide.
          </p>
        </div>

        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group">
                <Icon className="w-6 h-6 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {COMPANIES.map((company, index) => (
            <div
              key={company.name}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
               
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-slate-400 text-sm">{company.industry}</p>
                    </div>
                  </div>
                </div>

                
                <p className="text-slate-300 text-sm mb-5 leading-relaxed italic border-l-2 border-blue-500/30 pl-3">
                  {company.tagline}
                </p>

                
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-700/50">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">{company.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>{company.employees}</span>
                  </div>
                </div>

               
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-semibold">
                    <Briefcase className="w-4 h-4" />
                    <span>{company.openings}</span>
                  </div>
                </div>

                
                <div className={`mt-4 transition-all duration-300 ${hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                    View Open Positions
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-pulse opacity-30"></div>
          <div className="relative bg-slate-900 rounded-3xl p-12 text-center">
            <Building2 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Are You a Recruiter?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our platform and connect with thousands of qualified candidates. Post unlimited jobs and find your perfect hire today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/register"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Register Your Company
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold border border-slate-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            All companies are verified and actively recruiting • Updated daily
          </p>
        </div>
      </div>
    </section>
  );
}