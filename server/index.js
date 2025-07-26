const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path'); // Added missing import for path

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio server is running' });
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Your Name',
    title: 'Full Stack Developer',
    email: 'your.email@example.com',
    location: 'Your Location',
    about: 'Passionate developer with expertise in React, Three.js, and Node.js',
    skills: ['React', 'Three.js', 'Node.js', 'Express', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
    social: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      twitter: 'https://twitter.com/yourusername'
    }
  });
});

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: '3D Portfolio',
      description: 'Interactive 3D portfolio built with React Three Fiber',
      technologies: ['React', 'Three.js', 'Tailwind CSS'],
      image: '/images/project1.jpg',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: '/images/project2.jpg',
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://yourecommerce.com'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses',
      technologies: ['React', 'Socket.io', 'OpenAI API', 'Node.js'],
      image: '/images/project3.jpg',
      github: 'https://github.com/yourusername/ai-chat',
      live: 'https://yourchat.com'
    }
  ]);
});

app.get('/api/experience', (req, res) => {
  res.json([
    {
      id: 1,
      company: 'Tech Company',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      description: 'Led development of multiple web applications using React and Node.js',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      id: 2,
      company: 'Startup Inc',
      position: 'Frontend Developer',
      duration: '2020 - 2022',
      description: 'Built responsive user interfaces and implemented 3D visualizations',
      technologies: ['React', 'Three.js', 'Tailwind CSS', 'JavaScript']
    }
  ]);
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 