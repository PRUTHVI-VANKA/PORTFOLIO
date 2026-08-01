'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronLeft, ChevronRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const portfolioData = {
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
    {
      degree: "B.Tech in Computer Science Engineering (AIML)",
      institution: "Bharati Vidyapeeth College of Engineering",
      score: "CGPA: 8.9/10",
      year: "Dec 2021 – Jun 2025"
    },
    {
      degree: "Class XII",
      institution: "Aditya Junior College",
      score: "89.6%",
      year: "2019 – 2021"
    },
    {
      degree: "Class X",
      institution: "Atimya VidyaPeeth",
      score: "80%",
      year: "2018 – 2019"
    }
  ],

  experience: [
    {
      role: "IT Executive",
      company: "OM Ship Suppliers",
      period: "Mar 2026 – Present",
      responsibilities: [
        "Successfully managed Odoo ERP operations, provided comprehensive user support, and optimized daily technical tasks efficiently."
      ]
    },
    {
      role: "IT Executive",
      company: "Genesis",
      period: "Aug 2025 – Mar 2026",
      responsibilities: [
        "Handled extensive IT support infrastructure, system troubleshooting, and routine maintenance across critical corporate business operations."
      ]
    }
  ],

  internships: [
    {
      role: "Intern",
      company: "Deendayal Port Authority",
      period: "Jun 2024 – Aug 2024",
      responsibilities: [
        "Developed automated data-driven analytics solutions using MySQL and Python while successfully deploying predictive artificial intelligence models."
      ]
    },
    {
      role: "Intern",
      company: "Techno Hacks EdTech",
      period: "May 2024 – Jun 2024",
      responsibilities: [
        "Implemented core machine learning algorithms utilizing Python libraries alongside Scikit-learn for advanced real-world predictive modeling."
      ]
    },
    {
      role: "Intern",
      company: "Verzeo",
      period: "Sep 2022 – Oct 2022",
      responsibilities: [
        "Designed robust machine learning models using Python and TensorFlow while conducting thorough data preprocessing and system evaluation."
      ]
    }
  ],

  projects: [
    {
      name: "Skin Care Recommendation",
      period: "Feb 2025 – Apr 2025",
      description: "Built an ML-based recommendation system using Python and Pandas to suggest skincare products based on skin type and ingredients."
    },
    {
      name: "Pedestrian Detection",
      period: "Nov 2024",
      description: "Real-time pedestrian detection system using OpenCV and Haar cascades for automated object tracking and safety monitoring."
    },
    {
      name: "Face Expression Recognition Using CNN",
      period: "Jul 2024",
      description: "Implemented a deep learning CNN model in TensorFlow to detect and classify human facial expressions through live camera feeds."
    },
    {
      name: "Diabetes Prediction",
      period: "May 2024",
      description: "Designed a Random Forest classification model to predict diabetes risk using medical datasets with automated feature scaling and analysis."
    },
    {
      name: "Ignite Guard (IoT)",
      period: "Apr 2024",
      description: "Created an IoT-based gas leak detection system integrating MQ-5 sensors and Python for real-time alert generation and safety monitoring."
    },
    {
      name: "Movie Classification Review",
      period: "Apr 2024",
      description: "Built a sentiment analysis model using Gaussian Naive Bayes to classify movie reviews based on polarity and embeddings."
    },
    {
      name: "ECG Prediction Using ML",
      period: "Sep 2023",
      description: "Engineered a machine learning pipeline to predict cardiac abnormalities from ECG signals using Scikit-learn and time-series analysis."
    },
    {
      name: "Heart Disease Prediction Using AI",
      period: "Mar 2023 – Apr 2023",
      description: "Developed a predictive AI model using Python and Pandas to analyze clinical data for early heart disease risk assessment."
    },
    {
      name: "Face Detection Using AI",
      period: "Sep 2022",
      description: "Built a real-time face detection system using OpenCV and deep learning to automate and improve identity recognition."
    }
  ]
};

