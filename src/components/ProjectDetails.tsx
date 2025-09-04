import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';

interface ProjectDetailsProps {
  projectId: string;
  onClose: () => void;
}

interface ProjectData {
  title: string;
  overview: string;
  features: string[];
  tech: string[];
  prerequisites?: string[];
  githubUrl: string;
  demoUrl?: string;
  images: string[];
}

const projectsData: Record<string, ProjectData> = {
  'smart-parking': {
    title: 'Smart Parking Management System',
    overview:
      'This was my App Dev 1 project in MAD 1. The aim is to create a Vehicle Parking Management System for booking parking spots with real-time availability and management features.',
    features: [
      'User Management: Multiple users and admin roles with authentication.',
      'Parking Management: Create lots, manage spots, dynamic pricing, real-time tracking.',
      'Booking System: Spot booking, vehicle type support, duration-based cost.',
      'Search & Filter: Search by location, vehicle type, user ID, address.',
      'Analytics: Real-time availability, revenue, peak hours, vehicle distribution.',
      'Extras: Auto spot assignment, reservation tracking, booking history, support.'
    ],
    tech: [
      'Flask web framework',
      'SQLite database',
      'SQLAlchemy ORM',
      'Secure password hashing with bcrypt',
      'Interactive charts and analytics',
      'Responsive web design'
    ],
    githubUrl: 'https://github.com/23f1000356/Smart-Parking-Management-System',
    images: [
      'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  'phishing-detection': {
    title: 'PhishDeezNuts - AI-Powered Phishing Email Detection',
    overview:
      "PhishDeezNuts is an email security app using machine learning, rule-based analysis, and Google's Gemini AI to detect phishing in Gmail.",
    features: [
      'Multi-layered Detection: Random Forest, rule-based, Gemini AI analysis.',
      'Gmail Integration: OAuth2, real-time scanning, inbox monitoring.',
      'Advanced Analysis: URL/domain checks, sender credibility, SPF/DKIM/DMARC, attachment scan.',
      'Detailed Reporting: Phishing scores, threat analysis, false positive management, history.'
    ],
    tech: ['Python 3.8+', 'Node.js 14.x+', 'Google Cloud Platform', 'Gemini API', 'React and Flask'],
    prerequisites: [
      'Python 3.8 or higher',
      'Node.js 14.x or higher',
      'Gmail account',
      'Google Cloud Platform account',
      'Gemini API key'
    ],
    githubUrl: 'https://github.com/23f1000356/PhishDeezNuts',
    demoUrl: 'https://youtu.be/C7EZDW05sXw',
    images: [
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  'smart-city': {
    title: 'Smart City Dashboard - India 🌆',
    overview:
      'A web app for real-time monitoring of urban parameters across Indian cities, including air quality, traffic, water levels, and energy usage.',
    features: [
      'Real-time Monitoring',
      'User Authentication',
      'Interactive Visuals',
      'Map Integration',
      'Search & Alerts',
      'Admin Panel',
      'Responsive Design'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Maps API', 'Real-time Data Processing', 'Chart.js'],
    githubUrl: 'https://github.com/23f1000356/Smart-City-Dashboard',
    images: [
      'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  'disease-prediction': {
    title: 'Disease Outbreak Prediction System',
    overview:
      'A Streamlit-based machine learning app that predicts risks of Diabetes, Heart Disease, and Parkinson\'s Disease based on user inputs.',
    features: [
      'Multi-Disease Prediction: Supports Diabetes, Heart Disease, Parkinson’s.',
      'Interactive Interface: Simple and user-friendly Streamlit UI.',
      'Real-time Results: Instant predictions on inputs.',
      'Input Validation: Handles missing or invalid inputs.',
      'Responsive Design: Works seamlessly on all devices.'
    ],
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas & NumPy', 'Responsive UI design'],
    githubUrl: 'https://github.com/23f1000356/Prediction-of-Disease-outbreaks',
    images: [
      'https://images.pexels.com/photos/6941883/pexels-photo-6941883.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6129502/pexels-photo-6129502.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  'malware-prediction': {
    title: 'Microsoft Malware Prediction Application',
    overview:
      'A web application predicting malware infection probability using antivirus telemetry data and machine learning.',
    features: [
      'Dashboard: Malware stats, risk maps, and trends.',
      'Upload Page: CSV drag-and-drop with preview and validation.',
      'Predictions Page: Table view with filtering, color-coded risks, and export.',
      'Feature Summary: Device info, security analysis, SHAP explanations.',
      'Settings Page: Model metrics, threshold adjustment, feature importance.'
    ],
    tech: ['React + TypeScript', 'Tailwind CSS', 'Recharts', 'AG Grid', 'PapaParse', 'Machine Learning backend'],
    prerequisites: ['Node.js 16.x+', 'npm 8.x+'],
    githubUrl: 'https://github.com/23f1000356/Malware-prediction-ml-project',
    images: [
      'https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5380649/pexels-photo-5380649.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  'disaster-management': {
  title: 'Climate Disaster Management System',
  overview:
    'A centralized climate and disaster management platform built with React/Next.js and Python backend. It provides dashboards for users, admins, and agents to monitor climate data, predict disasters, and manage responses efficiently.',
  features: [
    'User Authentication: Secure login and signup system for different roles.',
    'User Dashboard: Personalized climate data and alerts.',
    'Admin Dashboard: Tools to manage users, monitor climate events, and oversee agents.',
    'Disaster Prediction Agents: Analyze climate data and provide early warnings.',
    'Data Visualization: Charts, graphs, and real-time updates for climate events.',
    'Database Management: Stores climate and disaster data locally for quick analysis.',
    'Responsive UI: Works smoothly across devices.'
  ],
  tech: [
    'Frontend: React (Next.js), CSS Modules',
    'Backend: Python (Flask)',
    'Database: SQLite (acms.db)',
    'Node.js (for Next.js app)',
    'REST API for backend communication'
  ],
  githubUrl: 'https://github.com/23f1000356/Disaster-Management',
  images: [
    'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1305761/pexels-photo-1305761.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/954473/pexels-photo-954473.jpeg?auto=compress&cs=tinysrgb&w=800'
  ]
},
'ai-job-screening': {
  title: 'AI-Powered Job Screening Application',
  overview:
    'An intelligent recruitment assistant that automates resume screening, candidate shortlisting, and interview scheduling using AI matching algorithms.',
  features: [
    'JD Summarization: Automatically extracts key elements from job descriptions',
    'CV-JD Matching: Uses AI to match candidate resumes with job descriptions',
    'Candidate Shortlisting: Automatically shortlists candidates based on match scores',
    'Interview Scheduling: Sends interview invitations to shortlisted candidates',
    'Bulk Resume Processing: Upload and process multiple resumes at once',
    'Dashboard Analytics: Visualize recruitment metrics with interactive charts'
  ],
  tech: [
    'Backend: Flask, SQLAlchemy',
    'Frontend: Bootstrap 5, Chart.js',
    'ML/NLP: Scikit-learn, NLTK',
    'Database: SQLite (default)'
  ],
  prerequisites: [
    'Python 3.8+',
    'Virtual environment (recommended)',
    'pip install -r requirements.txt',
    'Initialize database with: python app.py'
  ],
  githubUrl: 'https://github.com/23f1000356/Job_screening', // 🔄 replace with your repo link
  images: [
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  ]
},
'ecommerce-website': {
  title: 'E-Commerce Website',
  overview:
    'A full-stack e-commerce platform that provides product browsing, cart management, checkout, and order tracking with a modern responsive UI.',
  features: [
    'User Authentication: Secure signup/login with session handling',
    'Product Management: Browse, search, and filter products',
    'Shopping Cart: Add, update, and remove items',
    'Order Management: Place orders and track order history',
    'Admin Dashboard: Manage products, inventory, and users',
    'Responsive UI: Optimized for desktop and mobile',
    'Deployment: Live hosted on Vercel'
  ],
  tech: [
    'Frontend: React (Next.js), Tailwind CSS',
    'Backend: Node.js / Express.js',
    'Database: MongoDB / SQLite (based on setup)',
    'Deployment: Vercel'
  ],
  githubUrl: 'https://github.com/23f1000356/E-commerce',
  demoUrl: 'https://e-commerce-nine-umber.vercel.app/',
  images: [
    'https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5632387/pexels-photo-5632387.jpeg?auto=compress&cs=tinysrgb&w=800'
  ]
},
'quiz-app': {
  title: 'Quiz App for Students',
  overview:
    'An interactive quiz application for students covering GK and multiple subjects. Users can take quizzes, create their own, or generate quizzes dynamically for practice and learning.',
  features: [
    'Multi-Subject Quizzes: General Knowledge and subject-wise quizzes',
    'Quiz Creation: Teachers or students can create custom quizzes',
    'Quiz Generation: Auto-generate quizzes dynamically',
    'Score Tracking: Instant feedback and results after quiz completion',
    'User-Friendly UI: Clean and responsive interface for all devices',
    'Deployed and accessible online'
  ],
  tech: [
    'Frontend: React (Next.js)',
    'Styling: Tailwind CSS',
    'Backend: Node.js / Express (if extended)',
    'Deployment: Vercel'
  ],
  githubUrl: 'https://github.com/23f1000356/Quiz-App',
  demoUrl: 'https://task3-quiz.vercel.app/',
  images: [
    'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5905712/pexels-photo-5905712.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184646/pexels-photo-3184646.jpeg?auto=compress&cs=tinysrgb&w=800'
  ]
},



};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = projectsData[projectId];

  useEffect(() => {
    if (!project) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project?.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  if (!project) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg">
          <p>Project not found</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-sm z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex items-center gap-8">
            <button
              onClick={() => window.location.href = '/'}
              className="text-2xl font-bold text-black hover:text-purple-600 transition-colors"
            >
              VR
            </button>
            <a href="/" className="text-black hover:text-purple-600 font-semibold transition-colors">Home</a>
            <a href="/#skills" className="text-black hover:text-purple-600 font-semibold transition-colors">Skills</a>
            <a href="/#experience" className="text-black hover:text-purple-600 font-semibold transition-colors">Experience</a>
            <a href="/#education" className="text-black hover:text-purple-600 font-semibold transition-colors">Education</a>
            <a href="/#projects" className="text-black hover:text-purple-600 font-semibold transition-colors">Projects</a>
            <a href="/#hackathons" className="text-black hover:text-purple-600 font-semibold transition-colors">Hackathons</a>
            <a href="/#courses" className="text-black hover:text-purple-600 font-semibold transition-colors">Courses</a>
            <a href="/#contact" className="text-black hover:text-purple-600 font-semibold transition-colors">Contact</a>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 text-black hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Portfolio
          </button>
        </div>
      </nav>

      {/* Project Details */}
      <div className="pt-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Sidebar */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ArrowRight size={20} />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed">{project.overview}</p>
                {project.demoUrl && (
                  <p className="mt-2 text-gray-600">
                    Video Demo:{' '}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Working Demo
                    </a>
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Implementation</h3>
                <ul className="space-y-2">
                  {project.tech.map((tech, index) => (
                    <li key={index} className="text-gray-600 flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.prerequisites && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Prerequisites</h3>
                  <ul className="space-y-2">
                    {project.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github size={20} /> View on GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/vishakha-roy-52924b1b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/23f1000356"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:122vishakha2092@sjcem.edu.in"
              className="text-white text-2xl hover:text-blue-400 transition-colors"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="tel:+919354565648"
              className="text-white text-2xl hover:text-blue-400 transition-colors"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
          <p>&copy; 2025 Vishakha Roy. Crafted with 💜 and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetails;
