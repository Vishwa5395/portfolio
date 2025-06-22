import React, { useState, useEffect } from 'react';
import { Code, Sparkles } from 'lucide-react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Components...",
    "Preparing Experience...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 120);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Main Loading Spinner */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-gray-700/30 rounded-full"></div>
          
          {/* Spinning Ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-cyan-400 rounded-full animate-spin"></div>
          
          {/* Inner Pulsing Ring */}
          <div className="absolute inset-4 border-2 border-transparent border-b-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          
          {/* Center Icon Container */}
          <div className="absolute inset-8 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Code className="text-cyan-400 animate-pulse" size={40} />
          </div>
          
          {/* Floating Sparkles */}
          <Sparkles 
            className="absolute -top-2 -right-2 text-purple-400 animate-bounce" 
            size={20}
            style={{ animationDelay: '0.5s' }}
          />
          <Sparkles 
            className="absolute -bottom-2 -left-2 text-cyan-400 animate-bounce" 
            size={16}
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        {/* Loading Text */}
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Vishwanath's Portfolio
          </h2>
          
          <p 
            key={currentText}
            className="text-lg text-gray-300 font-mono animate-fade-in"
          >
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading...</span>
            <span>{Math.round(loadingProgress)}%</span>
          </div>
          
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner border border-slate-700">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(loadingProgress, 100)}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-75"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.4s'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;