const sections = ['Home', 'Education', 'Experience', 'Projects', 'Contact'];

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const navigateToSection = (index) => {
    setCurrentSection(index);
    setIsMenuOpen(false);
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className={`h-screen w-screen overflow-hidden transition-colors duration-500 flex flex-col ${isDark ? 'bg-[#221426]' : 'bg-[#F8F8FF]'}`}>
      {isDark && <StarryBackground />}

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDark ? 'rgba(107, 76, 122, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? 'rgba(107, 76, 122, 0.5)' : 'rgba(0, 0, 0, 0.2)'};
        }
      `}</style>

      <HamburgerMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        currentSection={currentSection}
        navigateToSection={navigateToSection}
        isDark={isDark}
      />

      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

      <NavigationArrows
        handlePrev={handlePrev}
        handleNext={handleNext}
        currentSection={currentSection}
        totalSections={sections.length}
        isDark={isDark}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex-1 overflow-y-auto overflow-x-hidden"
        >
          {currentSection === 0 && <HomePage isDark={isDark} />}
          {currentSection === 1 && <EducationPage isDark={isDark} />}
          {currentSection === 2 && <ExperiencePage isDark={isDark} />}
          {currentSection === 3 && <ProjectsPage isDark={isDark} />}
          {currentSection === 4 && <ContactPage isDark={isDark} />}
        </motion.div>
      </AnimatePresence>

      <SectionIndicator
        currentSection={currentSection}
        totalSections={sections.length}
        isDark={isDark}
      />
    </div>
  );
}

function ShootingStar() {
  const startX = Math.random() * 100;
  const startY = Math.random() * 50;
  const duration = 2 + Math.random() * 1;
  const delay = Math.random() * 3;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        boxShadow: '0 0 10px rgba(255,255,255,0.8)',
      }}
      animate={{
        left: `${startX + 50}%`,
        top: `${startY + 50}%`,
        opacity: [1, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
      }}
    />
  );
}

function StarryBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <ShootingStar key={`shooting-${i}`} />
      ))}

      <motion.div
        className="absolute top-20 right-20 w-16 h-16 bg-yellow-200 rounded-full shadow-lg shadow-yellow-200/50"
        animate={{
          y: [0, -10, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

function HamburgerMenu({ isOpen, setIsOpen, currentSection, navigateToSection, isDark }) {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 left-6 z-50 p-3 rounded-lg transition-all duration-300 ${
          isDark ? 'bg-purple-900/30 hover:bg-purple-800/40' : 'bg-white/80 hover:bg-white'
        } backdrop-blur-sm`}
      >
        {isOpen ? (
          <X className={isDark ? 'text-white' : 'text-gray-800'} size={24} />
        ) : (
          <Menu className={isDark ? 'text-white' : 'text-gray-800'} size={24} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 h-full w-64 z-40 ${
              isDark ? 'bg-purple-950/95' : 'bg-white/95'
            } backdrop-blur-md shadow-2xl`}
          >
            <div className="pt-24 px-6">
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => navigateToSection(index)}
                  className={`w-full text-left py-4 px-4 rounded-lg mb-2 transition-all ${
                    currentSection === index
                      ? isDark ? 'bg-purple-700 text-white' : 'bg-gray-800 text-white'
                      : isDark ? 'text-gray-300 hover:bg-purple-800/50' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
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
      className={`fixed bottom-6 left-6 z-40 p-3 rounded-full transition-all duration-300 ${
        isDark ? 'bg-purple-900/30 hover:bg-purple-800/40' : 'bg-white/80 hover:bg-white'
      } backdrop-blur-sm shadow-lg`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? (
        <Moon className="text-yellow-200" size={24} />
      ) : (
        <Sun className="text-orange-500" size={24} />
      )}
    </motion.button>
  );
}

function NavigationArrows({ handlePrev, handleNext, currentSection, totalSections, isDark }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex gap-3">
      <motion.button
        onClick={handlePrev}
        disabled={currentSection === 0}
        className={`p-3 rounded-full transition-all duration-300 ${
          currentSection === 0
            ? 'opacity-30 cursor-not-allowed'
            : isDark ? 'bg-purple-900/30 hover:bg-purple-800/40' : 'bg-white/80 hover:bg-white'
        } backdrop-blur-sm shadow-lg`}
        whileHover={currentSection !== 0 ? { scale: 1.1 } : {}}
        whileTap={currentSection !== 0 ? { scale: 0.9 } : {}}
      >
        <ChevronLeft className={isDark ? 'text-white' : 'text-gray-800'} size={24} />
      </motion.button>
      <motion.button
        onClick={handleNext}
        disabled={currentSection === totalSections - 1}
        className={`p-3 rounded-full transition-all duration-300 ${
          currentSection === totalSections - 1
            ? 'opacity-30 cursor-not-allowed'
            : isDark ? 'bg-purple-900/30 hover:bg-purple-800/40' : 'bg-white/80 hover:bg-white'
        } backdrop-blur-sm shadow-lg`}
        whileHover={currentSection !== totalSections - 1 ? { scale: 1.1 } : {}}
        whileTap={currentSection !== totalSections - 1 ? { scale: 0.9 } : {}}
      >
        <ChevronRight className={isDark ? 'text-white' : 'text-gray-800'} size={24} />
      </motion.button>
    </div>
  );
}

