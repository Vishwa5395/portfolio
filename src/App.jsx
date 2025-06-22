import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
    <div className="bg-slate-900 text-white overflow-x-hidden scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* Optional: fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
