import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-serif mb-8">About Me</h2>
      <div className={`p-8 rounded-lg ${
        darkMode ? 'bg-[#252525]' : 'bg-white shadow-lg'
      }`}>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Hello! I'm Dante, a Full Stack Developer and DevOps enthusiast based in Mexico. I'm passionate about building software that solves real-world problems and creating efficient development workflows.
            </p>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              With experience in both frontend and backend development, I enjoy working across the entire stack and learning new technologies. I'm particularly interested in cloud technologies and automation.
            </p>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              When I'm not coding, you can find me customizing my development environment, contributing to open-source projects, or exploring new tech trends.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>?? Computer Science Student</li>
              <li>?? Full Stack Developer</li>
              <li>?? DevOps Enthusiast</li>
              <li>?? Currently learning Cloud Architecture</li>
              <li>?? Open to collaboration on interesting projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
