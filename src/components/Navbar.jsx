import React, { useEffect, useState } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

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
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-dark-card border-b-3 border-brutal-black dark:border-dark-border shadow-brutal-sm dark:shadow-brutal-dark-sm py-2'
          : 'bg-cream dark:bg-dark-bg border-b-3 border-brutal-black dark:border-dark-border py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick(navItems[0])}
              className="group flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="bg-brutal-lime border-3 border-brutal-black dark:border-dark-border rounded-md px-3 py-1 shadow-brutal-sm dark:shadow-brutal-dark-sm group-hover:shadow-brutal dark:group-hover:shadow-brutal-dark group-hover:-translate-y-0.5 transition-all duration-200">
                <span className="text-2xl font-grotesk font-black text-brutal-black">V.</span>
              </div>
              <span className="hidden sm:block text-xl font-grotesk font-bold text-brutal-black dark:text-dark-text">
                Portfolio
              </span>
            </button>

            {/* Desktop Menu + Theme Toggle */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-md text-sm font-grotesk font-bold transition-all duration-200 hover:-translate-y-0.5 ${
                    isActive(item)
                      ? 'bg-brutal-lime text-brutal-black border-3 border-brutal-black dark:border-dark-border shadow-brutal-sm dark:shadow-brutal-dark-sm'
                      : 'text-brutal-black dark:text-dark-text hover:bg-brutal-lime/30 border-3 border-transparent hover:border-brutal-black dark:hover:border-dark-border'
                  }`}
                >
                  <span className="text-brutal-black dark:text-dark-text">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {isActive(item) && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brutal-black dark:bg-dark-text rounded-sm rotate-45"></div>
                  )}
                </button>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal-sm dark:shadow-brutal-dark-sm bg-white dark:bg-dark-surface text-brutal-black dark:text-brutal-yellow hover:-translate-y-0.5 hover:shadow-brutal dark:hover:shadow-brutal-dark transition-all duration-200"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 bg-white dark:bg-dark-surface border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal-sm dark:shadow-brutal-dark-sm text-brutal-black dark:text-brutal-yellow transition-all duration-200"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 bg-white dark:bg-dark-surface border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal-sm dark:shadow-brutal-dark-sm text-brutal-black dark:text-dark-text hover:bg-brutal-lime hover:-translate-y-0.5 hover:shadow-brutal transition-all duration-200"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 mt-4'
              : 'max-h-0 opacity-0 mt-0'
          }`}>
            <div className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal dark:shadow-brutal-dark p-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-4 py-3 px-4 rounded-md font-grotesk font-bold text-brutal-black dark:text-dark-text transition-all duration-200 hover:translate-x-1 w-full text-left ${
                    isActive(item)
                      ? 'bg-brutal-lime border-3 border-brutal-black dark:border-dark-border shadow-brutal-sm dark:shadow-brutal-dark-sm'
                      : 'hover:bg-cream dark:hover:bg-dark-surface border-3 border-transparent'
                  }`}
                  style={{
                    animationDelay: `${index * 0.08}s`,
                    animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <span className="text-brutal-black dark:text-dark-text">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {isActive(item) && (
                    <div className="ml-auto px-2 py-0.5 bg-brutal-black text-white text-xs font-mono rounded-sm">
                      ACTIVE
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-brutal-black/40 z-30 md:hidden"
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
