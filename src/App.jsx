import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from "./components/Education";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // theme
  const [dark, setDark] = useState(false);
  useEffect(()=> {
    if(dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen transition-colors">
      <Navbar dark={dark} setDark={setDark} />
      <main className="pt-20">
        <Hero />
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
