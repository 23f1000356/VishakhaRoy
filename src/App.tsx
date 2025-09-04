import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Mail, Phone, MapPin, Trophy, Award, CaseSensitive as University, GraduationCap, School, Github, Linkedin, ExternalLink, Send, Shield, Building2, Heart, Bug, TrendingUp, Brain, Bot, Camera, Lightbulb, Briefcase, ShoppingCart, HelpCircle, CloudLightning } from 'lucide-react';
import ProjectDetails from './components/ProjectDetails';
// Removed import for Vishu.jpeg; use public folder path instead

interface SkillData {
  name: string;
  level: number;
}

interface SkillCategory {
  [key: string]: SkillData[];
}

const App: React.FC = () => {
  const [activeSkillTab, setActiveSkillTab] = useState('web');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const skillsData: SkillCategory = {
    web: [
      { name: 'HTML/CSS', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 50 },
      { name: 'Node.js', level: 60 },
      { name: 'Flask/Python', level: 87 }
    ],
    ml: [
      { name: 'Python', level: 90 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 30 },
      { name: 'Deep Learning', level: 30 },
      { name: 'Computer Vision', level: 50 },
      { name: 'NLP', level: 40 }
    ],
    data: [
      { name: 'Pandas', level: 50 },
      { name: 'NumPy', level: 60 },
      { name: 'Matplotlib/Seaborn', level: 82 },
      { name: 'SQL', level: 70 },
      { name: 'Statistical Analysis', level: 78 },
      { name: 'Data Visualization', level: 85 }
    ],
    video: [
      { name: 'Canva', level: 90 },
      { name: 'Adobe', level: 40 },
      { name: 'CapCut', level: 50 },
      { name: 'VN Video Editor', level: 100 },
      { name: 'Audio Editing', level: 70 }
    ]
  };

  const projects = [
  {
    id: 'smart-parking',
    title: 'Smart Parking Management System',
    description:
      'Full-stack Vehicle Parking Management System with real-time booking, admin analytics, and dynamic pricing features.',
    tech: ['Flask', 'SQLite', 'HTML', 'Bootstrap'],
    icon: '🅿️',
    link: '#',
    onClick: () => setSelectedProject('smart-parking'),
  },
  {
    id: 'phishing-detection',
    title: 'AI-Powered Phishing Detection',
    description:
      'Advanced email security system using Random Forest and Gemini AI for real-time phishing detection and threat analysis.',
    tech: ['React', 'Flask', 'Random Forest', 'OAuth2'],
    icon: <Shield className="w-16 h-16" />,
    link: '#',
    onClick: () => setSelectedProject('phishing-detection'),
  },
  {
    id: 'smart-city',
    title: 'Smart City Dashboard',
    description:
      'Real-time urban monitoring system with interactive maps, role-based access, and comprehensive alert systems.',
    tech: ['React', 'TypeScript', 'Node.js', 'Maps API'],
    icon: <Building2 className="w-16 h-16" />,
    link: '#',
    onClick: () => setSelectedProject('smart-city'),
  },
  {
    id: 'disease-prediction',
    title: 'Disease Prediction System',
    description:
      "ML-powered health assessment tool for diabetes, heart disease, and Parkinson's prediction with intuitive Streamlit interface.",
    tech: ['Streamlit', 'Machine Learning', 'Python', 'Healthcare'],
    icon: <Heart className="w-16 h-16" />,
    link: '#',
    onClick: () => setSelectedProject('disease-prediction'), // ✅ Added
  },
  {
    id: 'malware-prediction',
    title: 'Malware Prediction App',
    description:
      'React-based application predicting malware risks using telemetry data, featuring SHAP analysis and interactive dashboards.',
    tech: ['React', 'ML Models', 'SHAP', 'Data Analysis'],
    icon: <Bug className="w-16 h-16" />,
    link: '#',
    onClick: () => setSelectedProject('malware-prediction'), // ✅ Added
  },
 {
  id: 'disaster-management',
  title: 'Disaster Management System',
  description:
    'Centralized climate and disaster management platform with dashboards for users, admins, and agents to monitor data, predict disasters, and manage responses efficiently.',
  tech: ['React (Next.js)', 'Python (Flask)', 'SQLite', 'REST API'],
  icon: <CloudLightning className="w-16 h-16" />, 
  link: 'https://github.com/23f1000356/Disaster-Management',
  onClick: () => setSelectedProject('disaster-management'),
},

 {
  id: 'ai-job-screening',
  title: 'AI-Powered Job Screening',
  description:
    'Automated recruitment assistant for resume screening, JD matching, candidate shortlisting, and interview scheduling.',
  tech: ['Flask', 'Bootstrap 5', 'Scikit-learn', 'SQLite'],
  icon: <Briefcase className="w-16 h-16" />,  // you can also use UserCheck, FileSearch, or ClipboardList
  link: 'https://github.com/23f1000356/Job_screening', // 🔄 replace with your repo link
  onClick: () => setSelectedProject('ai-job-screening'),
},

{
  id: 'ecommerce-website',
  title: 'E-Commerce Website',
  description:
    'A modern full-stack e-commerce platform with authentication, cart, checkout, and admin dashboard features.',
  tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  icon: <ShoppingCart className="w-16 h-16" />,
  link: 'https://e-commerce-nine-umber.vercel.app/',
  onClick: () => setSelectedProject('ecommerce-website'),
},

 {
  id: 'quiz-app',
  title: 'Quiz App',
  description:
    'An interactive student quiz platform with GK and subject quizzes, plus features to create and auto-generate quizzes.',
  tech: ['Next.js', 'Tailwind CSS', 'Node.js'],
  icon: <HelpCircle className="w-16 h-16" />,  // you can also use BookOpen or ClipboardList
  link: 'https://task3-quiz.vercel.app/',
  onClick: () => setSelectedProject('quiz-app'),
},
];


  const hackathons = [
    {
      name: 'Vartak College Coherence 2025',
      description: 'Excelled in a 36-hour hackathon, showcasing innovative solutions and teamwork under tight deadlines.',
      icon: <Trophy className="w-12 h-12" />
    },
    {
      name: 'SJCEM MegaHack 2025',
      description: 'Participated in a national-level hackathon, developing an email phishing detection app with real-time analysis features.',
      icon: <Award className="w-12 h-12" />
    },
    {
      name: 'TechFest 2024',
      description: 'Developed an innovative IoT-based smart home automation system with voice control and energy optimization features.',
      icon: <Trophy className="w-12 h-12" />
    },
    {
      name: 'AI Challenge 2024',
      description: 'Created an AI-powered sustainability tracker that helps users reduce their carbon footprint through personalized recommendations.',
      icon: <Award className="w-12 h-12" />
    },
    {
      name: 'CodeStorm 2023',
      description: 'Built a collaborative coding platform with real-time code sharing, integrated compiler, and peer review system.',
      icon: <Code className="w-12 h-12" />
    },
    {
      name: 'Innovation Hub 2023',
      description: 'Designed a mental health support app using machine learning to provide personalized therapy recommendations and mood tracking.',
      icon: <Lightbulb className="w-12 h-12" />,
      award: 'Best Innovation Award'
    }
  ];

  const courses = [
    {
      provider: 'NPTEL',
      title: 'Data Analytics with Python',
      description: 'Completed comprehensive course covering pandas, numpy, matplotlib, and statistical analysis techniques.',
      link: 'https://www.linkedin.com/in/vishakha-roy-52924b1b6/details/certifications/1715750046593/single-media-viewer/?type=DOCUMENT&profileId=ACoAADI5yTEBKT42uhFuPhtuOA8VzrHTgmJePh8'
    },
    {
      provider: 'Coursera',
      title: 'Google Data Analytics',
      description: 'Professional certificate program covering data cleaning, analysis, and visualization using industry-standard tools.',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/122ZQC58OFRM'
    },
    {
      provider: 'NPTEL',
      title: 'Cloud Computing',
      description: 'Extensive training in cloud technologies, deployment strategies, and distributed computing concepts.',
      link: 'https://www.linkedin.com/in/vishakha-roy-52924b1b6/details/certifications/1732726133210/single-media-viewer/?type=IMAGE&profileId=ACoAADI5yTEBKT42uhFuPhtuOA8VzrHTgmJePh8'
    },
    {
      provider: 'Udemy',
      title: 'Microsoft Excel Advanced',
      description: 'Advanced Excel techniques including VBA programming, pivot tables, and complex data analysis methods.',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-54a260a2-9c7e-4bf9-a554-39c8c8fe525a.pdf'
    },
    {
      provider: 'IIT Madras',
      title: 'Foundation Certificate',
      description: 'Basic foundation course in data science and programming fundamentals.',
      link: 'https://www.linkedin.com/in/vishakha-roy-52924b1b6/details/certifications/1717583278079/single-media-viewer/?type=DOCUMENT&profileId=ACoAADI5yTEBKT42uhFuPhtuOA8VzrHTgmJePh8'
    },
    {
      provider: 'IBM',
      title: 'Machine Learning for Data Science Projects',
      description: 'Comprehensive course on applying machine learning techniques to data science projects.',
      link: 'https://www.linkedin.com/in/vishakha-roy-52924b1b6/details/certifications/1723969336560/single-media-viewer/?type=DOCUMENT&profileId=ACoAADI5yTEBKT42uhFuPhtuOA8VzrHTgmJePh8'
    }
  ];
  useEffect(() => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar button");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            if (link.textContent?.toLowerCase() === entry.target.id) {
              // If section has a dark background, make text white
              if (entry.target.id === "home" || entry.target.id === "projects") {
                link.classList.add("text-white");
                link.classList.remove("text-gray-800");
              } else {
                // On light background sections
                link.classList.add("text-gray-800");
                link.classList.remove("text-white");
              }
            }
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));
  return () => sections.forEach((section) => observer.unobserve(section));
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSkillTabChange = (category: string) => {
    setActiveSkillTab(category);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {selectedProject && (
        <ProjectDetails 
          projectId={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800">
      {/* Navigation */}
      <nav className="navbar fixed top-0 w-full z-50 transition-all duration-300 bg-white/10 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
          >
            VR
          </button>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {['home', 'skills', 'experience', 'education', 'projects', 'hackathons', 'courses', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-yellow-400 transition-colors capitalize font-medium"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/20 backdrop-blur-lg">
            <ul className="flex flex-col space-y-2 px-4 py-4">
              {['home', 'skills', 'experience', 'education', 'projects', 'hackathons', 'courses', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-white hover:text-yellow-400 transition-colors capitalize font-medium w-full text-left"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/5 left-1/10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/5 right-1/10 w-32 h-32 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/5 left-1/5 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
        <div className="flex-1 text-white pr-8">
          <h1 className="text-6xl font-bold mb-4 animate-slide-up">Vishakha Roy</h1>
          <p className="text-xl mb-4 opacity-90">Full Stack Developer | ML Enthusiast | Data Science Practitioner</p>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            Dedicated and enthusiastic Web Developer skilled in HTML, CSS, JavaScript, and React, seeking to contribute to innovative and user-friendly web projects. Driven to apply front-end development skills in a collaborative environment while continuously learning and evolving with modern web technologies. 
            Aspiring Data Scientist with a strong foundation in Python, machine learning, and SQL, eager to apply data-driven techniques to solve real-world problems. Passionate about uncovering insights through data analysis and building predictive models that support strategic decision-making.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button 
          onClick={() => scrollToSection('projects')}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:scale-105 transform transition-all"
            >
          <Code size={20} /> View My Work
            </button>
            <button 
          onClick={() => scrollToSection('contact')}
          className="flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:scale-105 transform transition-all"
            >
          <Mail size={20} /> Get In Touch
            </button>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/vishakha-roy-52924b1b6/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-400 transition-colors">
          <Linkedin size={32} />
            </a>
            <a href="https://github.com/23f1000356" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-400 transition-colors">
          <Github size={32} />
            </a>
          </div>
        </div>
        <img 
          src="/Vishu.jpeg" 
          alt="Vishakha Roy" 
          className="max-w-sm rounded-3xl shadow-2xl"
        />
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden text-white text-center">
        {/* Name first on mobile */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Vishakha Roy</h1>
        
        {/* Image second on mobile */}
        <div className="mb-6 flex justify-center">
          <img src="/Vishu.jpeg" alt="Vishakha Roy"
            className="w-64 h-64 md:w-80 md:h-80 rounded-3xl shadow-2xl object-cover"
          />
        </div>
        
        {/* Tagline and Introduction third on mobile */}
        <p className="text-lg md:text-xl mb-4 opacity-90">Full Stack Developer | ML Enthusiast | Data Science Practitioner</p>
        <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed px-4">
          Dedicated and enthusiastic Web Developer skilled in HTML, CSS, JavaScript, and React, seeking to contribute to innovative and user-friendly web projects. Driven to apply front-end development skills in a collaborative environment while continuously learning and evolving with modern web technologies. 
          Aspiring Data Scientist with a strong foundation in Python, machine learning, and SQL, eager to apply data-driven techniques to solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            onClick={() => scrollToSection('projects')}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:scale-105 transform transition-all"
          >
            <Code size={20} /> View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:scale-105 transform transition-all"
          >
            <Mail size={20} /> Get In Touch
          </button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/vishakha-roy-52924b1b6/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-400 transition-colors">
            <Linkedin size={32} />
          </a>
          <a href="https://github.com/23f1000356" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-400 transition-colors">
            <Github size={32} />
          </a>
        </div>
          </div>
        </div>
      </section>
     

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 relative">
            Skills & Expertise
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'web', label: 'Web Development' },
              { key: 'ml', label: 'Machine Learning' },
              { key: 'data', label: 'Data Science' },
              { key: 'video', label: 'Video Editing' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleSkillTabChange(key)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeSkillTab === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white transform -translate-y-1 shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[activeSkillTab]?.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="font-bold text-lg mb-4 text-gray-800">{skill.name}</div>
                <div className="bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right font-bold text-blue-600">{skill.level}%</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
  <button
    onClick={() => setSelectedProject("smart-city")}
    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:scale-105 transform transition-all"
  >
    Show Web Dev Projects
  </button>

  <button
    onClick={() => setSelectedProject("ai-job-screening")}
    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:scale-105 transform transition-all"
  >
    Show Data Science Projects
  </button>

  <button
    onClick={() => setSelectedProject("disease-prediction")}
    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:scale-105 transform transition-all"
  >
    Show ML Projects
  </button>
</div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 relative">
            Professional Experience
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              <div className="md:flex md:justify-start md:w-1/2 md:pr-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                  <div className="absolute top-6 -right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white hidden md:block"></div>
                  <h3 className="text-xl font-bold mb-2">Python Full Stack Developer Intern</h3>
                  <h4 className="text-blue-600 font-semibold mb-2">CodeHub Technologies India Pvt. Ltd.</h4>
                  <p className="text-gray-500 mb-4">May 2025 - July 2025</p>
                  <p className="text-gray-700">Contributed to full-stack web development using Python, enhancing both frontend and backend components. Assisted in building responsive UIs and integrating RESTful APIs.</p>
                </div>
              </div>
              
              <div className="md:flex md:justify-end md:w-1/2 md:pl-8 md:ml-auto">
                <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                  <div className="absolute top-6 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white hidden md:block"></div>
                  <h3 className="text-xl font-bold mb-2">AI ML Intern</h3>
                  <h4 className="text-blue-600 font-semibold mb-2">Edunet Foundation (Virtual Internship)</h4>
                  <p className="text-gray-500 mb-4">July 2024 - August 2024</p>
                  <p className="text-gray-700">Completed a 4-week virtual internship focused on Cloud Computing, AI, GenAI, and data analytics using IBM Watson and IBM Cloud. Engaged in project-based learning with expert-led sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 relative">
            Educational Journey
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-4 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="text-blue-600 text-5xl mb-6 text-center">
                <University size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">B.E. Computer Science</h3>
              <h4 className="text-blue-600 font-semibold mb-2 text-center">St. John College of Engineering and Management</h4>
              <p className="text-gray-500 mb-2 text-center">May 2022 - May 2026</p>
              <p className="font-bold text-gray-800 text-center">CGPA: 7.5</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-4 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="text-blue-600 text-5xl mb-6 text-center">
                <GraduationCap size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">BS Data Science & Programming</h3>
              <h4 className="text-blue-600 font-semibold mb-2 text-center">IIT Madras (Online)</h4>
              <p className="text-gray-500 mb-2 text-center">January 2023 - December 2025</p>
              <p className="font-bold text-gray-800 text-center">CGPA: 7.8</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-4 transition-all duration-300 relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="text-blue-600 text-5xl mb-6 text-center">
                <School size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Higher Secondary Certificate</h3>
              <h4 className="text-blue-600 font-semibold mb-2 text-center">Delhi Public School, Sushant Lok</h4>
              <p className="text-gray-500 mb-2 text-center">March 2020 - February 2022</p>
              <p className="font-bold text-gray-800 text-center">Percentage: 75%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 relative">
            Featured Projects
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-white/50 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:transform hover:-translate-y-3 transition-all duration-300 cursor-pointer"
                onClick={project.onClick || (() => {})}
              >
                <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-6xl">
                  {typeof project.icon === 'string' ? project.icon : project.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/90 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 relative">
            Hackathon Achievements
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((hackathon, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-4 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="text-blue-600 mb-6 flex justify-center">
                  {hackathon.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{hackathon.name}</h3>
                {hackathon.award && (
                  <p className="text-purple-600 font-semibold mb-2 text-center">{hackathon.award}</p>
                )}
                <p className="text-gray-700 text-center leading-relaxed">{hackathon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 relative">
            Certifications & Courses
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {course.provider}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                <a 
                  href={course.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 relative">
            Get In Touch
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-24 h-1 bg-white/50 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Let's Connect!</h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat about technology and innovation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-gray-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-white/80">122vishakha2092@sjcem.edu.in</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-gray-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-white/80">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/90 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/90 font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white/90 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/90 font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-vertical"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:scale-105 transform transition-all"
                >
                  <Send size={20} /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.linkedin.com/in/vishakha-roy-52924b1b6/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/23f1000356" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="mailto:122vishakha2092@sjcem.edu.in" className="text-white text-2xl hover:text-blue-400 transition-colors">
              <Mail size={28} />
            </a>
            <a href="tel:+919354565648" className="text-white text-2xl hover:text-blue-400 transition-colors">
              <Phone size={28} />
            </a>
          </div>
          <p>&copy; 2025 Vishakha Roy. Crafted with 💜 and lots of ☕</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default App;