import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Code, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "Full Stack Developer",
    "AI/ML Learner",
    "Frontend Engineer",
    "Backend Developer",
    "Problem Solver"
  ];

  const stats = [
    { label: "Projects", value: "5+", icon: <Code size={24} />, color: "bg-brutal-lime", textColor: "text-brutal-black" },
    { label: "Technologies", value: "15+", icon: <Zap size={24} />, color: "bg-brutal-pink", textColor: "text-white" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cream dark:bg-dark-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Dot Grid Pattern Overlay */}
      <div className="dot-grid absolute inset-0 pointer-events-none"></div>

      {/* Main Bento Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10 w-full">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-auto transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >

          {/* ===== TILE 1: Name + Role (Large — spans 2 cols) ===== */}
          <div className="sm:col-span-2 bg-brutal-black text-white border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal dark:shadow-brutal-dark p-6 sm:p-8 flex flex-col justify-center min-h-[200px] sm:min-h-[240px]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-mono text-brutal-lime tracking-widest uppercase">Hello, I'm</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-grotesk font-extrabold text-white leading-none mb-3">
              Vishwanath
              <span className="inline-block ml-2 sm:ml-3 animate-wave text-4xl sm:text-5xl md:text-7xl" role="img" aria-label="waving hand">👋</span>
            </h1>
            <div className="flex items-center gap-2 min-h-[2.5rem]">
              <span className="animate-spin-slow inline-block text-xl">⚡</span>
              <span className="font-mono text-lg sm:text-xl text-brutal-lime font-semibold tracking-tight">
                {roles[currentRole]}
              </span>
              <span className="w-0.5 h-5 bg-brutal-lime animate-pulse inline-block"></span>
            </div>
          </div>

          {/* ===== TILE 2: Profile Image (small square) ===== */}
          <div className="bg-brutal-yellow border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal dark:shadow-brutal-dark p-3 flex items-center justify-center">
            <div className="w-full aspect-square rounded-md border-3 border-brutal-black dark:border-dark-border shadow-brutal-sm dark:shadow-brutal-dark-sm overflow-hidden">
              <img
                src="https://i.postimg.cc/PJ0WM2kn/Whats-App-Image-2025-07-21-at-08-00-49.jpg"
                alt="Vishwanath"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ===== TILE 3: Social Links (small) ===== */}
          <div className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal dark:shadow-brutal-dark p-4 sm:p-5 flex flex-col items-center justify-center gap-3">
            <span className="font-grotesk font-bold text-brutal-black dark:text-dark-text text-sm uppercase tracking-wider">Connect</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Vishwa5395"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-brutal-black text-white border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal-sm dark:shadow-brutal-dark-sm flex items-center justify-center hover:-translate-y-1 hover:shadow-brutal transition-all duration-200 hover:animate-wiggle"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwanath-tiwari-779528287/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-brutal-blue text-white border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal-sm dark:shadow-brutal-dark-sm flex items-center justify-center hover:-translate-y-1 hover:shadow-brutal transition-all duration-200 hover:animate-wiggle"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:tiwarivishwanath5395@gmail.com"
                className="group w-12 h-12 bg-brutal-pink text-white border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal-sm dark:shadow-brutal-dark-sm flex items-center justify-center hover:-translate-y-1 hover:shadow-brutal transition-all duration-200 hover:animate-wiggle"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* ===== TILE 4: Description + Location + Sticker (medium — spans 2 cols) ===== */}
          <div className="sm:col-span-2 bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal dark:shadow-brutal-dark p-6 sm:p-8 relative overflow-hidden">
            {/* Open to Work sticker */}
            <div className="sticker absolute -top-1 -right-1 sm:top-3 sm:right-3 bg-brutal-lime text-brutal-black font-grotesk font-extrabold text-xs sm:text-sm px-3 py-1.5 border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal-sm dark:shadow-brutal-dark-sm z-10">
              Open to Work ✦
            </div>
            <p className="text-base sm:text-lg text-brutal-black dark:text-dark-text leading-relaxed font-grotesk max-w-xl mb-4 pr-0 sm:pr-20">
              Passionate about creating exceptional digital experiences with cutting-edge technologies.
              I specialize in building scalable, user-centric applications that bridge innovation and functionality.
            </p>
            <div className="flex items-center gap-2 text-brutal-black dark:text-dark-text font-mono text-sm">
              <MapPin size={16} className="text-brutal-pink flex-shrink-0" />
              <span>Kanpur, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* ===== TILES 5-7: Stats (3 small tiles) ===== */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} ${stat.textColor} border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal dark:shadow-brutal-dark p-4 sm:p-5 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 group`}
            >
              <div className="mb-1 opacity-80 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-grotesk font-extrabold leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider opacity-80">
                {stat.label}
              </div>
            </div>
          ))}

          {/* ===== TILE 8: CTA Buttons (medium — spans 2+ cols on larger) ===== */}
          <div className="sm:col-span-2 lg:col-span-2 bg-cream-dark dark:bg-dark-surface border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal dark:shadow-brutal-dark p-5 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="/Ref resume 7.pdf"
              download
              className="btn-brutal flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 font-grotesk font-bold text-base w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-brutal-outline flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 font-grotesk font-bold text-base w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* ===== TILE 9: Fun small accent tile ===== */}
          <div className="bg-brutal-purple text-white border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal dark:shadow-brutal-dark p-4 sm:p-5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl sm:text-4xl mb-1 animate-float">🎯</span>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">Let's Build<br/>Something</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="group flex flex-col items-center gap-1 text-brutal-black dark:text-dark-text hover:-translate-y-1 transition-transform duration-200"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} className="animate-bounce" strokeWidth={3} />
        </button>
      </div>
    </section>
  );
};

export default Hero;