import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Projects from './pages/Projects';
import './index.css';

const Home = () => (
  <>
    <Hero />
    <Experience />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <ThemeProvider>
      <div className="bg-cream dark:bg-dark-bg text-brutal-black dark:text-dark-text overflow-x-hidden scroll-smooth font-grotesk transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* Optional: fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
