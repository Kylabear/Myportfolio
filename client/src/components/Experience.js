import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Department of Agriculture',
      position: 'Developer Intern',
      duration: '2024 - Present',
      location: 'Baguio City, Philippines',
      description: 'Working under the Accounting Department as a Developer, creating and maintaining web applications for agricultural data management and financial systems.',
      technologies: ['React', 'Node.js', 'JavaScript', 'MySQL', 'PHP'],
      achievements: [
        'Developed internal web applications for data management',
        'Improved system efficiency by 30% through automation',
        'Collaborated with accounting team for system requirements'
      ]
    },
    {
      id: 2,
      company: 'University of the Cordilleras',
      position: 'BSIT Web Technology Student',
      duration: '2022 - Present',
      location: 'Baguio City, Philippines',
      description: 'Pursuing Bachelor of Science in Information Technology with specialization in Web Technology. Learning modern web development technologies and best practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PHP', 'MySQL'],
      achievements: [
        'Completed 15+ academic projects',
        'Maintained excellent academic performance',
        'Participated in various web development workshops'
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
           
           <div className="max-w-4xl mx-auto space-y-8">
             {/* Current Education */}
             <motion.div
               whileHover={{ y: -5 }}
               className="card"
             >
               <div className="flex items-start justify-between mb-4">
                 <div>
                   <h4 className="text-xl font-bold text-white mb-1">
                     Bachelor of Science in Information Technology
                   </h4>
                   <div className="flex items-center gap-2 text-primary-400 mb-2">
                     <Building className="h-4 w-4" />
                     <span className="font-medium">University of the Cordilleras</span>
                   </div>
                 </div>
               </div>
               
               <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                 <div className="flex items-center gap-1">
                   <Calendar className="h-4 w-4" />
                   <span>2022 - Present</span>
                 </div>
                 <div className="flex items-center gap-1">
                   <MapPin className="h-4 w-4" />
                   <span>Baguio City, Philippines</span>
                 </div>
               </div>
               
               <p className="text-gray-300 leading-relaxed">
                 Specialization in Web Technology. Currently pursuing degree with focus on modern web development, 
                 database management, and software engineering principles. Completed various projects in React, 
                 Node.js, and PHP development.
               </p>
             </motion.div>

             {/* Senior High School */}
             <motion.div
               whileHover={{ y: -5 }}
               className="card"
             >
               <div className="flex items-start justify-between mb-4">
                 <div>
                   <h4 className="text-xl font-bold text-white mb-1">
                     Senior High School - Accountancy and Business Management (ABM)
                   </h4>
                   <div className="flex items-center gap-2 text-primary-400 mb-2">
                     <Building className="h-4 w-4" />
                     <span className="font-medium">High School Name</span>
                   </div>
                 </div>
               </div>
               
               <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                 <div className="flex items-center gap-1">
                   <Calendar className="h-4 w-4" />
                   <span>2020 - 2022</span>
                 </div>
                 <div className="flex items-center gap-1">
                   <MapPin className="h-4 w-4" />
                   <span>Baguio City, Philippines</span>
                 </div>
               </div>
               
               <p className="text-gray-300 leading-relaxed">
                 Completed Senior High School with Accountancy and Business Management (ABM) strand. 
                 This background provides a strong foundation in business principles, financial management, 
                 and analytical thinking that complements my technical web development skills.
               </p>
             </motion.div>
           </div>
          
          
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 