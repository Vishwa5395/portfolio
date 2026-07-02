import React, { useState, useEffect } from 'react';

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
    <div className="fixed inset-0 bg-cream dark:bg-dark-bg z-50 flex items-center justify-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40"></div>

      <div className="text-center relative z-10">
        {/* Big Bold Name with bouncing emoji */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-grotesk font-black text-brutal-black dark:text-dark-text tracking-tight uppercase">
            VISHWANATH
          </h1>
          <span
            className="text-3xl sm:text-5xl md:text-6xl inline-block animate-bounce-in"
            style={{ animationIterationCount: 'infinite', animationDuration: '1.2s' }}
          >
            🚀
          </span>
        </div>

        {/* Cycling loading message */}
        <div className="mb-10">
          <p
            key={currentText}
            className="text-lg md:text-xl font-mono text-brutal-black dark:text-dark-text animate-slide-up"
          >
            {`> ${loadingTexts[currentText]}`}
          </p>
        </div>

        {/* Brutalist Progress Bar */}
        <div className="w-64 sm:w-80 md:w-96 max-w-md mx-auto mb-6">
          <div className="flex justify-between text-sm font-mono text-brutal-black dark:text-dark-text mb-2 font-bold">
            <span>LOADING</span>
            <span>{Math.round(Math.min(loadingProgress, 100))}%</span>
          </div>

          <div className="h-6 bg-white dark:bg-dark-surface border-3 border-brutal-black dark:border-dark-border rounded-md shadow-brutal dark:shadow-brutal-dark overflow-hidden">
            <div
              className="h-full bg-brutal-lime transition-all duration-300 ease-out"
              style={{ width: `${Math.min(loadingProgress, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Bouncing Black Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-brutal-black dark:bg-dark-text rounded-md animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.4s'
              }}
            />
          ))}
        </div>

        {/* Fun bottom sticker */}
        <div className="mt-10">
          <span className="inline-block bg-brutal-pink text-white font-grotesk font-bold text-sm px-4 py-2 border-3 border-brutal-black dark:border-dark-border shadow-brutal-sm dark:shadow-brutal-dark-sm rounded-md rotate-[-2deg]">
            ☕ Brewing something cool...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;