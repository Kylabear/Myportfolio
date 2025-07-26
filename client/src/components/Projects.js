import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Peak Baguio',
      description: 'AI Powered Itinerary Generator - Web based. Generates personalized Baguio travel itineraries using AI.',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'OpenAI API'],
      github: '',
      live: '',
      category: 'web'
    },
    {
      id: 2,
      title: 'Contraceptech',
      description: 'Health & Awareness App. Mobile/web app for health education and awareness.',
      technologies: ['React', 'Android Studio', 'Java', 'Kotlin', 'Tailwind CSS'],
      github: '',
      live: '',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'Accounting Monitoring and Tracking System',
      description: 'Web-based system for the Department of Agriculture. Tracks accounting documents and provides dashboards and reports.',
      technologies: ['Laravel', 'React', 'Tailwind CSS', 'MySQL'],
      github: '',
      live: '',
      category: 'web'
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'Mobile', value: 'mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of the projects I have worked on, including web and mobile applications.
          </p>
        </motion.div>
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>
        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer"
            >
              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 