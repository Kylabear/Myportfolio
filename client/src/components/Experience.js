import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Department of Agriculture (Accounting Section)',
      position: 'IT Intern / Developer',
      duration: 'June – Aug 2025',
      location: 'Baguio City, Philippines',
      description: 'Developed a web-based Accounting Monitoring and Tracking System. Collaborated with accounting staff to understand real workflows and convert them into system features. Utilized Laravel (backend) and React with Tailwind CSS (frontend) to create a responsive dashboard with statistics and reports. Gained firsthand exposure to basic accounting procedures and document flows. Enhanced skills in system analysis, UI/UX design, and real-world testing in a government environment.',
      technologies: ['Laravel', 'React', 'Tailwind CSS', 'UI/UX', 'MySQL'],
      achievements: [
        'Developed a web-based Accounting Monitoring and Tracking System',
        'Collaborated with accounting staff to understand workflows',
        'Created responsive dashboards and reports',
        'Enhanced system analysis and UI/UX skills'
      ]
    },
    {
      id: 2,
      company: 'Creotec Philippine Inc.',
      position: 'Payroll Assistant (Work Immersion)',
      duration: 'May – June 2021',
      location: 'Philippines',
      description: 'Assisted the HR and Accounting team in processing payroll-related documents. Helped organize employee records and timekeeping data. Learned about company policies, confidentiality, and basic office procedures in a professional work setting.',
      technologies: ['Payroll', 'HR', 'Office Procedures'],
      achievements: [
        'Assisted payroll processing and document organization',
        'Learned about confidentiality and office procedures'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      school: 'University of the Cordilleras',
      degree: 'Bachelor of Information Technology (Web Technology)',
      duration: '2022 - 2025',
      location: 'Baguio City, Philippines',
    },
    {
      id: 2,
      school: 'SMNHS SHS (Senior High)',
      degree: 'Accountancy and Business Management (ABM)',
      duration: '2019 - 2021',
      location: 'Philippines',
    },
    {
      id: 3,
      school: 'SMNHS EXT (Junior High)',
      degree: '',
      duration: '2016 - 2019',
      location: 'Alfonso Lista, Ifugao',
    }
  ];

  const seminars = [
    'DevFest Baguio 2023 – Nov 2023',
    'DevFest Baguio 2024 – Nov 2024',
    'Startup Product Branding – Nov 2024',
    'Startup Ignite 6 – Sept 2024',
    'Campus Tech Update – Oct 2024',
    'First Reverse Pitching – Sept 2024',
    'Techno Sprint 2025 – Feb 2025',
    'Startup Bootstrapping & Product-Market Fit – Jan 2025',
    'SAP Analytics Cloud Training – May 2025',
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
            My professional journey in web development, internships, and academic achievements.
          </p>
        </motion.div>
        {/* Experience Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-dark-800 z-10" />
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div whileHover={{ y: -5 }} className="card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-primary-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies/Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-dark-700 rounded-full text-xs text-gray-300">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-primary-400 mt-1">•</span>
                            <span>{ach}</span>
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
            {education.map((edu) => (
              <motion.div key={edu.id} whileHover={{ y: -5 }} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <div className="flex items-center gap-2 text-primary-400 mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{edu.school}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Seminars/Workshops Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Seminars & Workshops</span>
          </h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {seminars.map((item, idx) => {
              // Extract year/month if present
              const match = item.match(/(\d{4})|([A-Za-z]+ ?\d{4})/);
              const date = match ? match[0] : '';
              const title = item.replace(/\s*[-–—]\s*\d{4}|\s*[-–—]\s*[A-Za-z]+ ?\d{4}/, '').replace(/\s*–\s*\w+\s*\d{4}/, '').trim();
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="bg-dark-800 border border-dark-700 rounded-xl p-6 flex flex-col items-start shadow-lg hover:border-primary-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white text-xl font-bold mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </span>
                    <div>
                      <div className="text-lg font-semibold text-white leading-tight">{title}</div>
                      {date && <div className="text-xs text-primary-400 font-medium mt-1">{date}</div>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 