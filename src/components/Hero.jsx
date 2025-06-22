import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Coffee, Code, Zap, Sparkles } from 'lucide-react';

// TSParticles simulation using CSS animations and React state
const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: ['cyan', 'purple', 'blue', 'pink'][Math.floor(Math.random() * 4)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-1 h-1 bg-${particle.color}-400 rounded-full animate-float-particle`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        />
      ))}
      
      {/* Interactive lines connecting particles */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.slice(0, 20).map((particle, i) => (
          <g key={`line-${i}`}>
            {particles.slice(i + 1, i + 3).map((otherParticle, j) => (
              <line
                key={`${i}-${j}`}
                x1={`${particle.x}%`}
                y1={`${particle.y}%`}
                x2={`${otherParticle.x}%`}
                y2={`${otherParticle.y}%`}
                stroke="url(#particleGradient)"
                strokeWidth="0.5"
                opacity="0.2"
                className="animate-pulse"
              />
            ))}
          </g>
        ))}
        <defs>
          <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const MatrixRain = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]()";
    const newDrops = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      chars: Array.from({ length: 15 }, () => 
        characters[Math.floor(Math.random() * characters.length)]
      ),
      speed: Math.random() * 2 + 1,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute animate-matrix-fall"
          style={{
            left: `${drop.x}%`,
            animationDuration: `${drop.speed * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {drop.chars.map((char, i) => (
            <div
              key={i}
              className="text-cyan-400 text-xs font-mono leading-none opacity-70"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

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
    { label: "Projects Completed", value: "5+", icon: <Code size={20} /> },
    { label: "Technologies Used", value: "15+", icon: <Zap size={20} /> },
    { label: "Coffee Consumed", value: "∞", icon: <Coffee size={20} /> }
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black"
      onMouseMove={handleMouseMove}
    >
      {/* TSParticles-style Background System */}
      <ParticleSystem />
      
      {/* Matrix Rain Effect */}
      <MatrixRain />

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse-slow transform transition-transform duration-1000"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full filter blur-3xl animate-pulse-slow"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['{ }', '< />', '[ ]', '( )', '&&', '||', '=>', '++'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-lg animate-code-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Greeting */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-lg font-medium">
                <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"></div>
                <span className="animate-type-writer">Hello, I'm</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                  Vishwanath
                </span>
              </h1>
              
              {/* Enhanced Role Animation */}
              <div className="text-2xl md:text-3xl text-gray-300 min-h-[3rem] flex items-center">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold animate-fade-in-out">
                  {roles[currentRole]}
                </span>
                <span className="ml-2 w-1 h-6 bg-cyan-400 animate-pulse"></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl animate-slide-up">
              Passionate about creating exceptional digital experiences with cutting-edge technologies. 
              I specialize in building scalable, user-centric applications that bridge innovation and functionality.
            </p>

            {/* Location with enhanced styling */}
            <div className="flex items-center gap-2 text-gray-400 group hover:text-cyan-400 transition-colors duration-300">
              <MapPin size={18} className="text-cyan-400 group-hover:animate-bounce" />
              <span>Kanpur, Uttar Pradesh, India</span>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume.pdf"
                download
                className="group relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Download size={20} className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </a>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex items-center gap-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Mail size={20} className="relative z-10" />
                <span className="relative z-10">Get In Touch</span>
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Vishwa5395"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Github size={24} className="relative z-10 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/vishwanath-tiwari-779528287/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Linkedin size={24} className="relative z-10 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              
              <a
                href="mailto:tiwarivishwanath5395@gmail.com"
                className="group relative p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Mail size={24} className="relative z-10 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image & Stats */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Profile Image Container */}
            <div className="relative group">
              {/* Enhanced Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 scale-110 animate-pulse-glow"></div>
              
              {/* Rotating Border */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full p-1 animate-spin-slow">
                  <div className="w-full h-full bg-slate-900 rounded-full p-4">
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border-4 border-slate-600 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img 
                        src="https://i.postimg.cc/26wmbc7r/Developer6.png" 
                        alt="Vishwanath.jpg" 
                        className="w-full h-full object-cover rounded-full filter brightness-110 contrast-105 group-hover:brightness-125 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-2 text-cyan-400 group-hover:animate-bounce">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{stat.value}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
          >
            <span className="text-sm group-hover:animate-pulse">Scroll Down</span>
            <div className="relative">
              <ChevronDown size={24} className="group-hover:animate-bounce" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-10px) translateX(5px) rotate(90deg); }
          50% { transform: translateY(-20px) translateX(-5px) rotate(180deg); }
          75% { transform: translateY(-10px) translateX(-10px) rotate(270deg); }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes code-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.4; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; filter: blur(20px); }
          50% { opacity: 0.4; filter: blur(15px); }
        }
        
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(10px); }
          10%, 90% { opacity: 1; transform: translateY(0px); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        
        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }
        
        .animate-matrix-fall {
          animation: matrix-fall 10s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        
        .animate-code-float {
          animation: code-float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;