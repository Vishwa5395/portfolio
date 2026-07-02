import React, { useState, useMemo } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Eye,
  Star,
  GitBranch,
} from "lucide-react";

const HOVER_EMOJIS = ["🚀", "⭐", "💡", "🔥", "🎯"];

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
        return "bg-brutal-mint text-brutal-black border-brutal-black";
      case "in-progress":
        return "bg-brutal-yellow text-brutal-black border-brutal-black";
      case "planning":
        return "bg-brutal-blue text-white border-brutal-black";
      default:
        return "bg-white text-brutal-black border-brutal-black";
    }
  };

  // Pick a stable random emoji per card based on index
  const hoverEmoji = useMemo(
    () => HOVER_EMOJIS[index % HOVER_EMOJIS.length],
    [index]
  );

  return (
    <div
      className={`group relative flex flex-col justify-between min-h-[400px] sm:h-[480px] bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md overflow-hidden transition-all duration-200 ${
        isHovered
          ? "-translate-x-[2px] -translate-y-[2px] shadow-brutal-lg dark:shadow-brutal-dark-lg"
          : "shadow-brutal dark:shadow-brutal-dark"
      } ${featured ? "ring-2 ring-brutal-lime" : ""}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge — sticker style */}
      {featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-3 py-1 bg-brutal-lime text-brutal-black text-sm font-bold font-grotesk border-3 border-brutal-black rounded-md shadow-brutal-sm rotate-[-3deg]">
          <Star size={14} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Status Badge — chip-brutal */}
      <div
        className={`absolute top-3 right-3 z-20 px-3 py-1 rounded-md text-xs font-bold font-mono border-2 ${getStatusColor(
          status
        )}`}
      >
        {status}
      </div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden border-b-3 border-brutal-black dark:border-dark-border">
        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-cream-dark dark:bg-dark-surface animate-pulse flex items-center justify-center">
            <div className="w-10 h-10 border-3 border-brutal-black border-t-brutal-lime rounded-md animate-spin"></div>
          </div>
        )}

        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } ${isHovered ? "scale-105" : "scale-100"}`}
          onLoad={handleImageLoad}
        />

        {/* Overlay — simple semi-transparent black on hover, NO gradient */}
        <div
          className={`absolute inset-0 bg-brutal-black transition-all duration-300 ${
            isHovered ? "opacity-50" : "opacity-0"
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
              className="flex items-center gap-2 bg-brutal-lime text-brutal-black px-4 py-2 rounded-md border-3 border-brutal-black shadow-brutal-sm font-bold font-mono text-sm hover:-translate-y-[2px] hover:shadow-brutal transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-brutal-black px-4 py-2 rounded-md border-3 border-brutal-black shadow-brutal-sm font-bold font-mono text-sm hover:-translate-y-[2px] hover:shadow-brutal transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5 flex flex-col justify-between flex-grow">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-brutal-black dark:text-dark-text font-mono text-sm">
            <Tag size={14} className="text-brutal-pink" />
            <span className="font-bold">{category}</span>
          </div>
          <div className="flex items-center gap-1 text-brutal-black dark:text-dark-text font-mono text-sm opacity-70">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>

        {/* Title with hover emoji */}
        <h3 className="text-xl font-bold text-brutal-black dark:text-dark-text font-grotesk mb-3 flex items-center gap-2">
          {title}
          <span
            className={`transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-x-0 animate-wobble"
                : "opacity-0 -translate-x-2"
            }`}
          >
            {hoverEmoji}
          </span>
        </h3>

        {/* Description */}
        <p className="text-brutal-black dark:text-dark-text text-sm leading-relaxed mb-4 line-clamp-3 opacity-75">
          {description}
        </p>

        {/* Technologies — chip-brutal */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(showAllTech ? technologies : technologies.slice(0, 4)).map(
            (tech, techIndex) => (
              <span
                key={techIndex}
                className="chip-brutal"
              >
                {tech}
              </span>
            )
          )}

          {technologies.length > 4 && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="px-2 py-1 bg-brutal-lime text-brutal-black text-xs rounded-md border-2 border-brutal-black font-bold font-mono hover:-translate-y-[1px] hover:shadow-brutal-sm transition-all duration-200"
            >
              {showAllTech ? "Show less" : `+${technologies.length - 4} more`}
            </button>
          )}
        </div>

        {/* Stats */}
        {(stats.views > 0 || stats.stars > 0 || stats.forks > 0) && (
          <div className="flex items-center gap-4 text-brutal-black dark:text-dark-text text-sm font-mono border-t-2 border-brutal-black dark:border-dark-border pt-3">
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
