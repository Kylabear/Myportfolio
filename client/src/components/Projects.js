import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '3D Portfolio',
      description: 'Interactive 3D portfolio built with React Three Fiber and modern web technologies. Features immersive 3D scenes and smooth animations.',
      image: '/images/project1.jpg',
      technologies: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com',
      category: 'frontend'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      image: '/images/project2.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://yourecommerce.com',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses using OpenAI API and Socket.io for live communication.',
      image: '/images/project3.jpg',
      technologies: ['React', 'Socket.io', 'OpenAI API', 'Node.js'],
      github: 'https://github.com/yourusername/ai-chat',
      live: 'https://yourchat.com',
      category: 'fullstack'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.',
      image: '/images/project4.jpg',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://yourtaskmanager.com',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with 3D visualizations, real-time data, and location-based forecasts.',
      image: '/images/project5.jpg',
      technologies: ['React', 'Three.js', 'Weather API', 'Chart.js'],
      github: 'https://github.com/yourusername/weather-dashboard',
      live: 'https://yourweather.com',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with user authentication, post management, and real-time notifications.',
      image: '/images/project6.jpg',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
      github: 'https://github.com/yourusername/social-api',
      live: 'https://yoursocialapi.com',
      category: 'backend'
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Full Stack', value: 'fullstack' }
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
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my development skills.
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
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 h-48 bg-gradient-to-br from-primary-600 to-purple-600">
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>

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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 