import React from 'react';
import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaPhp, FaLaravel, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaPython, FaJava, FaDocker, FaDatabase, FaGitAlt, FaSwift, FaAndroid, FaApple, FaJs, FaFigma, FaGithub, FaCuttlefish } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiApache, SiPostgresql, SiFirebase, SiFlutter, SiKotlin, SiXampp, SiWebflow, SiWeebly, SiFramer, SiCplusplus, SiCsharp, SiR } from 'react-icons/si';

const techCategories = [
  {
    label: 'Frontend',
    items: [
      { name: 'React.js', icon: FaReact },
      { name: 'Vue.js', icon: FaVuejs },
      { name: 'Angular', icon: FaAngular },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'Tailwind CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'Webflow', icon: SiWebflow },
      { name: 'Weebly', icon: SiWeebly },
      { name: 'Framer', icon: SiFramer },
      { name: 'Figma', icon: FaFigma },
    ]
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'PHP', icon: FaPhp },
      { name: 'Laravel (PHP)', icon: FaLaravel },
      { name: 'Apache', icon: SiApache },
      { name: 'XAMPP', icon: SiXampp },
      { name: 'Docker', icon: FaDocker },
    ]
  },
  {
    label: 'Database',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'R', icon: SiR },
    ]
  },
  {
    label: 'Mobile',
    items: [
      { name: 'Flutter (Dart)', icon: SiFlutter },
      { name: 'Swift (iOS)', icon: FaSwift },
      { name: 'Kotlin (Android)', icon: SiKotlin },
      { name: 'React Native', icon: FaReact },
      { name: 'Kotlin', icon: SiKotlin },
    ]
  },
  {
    label: 'Programming Languages',
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C#', icon: SiCsharp },
      { name: 'Java', icon: FaJava },
    ]
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Github', icon: FaGithub },
    ]
  }
];

const About = () => {
  const skills = [
    { name: 'HTML/CSS/JS', icon: FaHtml5, color: 'text-blue-400' },
    { name: 'Laravel', icon: FaLaravel, color: 'text-red-400' },
    { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: FaCss3Alt, color: 'text-teal-400' },
    { name: 'UI/UX Design', icon: FaFigma, color: 'text-pink-400' },
    { name: 'Mobile Dev', icon: FaAndroid, color: 'text-green-400' },
  ];
  const languages = ['English', 'Tagalog', 'Korean (Intermediate)'];
  const techStack = [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Express.js', icon: SiExpress },
    { name: 'React.js', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'PHP', icon: FaPhp },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Apache', icon: SiApache },
    { name: 'Laravel (PHP)', icon: FaLaravel },
    { name: 'Vue.js', icon: FaVuejs },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Angular', icon: FaAngular },
    { name: 'JavaScript', icon: FaJs },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'Flutter (Dart)', icon: SiFlutter },
    { name: 'Swift (iOS)', icon: FaSwift },
    { name: 'Kotlin (Android)', icon: SiKotlin },
    { name: 'React Native', icon: FaReact },
    { name: 'Tailwind CSS', icon: FaCss3Alt },
    { name: 'Docker', icon: FaDocker },
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'R', icon: SiR },
    { name: 'Python', icon: FaPython },
    { name: 'XAMPP', icon: SiXampp },
    { name: 'Webflow', icon: SiWebflow },
    { name: 'Weebly', icon: SiWeebly },
    { name: 'Framer', icon: SiFramer },
    { name: 'Figma', icon: FaFigma },
    { name: 'C++', icon: SiCplusplus },
    { name: 'C#', icon: SiCsharp },
  ];

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
            A passionate and detail-oriented BSIT student majoring in Web Technology, with hands-on experience in web development, UI/UX design, and mobile app projects. Skilled in modern web stacks including Laravel, React, and Tailwind CSS. I also have basic knowledge of accounting processes, gained from both academic and system development experience. Known for being adaptable, collaborative, and eager to learn, I’m open to acquiring new skills even outside the tech field, and willing to take on responsibilities in fast-paced environments such as fast food and customer service settings.
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
              I specialize in building modern web applications and mobile apps that combine beautiful design with powerful functionality. My journey in web development started as a BSIT Web Technology student at University of the Cordilleras, and it has evolved into a passion for creating seamless user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I have hands-on experience with Laravel, React, Tailwind CSS, and UI/UX design. I also have basic knowledge of accounting processes, gained from both academic and system development experience. I am adaptable, collaborative, and always eager to learn new skills.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">3+</div>
                <div className="text-gray-400 text-sm">Years Studying</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">15+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">2</div>
                <div className="text-gray-400 text-sm">Internships</div>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-semibold text-white mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map(lang => (
                  <span key={lang} className="px-3 py-1 bg-dark-700 rounded-full text-xs text-gray-300">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Tech Stack Grid with Categories and Tooltips */}
          <div className="space-y-8">
            {techCategories.map((cat) => (
              <div key={cat.label}>
                <h4 className="text-lg font-bold text-primary-400 mb-4 pl-2">{cat.label}</h4>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {cat.items.map((tech) => {
                    const Icon = tech.icon || FaDatabase;
                    return (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.05 }}
                        className="card text-center group flex flex-col items-center justify-center py-4 px-2 relative"
                      >
                        <Icon className="text-3xl mb-2 text-primary-400 group-hover:text-primary-500 transition-colors duration-300" />
                        <span className="font-semibold text-white text-base group-hover:text-primary-400 transition-colors duration-300">
                          {tech.name}
                        </span>
                        {/* Tooltip */}
                        <span className="absolute z-10 opacity-0 group-hover:opacity-100 bg-dark-900 text-white text-xs rounded px-2 py-1 mt-10 shadow-lg transition-opacity duration-200 pointer-events-none">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 