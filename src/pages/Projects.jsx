import React, { useState, useEffect } from 'react';
import { Search, Filter, Github, ExternalLink, Calendar, Code, Star, Eye, GitBranch } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Web-Crawler',
      description: 'Built a custom web crawler to intelligently extract content and metadata from websites for efficient data indexing and search.',
      image: 'https://i.postimg.cc/wxmfSvwh/web-crawler.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'full-stack',
      githubUrl: 'https://github.com/Vishwa5395/Web-Crawler',
      liveUrl: null,
      status: 'completed',
      date: '15-01-2025'
    },
    {
      id: 2,
      title: 'Compression Toolkit',
      description: 'Built a web-based Compression Toolkit to visualize and apply popular data compression algorithms like Huffman and Run-Length in real-time.',
      image: 'https://i.postimg.cc/pTGmCRFr/compressio-toolkit.png',
      technologies: ['HTML', 'JavaScript', 'CSS', 'Compression algorithms'],
      category: 'backend',
      githubUrl: 'https://github.com/Vishwa5395/Compression-toolkit',
      liveUrl: 'https://compression-toolkit.vercel.app/',
      status: 'completed',
      date: '06-05-2025'
    },
    {
      id: 3,
      title: 'Weather Prediction Model',
      description: 'A Flask-based weather prediction app that uses machine learning and rolling statistics to forecast future average temperatures for selected cities.',
      image: 'https://i.postimg.cc/3wLxmhrr/weather-prediction.png',
      technologies: ['Python', 'Flask', 'scikit-learn', 'Ridge Regression'],
      category: 'machine-learning',
      githubUrl: 'https://github.com/Vishwa5395/weather_deploy',
      liveUrl: null,
      status: 'completed',
      date: '10-06-2025'
    },
    {
      id: 4,
      title: 'Faculty Ranker',
      description: 'Faculty Ranker is a secure college-exclusive platform where students can rate faculty, view rankings, and add new entries—with built-in authentication and moderation controls.',
      image: 'https://i.postimg.cc/6pdnRMdP/faculty-ranker.png',
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB','JWT Authentication','OAuth'],
      category: 'full-stack',
      githubUrl: 'https://github.com/Vishwa5395/faculty_ranker',
      liveUrl: 'https://new-faculty-ranker.vercel.app',
      status: 'completed',
      date: '20-06-2025'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      image: 'https://i.postimg.cc/dQ6sxpFF/portfolio-website-logo.png',
      technologies: ['React', 'Tailwind CSS', 'Lucide-React'],
      category: 'frontend',
      githubUrl: 'https://github.com/Vishwa5395/portfolio',
      liveUrl: 'https://vishwanath.dev',
      status: 'completed',
      date: '23-06-2025'
    },
    {
      id: 6,
      title: 'Language Detection',
      description: 'A multilingual language detection model that accurately identifies text language from 22 supported languages using NLP techniques.',
      image: 'https://i.postimg.cc/7YXNbHyR/Language-detection.png',
      technologies: ['Python', 'SciKit-Learn', 'Naive-Bayes', 'TF-IDF Vectorizer'],
      category: 'machine-learning',
      githubUrl: 'https://github.com/Vishwa5395/Language-Detection',
      liveUrl: null,
      status: 'completed',
      date: '12-12-2024'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'full-stack', name: 'Full Stack', count: projects.filter(p => p.category === 'full-stack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'machine-learning', name: 'ML/AI', count: projects.filter(p => p.category === 'machine-learning').length }
  ];

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      let filtered = projects;

      // Filter by category
      if (selectedFilter !== 'all') {
        filtered = filtered.filter(project => project.category === selectedFilter);
      }

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(project =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some(tech => 
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }

      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedFilter]);

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    inProgress: projects.filter(p => p.status === 'in-progress').length,
    totalStars: projects.reduce((sum, p) => sum + p.stars, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title and Description */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my collection of projects showcasing modern web development, 
              innovative solutions, and cutting-edge technologies.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Total Projects', value: projectStats.total, icon: <Code size={24} />, color: 'cyan' },
              { label: 'Completed', value: projectStats.completed, icon: <Star size={24} />, color: 'green' },
              { label: 'In Progress', value: projectStats.inProgress, icon: <GitBranch size={24} />, color: 'yellow' },
            ].map((stat, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300">
                <div className={`text-${stat.color}-400 mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search and Filter Section */}
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filters */}
              <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedFilter(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                      selectedFilter === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700/70 hover:text-white'
                    }`}
                  >
                    <Filter size={16} />
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedFilter === category.id ? 'bg-white/20' : 'bg-slate-600/50'
                    }`}>
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
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {isLoading ? (
          // Loading State
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10 animate-pulse">
                <div className="h-48 bg-slate-700/50 rounded-xl mb-4"></div>
                <div className="h-6 bg-slate-700/50 rounded mb-3"></div>
                <div className="h-4 bg-slate-700/50 rounded mb-2"></div>
                <div className="h-4 bg-slate-700/50 rounded w-3/4 mb-4"></div>
                <div className="flex gap-2 mb-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-6 w-16 bg-slate-700/50 rounded"></div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="h-10 w-20 bg-slate-700/50 rounded"></div>
                  <div className="h-10 w-20 bg-slate-700/50 rounded"></div>
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
          // No Results State
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              No projects match your current search criteria. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Clear Filters
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