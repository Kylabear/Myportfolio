import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Zap, Shield } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', icon: Code, color: 'text-blue-400' },
    { name: 'JavaScript', icon: Globe, color: 'text-yellow-400' },
    { name: 'Node.js', icon: Database, color: 'text-green-400' },
    { name: 'PHP', icon: Zap, color: 'text-purple-400' },
    { name: 'MySQL', icon: Smartphone, color: 'text-cyan-400' },
    { name: 'HTML/CSS', icon: Shield, color: 'text-orange-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a passionate BSIT Web Technology student who loves creating immersive digital experiences. 
            Currently interning at the Department of Agriculture, I bring ideas to life through modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Turning Ideas Into Reality
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I specialize in building modern web applications that combine beautiful design with powerful functionality. 
              My journey in web development started as a BSIT Web Technology student at University of the Cordilleras, 
              and it has evolved into a passion for creating seamless user experiences.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Currently interning at the Department of Agriculture under the Accounting Department as a Developer, 
              I'm gaining valuable experience in real-world applications. With expertise in modern web technologies, 
              I create applications that are not only visually stunning but also practical and user-friendly.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">2+</div>
                <div className="text-gray-400 text-sm">Years Studying</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">15+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">1</div>
                <div className="text-gray-400 text-sm">Current Internship</div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card text-center group"
              >
                <div className={`${skill.color} mb-4 flex justify-center`}>
                  <skill.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-semibold text-white">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Other <span className="gradient-text">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'JavaScript', 'PHP', 'MySQL', 'React', 'Node.js', 
              'HTML5', 'CSS3', 'Git', 'REST APIs', 'Bootstrap', 'Tailwind CSS', 'Express.js'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-dark-700 rounded-full text-sm text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 