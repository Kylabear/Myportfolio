import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Tech Company',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Led development of multiple web applications using React and Node.js. Implemented 3D visualizations and interactive features.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Three.js'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Mentored 3 junior developers',
        'Implemented CI/CD pipeline improvements'
      ]
    },
    {
      id: 2,
      company: 'Startup Inc',
      position: 'Frontend Developer',
      duration: '2020 - 2022',
      location: 'New York, NY',
      description: 'Built responsive user interfaces and implemented 3D visualizations. Collaborated with design team to create seamless user experiences.',
      technologies: ['React', 'Three.js', 'Tailwind CSS', 'JavaScript'],
      achievements: [
        'Developed 5+ interactive 3D components',
        'Improved user engagement by 25%',
        'Implemented responsive design system'
      ]
    },
    {
      id: 3,
      company: 'Digital Agency',
      position: 'Junior Developer',
      duration: '2019 - 2020',
      location: 'Los Angeles, CA',
      description: 'Started my journey in web development, working on various client projects and learning modern web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      achievements: [
        'Completed 10+ client projects',
        'Learned modern web development practices',
        'Contributed to open source projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My professional journey in web development, from junior developer to senior full-stack engineer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-dark-800 z-10" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-dark-700 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-primary-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Education</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    Bachelor of Science in Computer Science
                  </h4>
                  <div className="flex items-center gap-2 text-primary-400 mb-2">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">University Name</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>2015 - 2019</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>City, State</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Graduated with honors. Focused on web development, algorithms, and software engineering. 
                Completed capstone project on interactive 3D web applications.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 