import React from 'react';

// About Section
const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
    Hey there! I’m Dante Alegria, a developer who loves turning ideas into code. My passion for programming started back when i started college, and since then, I’ve been hooked on solving problems and building cool stuff.
            </p>
            <p className="text-lg mb-6">
    I enjoy working on both the frontend and backend of applications, but what really gets me excited is creating things that people actually enjoy using. I’m also super into DevOps, where I get to automate workflows and make deployments smooth and stress-free. Tools like Docker, Kubernetes, and CI/CD pipelines are my jam.
            </p>
      <p className="text-lg mb-6">
    When I’m not coding, you can usually find me exploring new technologies, playing videogames, or tweaking my setup to make it just right (customization nerd here!). I also enjoy sharing what I know and helping other developers grow—it’s a great way to give back to the tech community.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif">Education</h3>
            <div>
              <h4 className="font-semibold">Computer Science Degree</h4>
              <p className="text-gray-300 dark:text-gray-500">Universidad Autonoma de Aguascalientes, 2021-2026</p>
            </div>
            <div>
              <h4 className="font-semibold">Certifications</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Google Cybersecurity Professional Certificate, Google</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>      
  );
};

// Projects Section
const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "RegEx Playground",
      description: "RegEx Playground provides the tools you need to debug and refine your regular expressions with ease. ",
      tech: ["Python",'Django', "React", "CI/CD"],
      link: "https://github.com/dantealegria1/RegEx-Playground"
    },
    {
      title: "Twitter Bot",
      description: 'An automated Twitter bot that posts updates about the latest trends and news in the tech world',
      tech: ['Python', 'Github Actions','Api usage'],
      link: 'https://github.com/dantealegria1/Twitter-Bot'
    },
    {
      title: 'Quiet Vibez',
      description: 'A minimalist white noise application, providing soothing background noise to help you focus, relax, or sleep better.',
      tech: ['JavaScript', 'React Native', 'CI/CD'],
      link: 'https://github.com/dantealegria1/Quiet-Vibez'
    },
    {
      title: 'Math Game',
      description: 'Whether you’re a student looking to practice or just someone wanting to brush up on your math skills, this game makes math way more enjoyable!',
      tech: ['C#', 'Unity Game engine'],
      link: 'https://github.com/dantealegria1/Math_Game'
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-colors ${
                darkMode ? 'bg-[#252525] text-gray-100' : 'bg-white text-gray-900 shadow-lg'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-[#333333] text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className={`text-blue-500 hover:text-blue-600 flex items-center gap-2 ${
                  darkMode ? 'hover:text-blue-400' : 'hover:text-blue-700'
                }`}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-8">Skills</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-2xl font-serif mb-4">Frontend</h3>
            <ul className="space-y-2">
              <li>React</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">Backend</h3>
            <ul className="space-y-2">
              <li>ASP.NET</li>
              <li>Django</li>
              <li>Mysql</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">DevOps</h3>
            <ul className="space-y-2">
              <li>Docker</li>
              <li>Azure</li>
              <li>CI/CD</li>
              <li>Kubernetes</li>
            </ul>
          </div>
     <div>
            <h3 className="text-2xl font-serif mb-4">Languages</h3>
            <ul className="space-y-2">
              <li>Python</li>
              <li>C#</li>
              <li>Java</li>
              <li>Bash</li>
                  <li>C++</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About, Projects, Skills };
