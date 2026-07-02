import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Github,
  ExternalLink,
  Calendar,
  Code,
  Star,
  Eye,
  GitBranch,
} from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Web-Crawler",
      description:
        "Built a custom web crawler to intelligently extract content and metadata from websites for efficient data indexing and search.",
      image: "https://i.postimg.cc/wxmfSvwh/web-crawler.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "full-stack",
      githubUrl: "https://github.com/Vishwa5395/Web-Crawler",
      liveUrl: null,
      status: "completed",
      date: "15-01-2025",
    },
    {
      id: 2,
      title: "Compression Toolkit",
      description:
        "Built a web-based Compression Toolkit to visualize and apply popular data compression algorithms like Huffman and Run-Length in real-time.",
      image: "https://i.postimg.cc/pTGmCRFr/compressio-toolkit.png",
      technologies: ["HTML", "JavaScript", "CSS", "Compression algorithms"],
      category: "backend",
      githubUrl: "https://github.com/Vishwa5395/Compression-toolkit",
      liveUrl: "https://compression-toolkit.vercel.app/",
      status: "completed",
      date: "06-05-2025",
    },
    {
      id: 3,
      title: "Weather Prediction Model",
      description:
        "A Flask-based weather prediction app that uses machine learning and rolling statistics to forecast future average temperatures for selected cities.",
      image: "https://i.postimg.cc/3wLxmhrr/weather-prediction.png",
      technologies: ["Python", "Flask", "scikit-learn", "Ridge Regression"],
      category: "machine-learning",
      githubUrl: "https://github.com/Vishwa5395/weather_deploy",
      liveUrl: null,
      status: "completed",
      date: "10-06-2025",
    },
    {
      id: 4,
      title: "Faculty Ranker",
      description:
        "Faculty Ranker is a secure college-exclusive platform where students can rate faculty, view rankings, and add new entries—with built-in authentication and moderation controls.",
      image: "https://i.postimg.cc/6pdnRMdP/faculty-ranker.png",
      technologies: [
        "React",
        "Express.js",
        "Node.js",
        "MongoDB",
        "JWT Authentication",
        "OAuth",
      ],
      category: "full-stack",
      githubUrl: "https://github.com/Vishwa5395/faculty_ranker",
      liveUrl: "https://new-faculty-ranker.vercel.app",
      status: "completed",
      date: "20-06-2025",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
      image: "https://i.postimg.cc/dQ6sxpFF/portfolio-website-logo.png",
      technologies: ["React", "Tailwind CSS", "Lucide-React"],
      category: "frontend",
      githubUrl: "https://github.com/Vishwa5395/portfolio",
      liveUrl: "https://vishwanath.dev",
      status: "completed",
      date: "23-06-2025",
    },
    {
      id: 6,
      title: "Language Detection",
      description:
        "A multilingual language detection model that accurately identifies text language from 22 supported languages using NLP techniques.",
      image: "https://i.postimg.cc/7YXNbHyR/Language-detection.png",
      technologies: [
        "Python",
        "SciKit-Learn",
        "Naive-Bayes",
        "TF-IDF Vectorizer",
      ],
      category: "machine-learning",
      githubUrl: "https://github.com/Vishwa5395/Language-Detection",
      liveUrl: null,
      status: "completed",
      date: "12-12-2024",
    },
    {
      id: 7,
      title: "AuthForge OTP Microservice",
      description:
        "An enterprise-grade One-Time Password (OTP) microservice built to provide secure RESTful APIs for generating, distributing (via SMTP), and verifying 6-digit OTPs with thread-safe memory caching.",
      image: "https://i.postimg.cc/pTGmCRFr/compressio-toolkit.png", // Kept same as unknown
      technologies: [
        "Java",
        "Spring Boot",
        "REST API",
        "Oracle Cloud (OCI)",
        "Jakarta Mail",
      ],
      category: "backend",
      githubUrl: "https://github.com/Vishwa5395/AuthForge",
      liveUrl: "http://68.233.102.138:8080",
      status: "completed",
      date: "06-25-2026", // Based on your deployment date
    },
    {
      id: 8,
      title: "SwiftMediLink",
      description:
        "A comprehensive healthcare platform designed to seamlessly connect patients with medical professionals, facilitating swift appointment scheduling and secure medical record management.",
      image: "https://i.postimg.cc/6pdnRMdP/faculty-ranker.png", // Kept same as unknown
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "REST API",
        "OAuth",
        "Machine Learning",
        "Three.js",
      ], // Replace with actual tech stack if different
      category: "full-stack",
      githubUrl: "https://github.com/hmm183/SIH",
      liveUrl: "https://swiftmedilink.vercel.app", // Kept same as unknown
      status: "completed",
      date: "07-03-2026", // Today's date, update if needed
    },
    {
      id: 9,
      title: "Captain LLM",
      description:
        "An intelligent AI assistant powered by Large Language Models, designed to provide context-aware responses, automate complex tasks, and enhance user productivity through advanced natural language processing.",
      image: "https://i.postimg.cc/7YXNbHyR/Language-detection.png", // Kept same as unknown
      technologies: ["Python", "LangChain", "Hugging Face", "FastAPI", "React"], // Replace with actual tech stack if different
      category: "machine-learning",
      githubUrl: null,
      liveUrl: null, // Kept same as unknown
      status: "in-progress",
      date: "07-03-2026", // Today's date, update if needed
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "full-stack",
      name: "Full Stack",
      count: projects.filter((p) => p.category === "full-stack").length,
    },
    {
      id: "frontend",
      name: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      name: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
    {
      id: "machine-learning",
      name: "ML/AI",
      count: projects.filter((p) => p.category === "machine-learning").length,
    },
  ];

  useEffect(() => {
    setIsLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      let filtered = projects;

      // Filter by category
      if (selectedFilter !== "all") {
        filtered = filtered.filter(
          (project) => project.category === selectedFilter,
        );
      }

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((tech) =>
              tech.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        );
      }

      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedFilter]);

  const projectStats = {
    total: projects.length,
    completed: projects.filter((p) => p.status === "completed").length,
    inProgress: projects.filter((p) => p.status === "in-progress").length,
    totalStars: projects.reduce((sum, p) => sum + p.stars, 0),
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-dark-bg relative">
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 pointer-events-none"></div>

      {/* Header Section */}
      <div className="pt-28 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Title and Description */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-grotesk text-brutal-black dark:text-dark-text mb-4 uppercase tracking-tight">
              MY PROJECTS
            </h1>
            {/* Thick black divider */}
            <div className="w-40 h-1.5 bg-brutal-black dark:bg-dark-text mx-auto mb-8"></div>
            <p className="text-lg text-brutal-black dark:text-dark-text max-w-3xl mx-auto leading-relaxed font-mono opacity-75">
              Explore my collection of projects showcasing modern web
              development, innovative solutions, and cutting-edge technologies.
            </p>
          </div>

          {/* Stats Grid — Bento cards with accent colors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                label: "Total Projects",
                value: projectStats.total,
                icon: <Code size={24} />,
                bgColor: "bg-brutal-lime",
              },
              {
                label: "Completed",
                value: projectStats.completed,
                icon: <Star size={24} />,
                bgColor: "bg-brutal-mint",
              },
              {
                label: "In Progress",
                value: projectStats.inProgress,
                icon: <GitBranch size={24} />,
                bgColor: "bg-brutal-pink",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} border-3 border-brutal-black dark:border-dark-border rounded-md p-6 text-center shadow-brutal dark:shadow-brutal-dark hover:-translate-y-[2px] hover:shadow-brutal-lg transition-all duration-200`}
              >
                <div className="text-brutal-black mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-brutal-black font-grotesk mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-brutal-black font-mono font-bold uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md p-4 sm:p-6 shadow-brutal dark:shadow-brutal-dark mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brutal-black dark:text-dark-text"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-brutal w-full pl-12 pr-4"
                />
              </div>

              {/* Category Filters — brutalist pill buttons */}
              <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedFilter(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap border-3 border-brutal-black font-bold font-mono text-sm transition-all duration-200 hover:-translate-y-[1px] hover:shadow-brutal-sm ${
                      selectedFilter === category.id
                        ? "bg-brutal-lime text-brutal-black shadow-brutal-sm"
                        : "bg-white dark:bg-dark-surface text-brutal-black dark:text-dark-text"
                    }`}
                  >
                    <Filter size={16} />
                    <span>{category.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-md border-2 border-brutal-black font-bold ${
                        selectedFilter === category.id
                          ? "bg-brutal-black text-white"
                          : "bg-cream"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 relative z-10">
        {isLoading ? (
          // Loading State — brutalist skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md overflow-hidden shadow-brutal dark:shadow-brutal-dark animate-pulse"
              >
                <div className="h-48 bg-cream-dark dark:bg-dark-surface border-b-3 border-brutal-black dark:border-dark-border"></div>
                <div className="p-5">
                  <div className="h-6 bg-cream-dark rounded-md border-2 border-brutal-black mb-3"></div>
                  <div className="h-4 bg-cream-dark rounded-md border-2 border-brutal-black mb-2"></div>
                  <div className="h-4 bg-cream-dark rounded-md border-2 border-brutal-black w-3/4 mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-6 w-16 bg-cream-dark rounded-md border-2 border-brutal-black"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          // Projects Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          // No Results State — big bold with fun emoji
          <div className="text-center py-20">
            <div className="text-7xl mb-6">🧐</div>
            <h3 className="text-3xl font-bold text-brutal-black dark:text-dark-text font-grotesk mb-4 uppercase">
              No Projects Found
            </h3>
            <p className="text-brutal-black dark:text-dark-text font-mono mb-8 max-w-md mx-auto opacity-75">
              No projects match your current search criteria. Try adjusting your
              filters or search terms.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedFilter("all");
              }}
              className="btn-brutal font-bold text-lg px-8 py-3"
            >
              Clear Filters ✕
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Projects;
