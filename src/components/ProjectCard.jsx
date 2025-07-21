import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Eye,
  Star,
  GitBranch,
} from "lucide-react";

const ProjectCard = ({ project, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const {
    title = "Project Title",
    description = "Project description goes here...",
    image = "/api/placeholder/400/250",
    technologies = [],
    liveUrl = "#",
    githubUrl = "#",
    category = "Web Development",
    date = "2024",
    status = "Completed",
    featured = false,
    stats = {
      views: 0,
      stars: 0,
      forks: 0,
    },
  } = project || {};

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "text-green-400 bg-green-500/10 border-green-500/30";
      case "in-progress":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
      case "planning":
        return "text-blue-400 bg-blue-500/10 border-blue-500/30";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/30";
    }
  };

  return (
    <div
      className={`group relative flex flex-col justify-between h-[480px] bg-slate-800/50 border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
        featured ? "ring-2 ring-cyan-500/20" : ""
      }`}
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-full">
          <Star size={14} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Status Badge */}
      <div
        className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
          status
        )}`}
      >
        {status}
      </div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-slate-700/50 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
          </div>
        )}

        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } ${isHovered ? "scale-110" : "scale-100"}`}
          onLoad={handleImageLoad}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-60"
          }`}
        />

        {/* Hover Actions */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink
                size={16}
                className="group-hover/btn:scale-110 transition-transform duration-300"
              />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-purple-500 hover:border-purple-500 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Github
              size={16}
              className="group-hover/btn:scale-110 transition-transform duration-300"
            />
            <span className="text-sm font-medium">Code</span>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-cyan-400 text-sm">
            <Tag size={14} />
            <span>{category}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(showAllTech ? technologies : technologies.slice(0, 4)).map(
            (tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md border border-slate-600/30 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
              >
                {tech}
              </span>
            )
          )}

          {technologies.length > 4 && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="px-2 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-xs rounded-md border border-cyan-500/30 transition-all duration-300"
            >
              {showAllTech ? "Show less" : `+${technologies.length - 4} more`}
            </button>
          )}
        </div>

        {/* Stats */}
        {(stats.views > 0 || stats.stars > 0 || stats.forks > 0) && (
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            {stats.views > 0 && (
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{stats.views}</span>
              </div>
            )}
            {stats.stars > 0 && (
              <div className="flex items-center gap-1">
                <Star size={14} />
                <span>{stats.stars}</span>
              </div>
            )}
            {stats.forks > 0 && (
              <div className="flex items-center gap-1">
                <GitBranch size={14} />
                <span>{stats.forks}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
          isHovered ? "shadow-2xl shadow-cyan-500/20" : ""
        }`}
      />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
