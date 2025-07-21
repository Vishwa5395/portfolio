import React from 'react';
import { Heart, Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Vishwa5395',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/vishwanath-tiwari-779528287/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:tiwarivishwanath5395@gmail.com',
      color: 'hover:text-cyan-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-900/95 border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #06b6d4 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          {/* Brand Section */}
          <div className="max-w-md w-full text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-800/50 rounded-lg border border-cyan-500/30">
                <Code2 size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Vishwanath
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate developer crafting digital experiences with modern technologies.
              Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-cyan-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    className="text-gray-400 hover:text-cyan-400 duration-300 text-sm hover:translate-x-1 transform transition-transform"
                    onClick={() => {
                      if (link === 'Projects') {
                        navigate('/projects');
                      } else {
                        const element = document.getElementById(link.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          navigate('/');
                          setTimeout(() => {
                            const el = document.getElementById(link.toLowerCase());
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 400); // delay for when navigating back to home first
                        }
                      }
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Connect Section */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-purple-500 rounded-full"></span>
              Let's Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-slate-800/50 rounded-lg border border-white/10 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-current/30 hover:bg-current/10`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Open to collaborations and new opportunities
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built by Vishwanath</span>
            <span>•</span>
            <span>© {currentYear}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xs">
              Built with React & Tailwind CSS
            </span>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group p-2 bg-slate-800/50 rounded-full border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>

        {/* Fun Stats */}
        {/* <div className="mt-8 pt-6 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="group">
              <div className="text-2xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                6
              </div>
              <div className="text-xs text-gray-500">Projects</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-green-400 mb-1 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-xs text-gray-500">Commits</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-xs text-gray-500">Learning</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute bottom-8 left-8 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-30"></div>
    </footer>
  );
};

export default Footer;