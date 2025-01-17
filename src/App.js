import React, { useState } from 'react';
import { Moon, Sun, Code, Terminal, Github, Award, ExternalLink } from 'lucide-react';
import './index.css';
import { About, Projects, Skills, Contact } from './sections';
import { Link } from 'react-scroll';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-[#1C1C1C] text-white' : 'bg-[#F5F5F5] text-slate-900'
    }`}>
      {/* Navigation */}
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
  darkMode ? 'bg-[#1C1C1C] border-gray-800 text-white' : 'bg-[#F5F5F5] border-gray-100 text-slate-900'
}`}>
  <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
    <div className={`w-10 h-10 border flex items-center justify-center ${
      darkMode ? 'border-white' : 'border-slate-900'
    }`}>
      <span className="font-serif">DA</span>
    </div>
    
    <div className="flex gap-8">
  <Link 
    to="about"
    spy={true}
    smooth={true}
    offset={-70} // Adjusts for navbar height
    duration={500} // Scroll duration in ms
    className="cursor-pointer hover:text-gray-400 transition-colors"
  >
    About
  </Link>
  <Link 
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="cursor-pointer hover:text-gray-400 transition-colors"
  >
    Projects
  </Link>
  <Link 
    to="skills"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="cursor-pointer hover:text-gray-400 transition-colors"
  >
    Skills
  </Link>
  <Link 
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="cursor-pointer hover:text-gray-400 transition-colors"
  >
    Contact
  </Link>
  <button onClick={toggleDarkMode} aria-label="Toggle theme">
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
</div>
  </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-24 mt-8">
        <h1 className="text-6xl font-serif mb-6">Hello I'm Dante Alegria</h1>
        <p className={`text-xl mb-8 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          I'm a passionate developer who loves turning ideas into code. When I'm not pushing commits, you can find me exploring new technologies or ricing my setup.
        </p>
        
        {/* Featured Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`p-6 rounded-lg ${
            darkMode ? 'bg-[#252525]' : 'bg-white shadow-lg'
          }`}>
            <Code className="w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Software Development Enthusiast</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              I am a dedicated software developer with expertise in designing and building robust, scalable, and user-friendly applications.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${
            darkMode ? 'bg-[#252525]' : 'bg-white shadow-lg'
          }`}>
            <Terminal className="w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">DevOps Passionate</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Passionate about streamlining development processes and improving system reliability, I leverage modern DevOps practices to enhance efficiency.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${
            darkMode ? 'bg-[#252525]' : 'bg-white shadow-lg'
          }`}>
            <Award className="w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Latest Projects</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Check out my recent work and contributions!
            </p>
          </div>
        </div>
        
        {/* Featured Project */}
        <div className={`p-8 rounded-lg mb-12 ${
          darkMode ? 'bg-[#252525]' : 'bg-white shadow-lg'
        }`}>
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold">Featured Project: RegEx Playground</h2>
            <a href="https://github.com/dantealegria1/RegEx-Playground" 
               className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
               target="_blank" 
               rel="noopener noreferrer">
              View Project <ExternalLink size={16} />
            </a>
          </div>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            RegEx Playground is an interactive web application designed to help users learn, test, and debug regular expressions in real-time.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Django', 'Python', 'CI/CD', 'Regular Expressions'].map((tech) => (
              <span key={tech} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-[#333333] text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-6">
          <a href="https://twitter.com" className={`flex items-center gap-2 ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
          } transition-colors`}>Twitter</a>
          <a href="https://github.com/dantealegria1" className={`flex items-center gap-2 ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
          } transition-colors`}>GitHub</a>
          <a href="https://instagram.com" className={`flex items-center gap-2 ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
          } transition-colors`}>Instagram</a>
          <a href="https://linkedin.com" className={`flex items-center gap-2 ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
          } transition-colors`}>LinkedIn</a>
          <a href="https://youtube.com" className={`flex items-center gap-2 ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
          } transition-colors`}>Blog</a>
        </div>
      </main>
  <About darkMode={darkMode} />
<Projects darkMode={darkMode} />
<Skills darkMode={darkMode} />
  <Contact darkMode={darkMode} />

    </div>
  );
}


export default App;

