'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const portfolioData = {
  personal: {
    name: "Pruthvi Vanka",
    title: "Aspiring AI/ML Engineer | Data Analyst | Python Developer",
    description: "Analytical and performance-driven Computer Engineering student (2025 pass-out) skilled in Python, SQL, Power BI, and Flask. Experienced in building predictive models, deploying ML solutions, and creating interactive dashboards to transform raw data into actionable insights for Data Analyst or AI/ML roles.",
    email: "vankapruthvi@gmail.com",
    phone: "+91-9390350986",
    location: "Vishakapatnam",
    linkedin: "https://www.linkedin.com/in/pruthvi-vanka-7539093a4/",
    github: "https://github.com/PRUTHVI-VANKA",
    resumeLink: "/Pruthvi Resume.pdf"
  },
  skills: {
    technical: [
      { category: "Programming", items: ["Python", "SQL"] },
      { category: "AI & ML", items: ["Scikit-learn", "TensorFlow", "OpenCV"] },
      { category: "Data Analysis", items: ["Pandas", "NumPy", "EDA", "Excel"] },
      { category: "Visualization", items: ["Matplotlib", "Seaborn", "Power BI", "Tableau"] },
      { category: "Tools", items: ["Git", "Vercel", "Odoo ERP"] }
    ],
    soft: ["Fast Learner", "Project Management", "Team Collaboration", "Leadership", "Adaptability", "Problem Solving"]
  },
  certifications: [
    "Complete SQL Bootcamp — Udemy",
    "Introduction to Data Analytics — Coursera",
    "Python 101 for Data Science — IBM",
    "Data Analytics Essentials — Cisco Networking Academy"
  ],
  education: [
    { degree: "B.Tech in Computer Science Engineering (AIML)", institution: "Bharati Vidyapeeth College of Engineering", score: "CGPA: 8.9/10", year: "Dec 2021 – Jun 2025" },
    { degree: "Class XII", institution: "Aditya Junior College", score: "89.6%", year: "May 2019 – May 2021" },
    { degree: "Class X", institution: "Atimya VidyaPeeth", score: "80%", year: "Apr 2018 – Mar 2019" }
  ],
  experience: [
    { role: "IT Executive", company: "OM Ship Suppliers", period: "Mar 2026 – Present", responsibilities: ["Successfully managed Odoo ERP operations, provided comprehensive user support, and optimized daily technical tasks efficiently."] },
    { role: "IT Executive", company: "Genesis Shipping Services", period: "Aug 2025 – Mar 2026", responsibilities: ["Handled extensive IT support infrastructure, system troubleshooting, and routine maintenance across critical corporate business operations."] }
  ],
  internships: [
    { role: "Intern", company: "Deendayal Port Authority", period: "Jun 2024 – Aug 2024", responsibilities: ["Developed automated data-driven analytics solutions using MySQL and Python while successfully deploying predictive artificial intelligence models."] },
    { role: "Intern", company: "Techno Hacks EdTech", period: "May 2024 – Jun 2024", responsibilities: ["Implemented core machine learning algorithms utilizing Python libraries alongside Scikit-learn for advanced real-world predictive modeling."] },
    { role: "Intern", company: "Verzeo", period: "Sep 2022 – Oct 2022", responsibilities: ["Designed robust machine learning models using Python and TensorFlow while conducting thorough data preprocessing and system evaluation."] }
  ],
  projects: [
    { name: "Skin Care Recommendation", period: "Feb 2025 – Apr 2025", description: "Built an ML-based recommendation system using Python and Pandas to suggest skincare products based on skin type and ingredients." },
    { name: "Pedestrian Detection", period: "Nov 2024", description: "Real-time pedestrian detection system using OpenCV and Haar cascades for automated object tracking and safety monitoring." },
    { name: "Face Expression Recognition Using CNN", period: "Jul 2024", description: "Implemented a deep learning CNN model in TensorFlow to detect and classify human facial expressions through live camera feeds." },
    { name: "Diabetes Prediction", period: "May 2024", description: "Designed a Random Forest classification model to predict diabetes risk using medical datasets with automated feature scaling and analysis." },
    { name: "Ignite Guard (IoT)", period: "Apr 2024", description: "Created an IoT-based gas leak detection system integrating MQ-5 sensors and Python for real-time alert generation and safety monitoring." },
    { name: "Movie Classification Review", period: "Apr 2024", description: "Built a sentiment analysis model using Gaussian Naive Bayes to classify movie reviews based on polarity and embeddings." },
    { name: "ECG Prediction Using ML", period: "Sep 2023", description: "Engineered a machine learning pipeline to predict cardiac abnormalities from ECG signals using Scikit-learn and time-series analysis." },
    { name: "Heart Disease Prediction Using AI", period: "Mar 2023 – Apr 2023", description: "Developed a predictive AI model using Python and Pandas to analyze clinical data for early heart disease risk assessment." },
    { name: "Face Detection Using AI", period: "Sep 2022", description: "Built a real-time face detection system using OpenCV and deep learning to automate and improve identity recognition." }
  ]
};

