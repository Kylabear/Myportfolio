# Modern Portfolio

A stunning, interactive portfolio built with React.js, React Three Fiber, Tailwind CSS, and Node.js. Features 3D animations, smooth transitions, and a modern design.

## 🚀 Features

- **3D Interactive Elements** - Built with React Three Fiber for immersive experiences
- **Modern Design** - Clean, responsive design with Tailwind CSS
- **Smooth Animations** - Framer Motion for fluid transitions and interactions
- **Full-Stack Ready** - Express.js backend with API endpoints
- **Responsive** - Works perfectly on all devices
- **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI library
- **React Three Fiber** - 3D graphics and animations
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Myportfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   Create a `.env` file in the server directory:
   ```env
   PORT=5000
   NODE_ENV=development
   ```

## 🚀 Running the Application

### Development Mode
```bash
# Run both frontend and backend
npm run dev

# Or run them separately
npm run server  # Backend on port 5000
npm run client  # Frontend on port 3000
```

### Production Mode
```bash
# Build the frontend
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
Myportfolio/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   ├── package.json       # Frontend dependencies
│   └── tailwind.config.js # Tailwind configuration
├── server/                # Node.js backend
│   ├── index.js          # Express server
│   └── package.json      # Backend dependencies
├── package.json          # Root package.json
└── README.md            # Project documentation
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`client/src/components/Hero.js`)
   - Change "Your Name" to your actual name
   - Update social media links
   - Modify the description

2. **About Section** (`client/src/components/About.js`)
   - Update skills and technologies
   - Modify experience statistics
   - Change the about text

3. **Projects Section** (`client/src/components/Projects.js`)
   - Add your actual projects
   - Update project links and descriptions
   - Modify technologies used

4. **Experience Section** (`client/src/components/Experience.js`)
   - Add your work experience
   - Update education information
   - Modify achievements and technologies

5. **Contact Section** (`client/src/components/Contact.js`)
   - Update contact information
   - Modify social media links
   - Change email and phone number

6. **Server API** (`server/index.js`)
   - Update profile information
   - Modify projects data
   - Change experience details

### Styling
- **Colors**: Modify the color scheme in `client/tailwind.config.js`
- **Fonts**: Update Google Fonts in `client/public/index.html`
- **Animations**: Adjust animation settings in component files

## 🌟 Key Features Explained

### 3D Hero Section
The hero section features an animated 3D sphere using React Three Fiber that rotates and distorts, creating an engaging visual experience.

### Interactive Navigation
Smooth scrolling navigation with animated transitions and responsive mobile menu.

### Project Showcase
Filterable project grid with hover effects and detailed information about each project.

### Timeline Experience
Animated timeline showing work experience and education with alternating layout.

### Contact Form
Functional contact form with validation and animated submission states.

## 🔧 API Endpoints

The backend provides the following API endpoints:

- `GET /api/health` - Server health check
- `GET /api/profile` - Personal information
- `GET /api/projects` - Project data
- `GET /api/experience` - Work experience data

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `client/build` folder to your hosting service

### Backend Deployment
1. Set `NODE_ENV=production` in your environment
2. Deploy the `server` folder to your hosting service
3. Update the API base URL in the frontend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for 3D capabilities
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons

---

Made with ❤️ using React, Three.js, and Node.js