function SectionIndicator({ currentSection, totalSections, isDark }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {[...Array(totalSections)].map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentSection === index
              ? isDark ? 'bg-purple-400 w-2 h-8' : 'bg-gray-800 w-2 h-8'
              : isDark ? 'bg-purple-800/50' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  );
}

function HomePage({ isDark }) {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {portfolioData.personal.name}
          </h1>
          <h2 className={`text-2xl md:text-3xl mb-8 ${isDark ? 'text-purple-300' : 'text-gray-700'}`}>
            {portfolioData.personal.title}
          </h2>

          <motion.p
            className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {portfolioData.personal.description}
          </motion.p>

          <motion.div
            className="flex gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isDark ? 'bg-purple-900/30 hover:bg-purple-800/40 text-white' : 'bg-gray-800 hover:bg-gray-900 text-white'
              }`}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isDark ? 'bg-purple-900/30 hover:bg-purple-800/40 text-white' : 'bg-gray-800 hover:bg-gray-900 text-white'
              }`}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {portfolioData.skills.technical.map((skill, index) => (
                  <div key={index}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-gray-700'}`}>
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDark ? 'bg-purple-900/40 text-purple-200' : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {portfolioData.skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDark ? 'bg-purple-900/40 text-purple-200' : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Certifications
              </h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {portfolioData.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`mr-2 ${isDark ? 'text-purple-400' : 'text-gray-800'}`}>•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function EducationPage({ isDark }) {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-4xl w-full">
        <motion.h1
          className={`text-4xl md:text-5xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Education
        </motion.h1>

        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-purple-900/20 border border-purple-800/30' : 'bg-white border border-gray-200'
              } shadow-lg`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {edu.degree}
              </h3>
              <p className={`mb-2 ${isDark ? 'text-purple-300' : 'text-gray-700'}`}>
                {edu.institution}
              </p>
              <div className="flex justify-between items-center">
                <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-gray-800'}`}>
                  {edu.score}
                </span>
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperiencePage({ isDark }) {
  return (
    <div className="w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl w-full">
        <motion.h1
          className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Experience & Internships
        </motion.h1>

        {/* Work Experience Section */}
        <div className="mb-10">
          <h2 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-purple-300' : 'text-gray-800'}`}>
            Work Experience
          </h2>
          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-purple-900/20 border border-purple-800/30' : 'bg-white border border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`${isDark ? 'text-purple-300' : 'text-gray-700'}`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.period}
                  </span>
                </div>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDark ? 'text-purple-400' : 'text-gray-800'}`}>•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internships Section */}
        <div>
          <h2 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-purple-300' : 'text-gray-800'}`}>
            Internships
          </h2>
          <div className="space-y-6 mb-12">
            {portfolioData.internships.map((intern, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-purple-900/20 border border-purple-800/30' : 'bg-white border border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {intern.role}
                    </h3>
                    <p className={`${isDark ? 'text-purple-300' : 'text-gray-700'}`}>
                      {intern.company}
                    </p>
                  </div>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {intern.period}
                  </span>
                </div>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {intern.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDark ? 'text-purple-400' : 'text-gray-800'}`}>•</span>
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

function ProjectsPage({ isDark }) {
  return (
    <div className="w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-6xl w-full">
        <motion.h1
          className={`text-4xl md:text-5xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6 overflow-y-auto max-h-[70vh] pr-4">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-purple-900/20 border border-purple-800/30' : 'bg-white border border-gray-200'
              } shadow-lg`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {project.name}
              </h3>
              <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.period}
              </p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage({ isDark }) {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 min-h-screen">
      <div className="max-w-2xl w-full text-center">
        <motion.h1
          className={`text-4xl md:text-5xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get In Touch
        </motion.h1>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={`flex items-center justify-center gap-3 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <Mail size={24} />
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={`hover:underline ${isDark ? 'text-purple-300' : 'text-gray-900'}`}
            >
              {portfolioData.personal.email}
            </a>
          </div>

          <div className={`flex items-center justify-center gap-3 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span>📱</span>
            <a
              href={`tel:${portfolioData.personal.phone}`}
              className={`hover:underline ${isDark ? 'text-purple-300' : 'text-gray-900'}`}
            >
              {portfolioData.personal.phone}
            </a>
          </div>

          <motion.a
            href={portfolioData.personal.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold transition-all ${
              isDark ? 'bg-purple-700 hover:bg-purple-600 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Resume</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
