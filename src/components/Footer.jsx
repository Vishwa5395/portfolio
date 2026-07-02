import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Vishwa5395',
      accent: 'bg-brutal-black text-white hover:bg-brutal-yellow hover:text-brutal-black',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/vishwanath-tiwari-779528287/',
      accent: 'bg-brutal-blue text-white hover:bg-brutal-lime hover:text-brutal-black',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:tiwarivishwanath5395@gmail.com',
      accent: 'bg-brutal-pink text-white hover:bg-brutal-mint hover:text-brutal-black',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-cream dark:bg-dark-bg border-t-3 border-brutal-black dark:border-dark-border overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          {/* Brand Section */}
          <div className="max-w-md w-full text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 bg-brutal-black text-white font-grotesk font-bold text-2xl border-3 border-brutal-black rounded-md shadow-brutal-sm">
                V.
              </div>
              <h3 className="text-xl font-bold font-grotesk text-brutal-black dark:text-dark-text">
                Vishwanath
              </h3>
            </div>
            <p className="text-brutal-black/70 dark:text-dark-text/70 text-sm leading-relaxed font-grotesk">
              Passionate developer crafting digital experiences with modern technologies.
              Always learning, always building.
            </p>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-brutal-black dark:text-dark-text font-bold font-grotesk mb-4 flex items-center gap-2">
              <span className="w-2 h-5 bg-brutal-pink rounded-sm"></span>
              Let's Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal-sm dark:shadow-brutal-dark-sm transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal hover:animate-wiggle ${social.accent}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-brutal-black/60 dark:text-dark-text/60 text-sm font-grotesk">
              Open to collaborations and new opportunities
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[3px] bg-brutal-black dark:bg-dark-border mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-sm font-mono">
            <span className="px-2 py-0.5 font-bold text-brutal-black dark:text-dark-text text-base tracking-wide" style={{ boxDecorationBreak: 'clone' }}>
              Handcrafted by Me © 2024 using
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-brutal-yellow border-2 border-brutal-black rounded-md text-brutal-black text-xs font-mono font-bold shadow-brutal-sm">
              React & Tailwind CSS
            </span>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group p-2 bg-brutal-lime border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal-sm dark:shadow-brutal-dark-sm transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="text-brutal-black group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;