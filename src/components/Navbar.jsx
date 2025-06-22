import React, { useEffect, useState } from 'react';
import { Menu, X, Code2, Home, User, Briefcase, Mail } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', path: '/', hash: '#home', icon: <Home size={18} />, id: 'home' },
    { label: 'About', path: '/', hash: '#about', icon: <User size={18} />, id: 'about' },
    { label: 'Projects', path: '/projects', hash: null, icon: <Briefcase size={18} />, id: 'projects' },
    { label: 'Contact', path: '/', hash: '#contact', icon: <Mail size={18} />, id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (location.pathname === '/projects') {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);

    if (item.path === '/projects') {
      navigate('/projects');
    } else if (item.path === '/') {
      if (location.pathname !== '/') {
        // Navigate to home, then scroll after slight delay
        navigate('/');
        setTimeout(() => {
          if (item.hash) {
            const element = document.querySelector(item.hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }, 400); // delay to ensure home page is mounted
      } else {
        // Already on home, scroll immediately
        if (item.hash) {
          const element = document.querySelector(item.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    }
  };


  const isActive = (item) => {
    if (location.pathname === '/projects' && item.id === 'projects') return true;
    return location.pathname === '/' && activeSection === item.id;
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick(navItems[0])}
              className="group flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300"
            >
              <div className="p-2 bg-slate-800/50 rounded-lg border border-cyan-500/30 group-hover:border-cyan-500/60 group-hover:bg-cyan-500/10 transition-all duration-300">
                <Code2 size={24} className="text-cyan-400" />
              </div>
              <span className="hidden sm:block">Portfolio</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-slate-800/30 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${isActive(item)
                        ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <span className={`transition-all duration-300 ${isActive(item) ? 'text-white' : 'text-gray-400'}`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    {isActive(item) && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-3 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                    }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen
              ? 'max-h-96 opacity-100 mt-6'
              : 'max-h-0 opacity-0 mt-0'
            }`}>
            <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-4 py-4 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:translate-x-2 w-full text-left ${isActive(item) ? 'text-cyan-400 bg-cyan-500/10 border-l-4 border-cyan-500' : ''
                    }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <span className={`transition-colors duration-300 ${isActive(item) ? 'text-cyan-400' : 'text-gray-400'
                    }`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                  {isActive(item) && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