const sections = ['Home', 'Education', 'Experience', 'Projects', 'Contact'];

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const [targetSection, setTargetSection] = useState(0); // Tracks destination page name for flash overlay
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [showTransitionOverlay, setShowTransitionOverlay] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const changeSection = (newIndex) => {
    if (newIndex >= 0 && newIndex < sections.length && newIndex !== currentSection) {
      setTargetSection(newIndex); // Set destination section for overlay
      setShowTransitionOverlay(true);
      setTimeout(() => {
        setCurrentSection(newIndex);
        setShowTransitionOverlay(false);
      }, 500); // Cinematic flash duration
    }
  };

  // Handle Wheel / Horizontal Navigation safely (Ignoring pure vertical scroll inside content)
  useEffect(() => {
    let lastTime = 0;
    const handleWheel = (e) => {
      // If user is scrolling vertically with dominant deltaY, check if they are trying to scroll inside content
      // We only trigger page change if horizontal intent (deltaX) is strong or vertical scroll happens at edges / non-scrollable areas
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
        const now = Date.now();
        if (now - lastTime < 900) return;

        if (e.deltaX > 20) {
          if (currentSection < sections.length - 1) {
            changeSection(currentSection + 1);
            lastTime = now;
          }
        } else if (e.deltaX < -20) {
          if (currentSection > 0) {
            changeSection(currentSection - 1);
            lastTime = now;
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  const navigateToSection = (index) => {
    changeSection(index);
    setIsMenuOpen(false);
  };

  return (
    <div className={`${isDark ? 'dark' : ''} h-screen w-screen overflow-hidden select-none`}>
      <div className="h-full w-full overflow-hidden transition-colors duration-500 flex flex-col relative bg-background text-foreground">
        
        {isDark && <StarryBackground />}
        <GlowingOrbs isDark={isDark} />

        {/* Cinematic Big Heading Flash Overlay showing DESTINATION Page Name */}
        <AnimatePresence>
          {showTransitionOverlay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-background/80 pointer-events-none"
            >
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-wider text-primary animate-pulse">
                {sections[targetSection]}
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        <HamburgerMenu
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          currentSection={currentSection}
          navigateToSection={navigateToSection}
        />

        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

        {/* Left-Side Floating Section Indicator */}
        <LeftSectionIndicator currentSection={currentSection} />

        {/* Main Content with Strict Horizontal-Only Drag */}
        <motion.div
          className="flex-1 overflow-y-auto overflow-x-hidden z-10 pl-12 md:pl-24"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            // Require intentional horizontal swipe to avoid conflicts with vertical scrolling
            if (offset.x < -80 || velocity.x < -400) {
              changeSection(currentSection + 1); // Swipe Left -> Next Page
            } else if (offset.x > 80 || velocity.x > 400) {
              changeSection(currentSection - 1); // Swipe Right -> Prev Page
            }
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-full flex flex-col justify-center"
            >
              {currentSection === 0 && <HomePage />}
              {currentSection === 1 && <EducationPage />}
              {currentSection === 2 && <ExperiencePage />}
              {currentSection === 3 && <ProjectsPage />}
              {currentSection === 4 && <ContactPage />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

function LeftSectionIndicator({ currentSection }) {
  const currentTitle = sections[currentSection];
  return (
    <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center pointer-events-none">
      <div className="text-xs font-mono tracking-widest text-primary/60 uppercase flex items-center gap-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>
        <span>// 0{currentSection + 1}</span>
        <span className="w-8 h-[1px] bg-primary/30"></span>
        <span className="text-foreground/80 font-semibold">{currentTitle}</span>
      </div>
    </div>
  );
}

function GlowingOrbs({ isDark }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] opacity-30 ${isDark ? 'bg-purple-600' : 'bg-sky-400'}`}
        animate={{ x: [0, 50, -30, 0], y: [0, 30, 60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-[120px] opacity-25 ${isDark ? 'bg-indigo-600' : 'bg-cyan-300'}`}
        animate={{ x: [0, -40, 40, 0], y: [0, -50, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function StarryBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ opacity: [0.1, 0.8, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
    </div>
  );
}

function HamburgerMenu({ isOpen, setIsOpen, currentSection, navigateToSection }) {
  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-xl transition-all duration-300 backdrop-blur-md bg-card border border-border text-foreground shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 h-full w-72 z-40 backdrop-blur-xl flex flex-col pt-28 px-6 bg-card/95 border-r border-border text-foreground shadow-2xl"
          >
            {sections.map((section, index) => (
              <motion.button
                key={section}
                onClick={() => navigateToSection(index)}
                className={`w-full text-left py-3 px-4 rounded-xl mb-3 font-medium transition-all ${
                  currentSection === index
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-foreground/80 hover:bg-muted'
                }`}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
              >
                {section}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ThemeToggle({ isDark, setIsDark }) {
  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full transition-all duration-300 backdrop-blur-md bg-card border border-border text-foreground shadow-lg"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? <Moon className="text-yellow-300" size={22} /> : <Sun className="text-amber-500" size={22} />}
    </motion.button>
  );
}

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 min-h-full">
      <div className="max-w-5xl w-full">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          
          <div className="inline-flex items-center px-5 py-2.5 rounded-full backdrop-blur-xl bg-card/80 border border-primary/30 shadow-lg shadow-primary/5 mb-6">
            <span className="text-foreground/95 tracking-wide font-medium text-sm">Code. Predict. Deploy.</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-foreground">
            {portfolioData.personal.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-primary">
            {portfolioData.personal.title}
          </h2>

          <p className="text-base md:text-lg mb-8 leading-relaxed max-w-3xl text-muted-foreground">
            {portfolioData.personal.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all shadow-lg bg-card border border-border text-foreground hover:bg-muted/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all shadow-lg bg-card border border-border text-foreground hover:bg-muted/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} className="text-blue-500" />
              <span>LinkedIn</span>
            </motion.a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-2xl backdrop-blur-md bg-card border border-border shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-foreground">Technical Skills</h3>
              <div className="space-y-4">
                {portfolioData.skills.technical.map((skill, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold mb-2 text-primary">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.08 }}
                          className="px-3 py-1 rounded-lg text-xs font-medium cursor-default bg-muted/60 text-foreground border border-border"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl backdrop-blur-md flex flex-col justify-between bg-card border border-border shadow-xl">
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Soft Skills</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {portfolioData.skills.soft.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 rounded-lg text-xs font-medium cursor-default bg-muted/60 text-foreground border border-border"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground">Certifications</h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {portfolioData.certifications.map((cert, index) => (
                    <motion.li key={index} whileHover={{ x: 4 }} className="flex items-start">
                      <span className="mr-2 font-bold text-primary">•</span>
                      {cert}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function EducationPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-28 min-h-full">
      <div className="max-w-4xl w-full">
        <motion.h1 className="text-3xl md:text-5xl font-bold mb-10 text-foreground" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Education
        </motion.h1>

        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-md bg-card border border-border shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2 text-foreground">{edu.degree}</h3>
              <p className="mb-4 font-medium text-primary">{edu.institution}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold px-3 py-1 rounded-lg bg-muted text-foreground">{edu.score}</span>
                <span className="text-muted-foreground">{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 py-24 min-h-full">
      <div className="max-w-4xl w-full">
        <motion.h1 className="text-3xl md:text-5xl font-bold mb-8 text-foreground" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Experience & Internships
        </motion.h1>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-6 text-foreground">Work Experience</h2>
          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-md bg-card border border-border shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="font-medium text-primary">{exp.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold bg-muted text-foreground">{exp.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-0.5 font-bold text-primary">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6 text-foreground">Internships</h2>
          <div className="space-y-6 pb-12">
            {portfolioData.internships.map((intern, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-md bg-card border border-border shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{intern.role}</h3>
                    <p className="font-medium text-primary">{intern.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold bg-muted text-foreground">{intern.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {intern.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-0.5 font-bold text-primary">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 py-28 min-h-full">
      <div className="max-w-6xl w-full">
        <motion.h1 className="text-3xl md:text-5xl font-bold mb-10 text-foreground" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[65vh] pr-2 pb-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-md flex flex-col justify-between bg-card border border-border shadow-xl"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <div>
                <h3 className="text-lg font-bold mb-1.5 text-foreground">{project.name}</h3>
                <p className="text-xs font-semibold mb-3 text-primary">{project.period}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 min-h-full">
      <div className="max-w-2xl w-full text-center">
        <motion.h1 className="text-3xl md:text-5xl font-bold mb-10 text-foreground" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Get In Touch
        </motion.h1>

        <motion.div
          className="p-8 rounded-3xl backdrop-blur-md space-y-6 bg-card border border-border shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 text-base md:text-lg text-muted-foreground">
            <Mail className="text-primary" size={22} />
            <a href={`mailto:${portfolioData.personal.email}`} className="hover:underline font-medium text-foreground">
              {portfolioData.personal.email}
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 text-base md:text-lg text-muted-foreground">
            <span className="text-xl">📱</span>
            <a href={`tel:${portfolioData.personal.phone}`} className="hover:underline font-medium text-foreground">
              {portfolioData.personal.phone}
            </a>
          </div>

          <div className="pt-4">
            <motion.a
              href={portfolioData.personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg bg-primary text-primary-foreground hover:opacity-90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Resume</span>
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}