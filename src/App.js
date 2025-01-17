import React, { useState } from 'react';
import { Moon, Sun, Code, Terminal, Github, Award, ExternalLink, Menu, X } from 'lucide-react';
import './index.css';
import { About, Projects, Skills, Contact } from './sections';
import { Link } from 'react-scroll';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const NavLink = ({ to, children }) => (
    <Link 
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={closeMenu}
      className="cursor-pointer hover:text-gray-400 transition-colors px-4 py-2 w-full text-center md:text-left md:w-auto"
    >
      {children}
    </Link>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-[#1C1C1C] text-white' : 'bg-[#F5F5F5] text-slate-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        darkMode ? 'bg-[#1C1C1C] border-gray-800 text-white' : 'bg-[#F5F5F5] border-gray-100 text-slate-900'
      }`}>
        <div className="max-w-6xl mx-auto p-4 md:p-6 flex justify-between items-center">
          <div className={`w-8 h-8 md:w-10 md:h-10 border flex items-center justify-center ${
            darkMode ? 'border-white' : 'border-slate-900'
          }`}>
            <span className="font-serif">DA</span>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleDarkMode} aria-label="Toggle theme" className="p-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="p-2" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLink to="about">About</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <button onClick={toggleDarkMode} aria-label="Toggle theme">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 border-b' : 'max-h-0 overflow-hidden'
        } ${darkMode ? 'bg-[#1C1C1C] border-gray-800' : 'bg-[#F5F5F5] border-gray-100'}`}>
          <div className="flex flex-col items-center py-4">
            <NavLink to="about">About</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 mt-8">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 md:mb-6">Hello I'm Dante Alegria</h1>
        <p className={`text-lg md:text-xl mb-8 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          I'm a passionate developer who loves turning ideas into code. When I'm not pushing commits, you can find me exploring new technologies or ricing my setup.
        </p>
        
        {/* Featured Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {[
            {
              icon: <Code className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4" />,
              title: "Software Development Enthusiast",
              description: "I am a dedicated software developer with expertise in designing and building robust, scalable, and user-friendly applications."
            },
            {
              icon: <Terminal className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4" />,
              title: "DevOps Passionate",
              description: "Passionate about streamlining development processes and improving system reliability, I leverage modern DevOps practices to enhance efficiency."
            },
            {
              icon: <Award className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4" />,
              title: "Latest Projects",
              description: "Check out my recent work and contributions!"
            }
          ].map((item, index) => (
            <div key={index} className={`p-4 md:p-6 rounded-lg ${
              darkMode ? 'bg-[#252525]' : 'bg-white shadow-lg'
            }`}>
              {item.icon}
              <h3 className="text-base md:text-lg font-semibold mb-2">{item.title}</h3>
              <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Featured Project */}
        <div className={`p-4 md:p-8 rounded-lg mb-8 md:mb-12 ${
          darkMode ? 'bg-[#252525]' : 'bg-white shadow-lg'
        }`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-4">
            <h2 className="text-xl md:text-2xl font-semibold">Featured Project: RegEx Playground</h2>
            <a href="https://github.com/dantealegria1/RegEx-Playground" 
               className="text-blue-500 hover:text-blue-600 flex items-center gap-2 text-sm md:text-base"
               target="_blank" 
               rel="noopener noreferrer">
              View Project <ExternalLink size={16} />
            </a>
          </div>
          <p className={`mb-4 text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            RegEx Playground is an interactive web application designed to help users learn, test, and debug regular expressions in real-time.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Django', 'Python', 'CI/CD', 'Regular Expressions'].map((tech) => (
              <span key={tech} 
                    className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${
                      darkMode ? 'bg-[#333333] text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Social Links */}
        <div className="grid grid-cols-2 md:flex gap-4 md:gap-6 text-sm md:text-base">
          {[
            { name: 'Twitter', url: 'https://twitter.com' },
            { name: 'GitHub', url: 'https://github.com/dantealegria1' },
            { name: 'Instagram', url: 'https://instagram.com' },
            { name: 'LinkedIn', url: 'https://linkedin.com' },
            { name: 'Blog', url: 'https://youtube.com' }
          ].map((social) => (
            <a key={social.name} 
               href={social.url} 
               className={`flex items-center gap-2 ${
                 darkMode ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
               } transition-colors`}>
              {social.name}
            </a>
          ))}
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
