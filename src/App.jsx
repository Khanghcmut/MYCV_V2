import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileText, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code, 
  Terminal, 
  ExternalLink, 
  Cpu, 
  Database, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';

// --- Data Configuration ---
const portfolioData = {
  personalInfo: {
    name: "Hoang Khang Phan",
    title: "Data Engineer & AI Researcher",
    subtitle: "Bachelor of Applied Science, HCMUT-VNUHCM",
    email: "khanghoang2411@gmail.com",
    phone: "0934778545",
    github: "github.com/Khanghcmut", 
    linkedin: "www.linkedin.com/in/khang-phan-361a192aa/", 
    orcid: "0009-0007-1578-0977", 
    location: "Ho Chi Minh City, Vietnam",
    about: "I am an energetic, curious researcher passionate about implementing AI into human life. My main research areas are Machine Learning for Life Science, Ubiquitous Computing Technology, and Human-Centric AI Applications. I thrive on solving complex problems involving sensor data, human activity recognition, and healthcare technology."
  },
  education: [
    {
      degree: "Bachelor of Applied Science",
      institution: "HCMUT-VNUHCM (Bach Khoa)",
      period: "Sep 2021 - Nov 2025",
      details: "Research supervisor: MSc. Nhat Tan Le. GPA: 2.8/4. IELTS: 7.5 (C1,2025)."
    }
  ],
  awards: [
    { title: "Best Paper Award", event: "ABC Challenge 2024", year: "2024", icon: "🏆" },
    { title: "4th Place", event: "SHL Challenge 2024 (@HASCA, Ubicomp/ISWC)", year: "2024", icon: "🏅" },
    { title: "4th Place", event: "WEAR Challenge 2025 (@HASCA, Ubicomp/ISWC)", year: "2025", icon: "🏅" },
    { title: "Fujifilm Award", event: "BMEIC 2024", year: "2024", icon: "🎖️" },
  ],
  skills: {
    languages: ["Python", "SQL", "JavaScript", "C++", "C"],
    frameworks: ["React", "Node.js", "TensorFlow/Keras", "Scikit-learn", "Pandas", "Seaborn"],
    tools: ["Git", "Azure", "MySQL", "MongoDB", "Docker"],
    soft: ["Leadership", "Critical Thinking", "Independent Research", "Data Analysis"]
  },
  experience: [
    {
      role: "Software Engineer",
      company: "CVII SOLUTIONS COMPANY LIMITED",
      period: "Jan 2025 - Nov 2025",
      description: [
        "Built a React Native app connected to AI cameras for person and vehicle control.",
        "Implemented automatic person verification for check-in systems using Vietnamese ID/driving licenses.",
        "Monitored AI camera performance and application stability."
      ]
    }
  ],
  publications: [
    {
      title: "Robust In-the-Wild Exercise Recognition from a Single Wearable: Data-Side Fusion, Sensor Rotation, and Feature Engineering",
      conference: "ACM Ubicomp / ISWC 2025",
      status: "A* Conference Paper",
      role: "1st Author",
      description: "Identified problems with side/orientation inconsistency in wearables. Performed Data-Side Fusion and Feature Engineering to enhance F1 score by 10% using a single sensor.",
      tags: ["Wearable Computing", "Feature Engineering", "HAR"],
      url: "https://arxiv.org/abs/2511.23173" // PASTE YOUR LINK HERE
    },
    {
      title: "Enhanced Transportation and Locomotion Mode Recognition through Inertial Sensing Data",
      conference: "ACM Ubicomp / ISWC 2024",
      status: "A Conference Paper",
      role: "1st Author",
      description: "Handled a 32GB+ dataset to build a data-driven pipeline for IMU data (Accelerometer, Gyroscope, Magnetometer) without GPS. Ranked 4th at SHL Challenge 2024.",
      tags: ["Big Data", "IMU", "Transportation Mode"],
      url: "https://dl.acm.org/doi/10.1145/3675094.3678461" // PASTE YOUR LINK HERE
    },
    {
      title: "Practitioner activity recognition in Endotracheal Suctioning Activities",
      conference: "IEEE / ABC Conference 2024",
      status: "Best Challenge Paper",
      role: "1st Author",
      description: "Conducted Feature Extraction from skeleton pose data (video) for activity recognition. Constructed a Generative model to augment ES activity data.",
      tags: ["Computer Vision", "Generative Models", "Healthcare"],
      url: "https://doi.org/10.1109/ABC61795.2024.10651640" // PASTE YOUR LINK HERE
    },
    {
      title: "Finger gesture recognition via sEMG signals",
      conference: "SSRN Preprint",
      status: "Preprint",
      role: "Co-1st Author",
      description: "Proposed XAI (SHAP) for sensor and feature selection, demonstrating that 5-10 sensors are sufficient for accepted accuracy in finger gesture tasks.",
      tags: ["sEMG", "XAI", "HCI"],
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5271916" // PASTE YOUR LINK HERE
    },
    {
      title: "Student mobility and behavior analysis for daily stress detection",
      conference: "ABC 2024 / Arxiv Preprint",
      status: "Preprint",
      role: "Team Lead",
      description: "Built a pipeline to transform GPS signals and student timetables to mine privacy-aware features. Achieved 65% F1 score in stress recognition.",
      tags: ["GPS Analysis", "Stress Detection", "XAI"],
      url: "https://arxiv.org/pdf/2511.23200" // PASTE YOUR LINK HERE
    },
    {
      title: "Endotracheal Suctioning activity recognition and student support tool",
      conference: "Ongoing Project",
      status: "In Progress",
      role: "Lead Developer",
      description: "Developed an LLM-based activity recognition framework using Gemini 2.5 Pro, outperforming traditional ML by 10-15% in accuracy.",
      tags: ["LLM", "Gemini", "Education Support"],
      url: "#" // PASTE YOUR LINK HERE
    }
  ]
};

// --- Components ---

const SectionTitle = ({ children, id }) => (
  <div className="flex flex-col items-center mb-12" id={id}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 relative z-10">{children}</h2>
    <div className="w-24 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
  </div>
);

const SkillBadge = ({ skill }) => (
  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default">
    {skill}
  </span>
);

const PublicationCard = ({ pub }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 flex flex-col h-full group">
    <div className="flex justify-between items-start mb-3">
      <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
        pub.role.includes("1st") ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
      }`}>
        {pub.role}
      </span>
      <span className="text-xs text-slate-500 font-mono">{pub.status}</span>
    </div>
    
    <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
      {pub.url && pub.url !== "#" ? (
        <a href={pub.url} target="_blank" rel="noreferrer" className="hover:underline">
          {pub.title}
        </a>
      ) : (
        pub.title
      )}
    </h3>

    <div className="flex items-center text-slate-600 text-sm mb-4 italic">
      <BookOpen className="w-4 h-4 mr-2" />
      {pub.conference}
    </div>
    
    <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
      {pub.description}
    </p>

    {pub.url && pub.url !== "#" && (
      <a 
        href={pub.url} 
        target="_blank" 
        rel="noreferrer" 
        className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-4 w-fit"
      >
        View Paper <ExternalLink className="w-3 h-3 ml-1" />
      </a>
    )}
    
    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50">
      {pub.tags.map((tag, i) => (
        <span key={i} className="text-xs bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100">
          #{tag}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({ exp, isLast }) => (
  <div className="relative pl-8 md:pl-0">
    <div className="md:flex items-start group">
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-slate-200"></div>
      <div className="absolute left-0 md:left-8 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm transform -translate-x-[5px] mt-1.5 z-10 group-hover:scale-110 transition-transform"></div>

      <div className="md:ml-16 w-full">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm group-hover:border-blue-200 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
              {exp.period}
            </span>
          </div>
          <div className="flex items-center text-slate-600 mb-4 font-medium">
            <Briefcase className="w-4 h-4 mr-2" />
            {exp.company}
          </div>
          <ul className="space-y-2">
            {exp.description.map((desc, i) => (
              <li key={i} className="flex items-start text-slate-600 text-sm">
                <ChevronRight className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-serif italic">K</div>
            <span className={isScrolled ? 'opacity-100' : 'opacity-80'}>Khang Phan</span>
          </div>
          
          {/* Desktop Menu - REPLACED FLEX WITH BLOCK/INLINE-BLOCK */}
          <div className="hidden lg:block text-sm font-medium">
            {['About', 'Publications', 'Experience', 'Awards', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                style={{ backgroundColor: 'transparent' }} // STRICT OVERRIDE
                className="inline-block mr-8 text-slate-600 hover:text-blue-600 !bg-transparent border-none cursor-pointer transition-colors focus:outline-none"
              >
                {item}
              </button>
            ))}
            <a 
              href="#" // Replace with actual Resume Link
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors no-underline"
            >
              <FileText className="w-4 h-4" /> CV
            </a>
          </div>

          {/* Mobile Menu Button - FIXED */}
          <button 
            className="lg:hidden text-slate-800 !bg-transparent border-none"
            style={{ backgroundColor: 'transparent' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown - FIXED */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col space-y-4 shadow-lg">
            {['About', 'Publications', 'Experience', 'Awards', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                style={{ backgroundColor: 'transparent' }}
                className="text-left py-2 px-4 hover:bg-slate-50 rounded-lg !bg-transparent border-none text-slate-700"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open to Research Collaborations
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Hello, I'm <br/>
              <span className="text-blue-600">Hoang Khang.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              {portfolioData.personalInfo.about}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 no-underline">
                <Mail className="w-4 h-4" /> Get in touch
              </a>
              <a href={`https://${portfolioData.personalInfo.github}`} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 no-underline">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={`https://${portfolioData.personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 no-underline">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About & Stats Grid */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Left: Stats & Skills */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-600" /> Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Languages</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {portfolioData.skills.languages.map(s => <SkillBadge key={s} skill={s} />)}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI / Data</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {portfolioData.skills.frameworks.map(s => <SkillBadge key={s} skill={s} />)}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tools</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {portfolioData.skills.tools.map(s => <SkillBadge key={s} skill={s} />)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-lg text-white">
                 <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-300" /> Key Achievement
                </h3>
                <div className="text-4xl font-bold mb-2">Top 4</div>
                <div className="text-blue-100 font-medium mb-4">Global Rank</div>
                <p className="text-sm text-blue-100 opacity-90">
                  Secured 4th place at the prestigious SHL Challenge (Ubicomp/ISWC) for two consecutive years (2024, 2025).
                </p>
              </div>
            </div>

            {/* Right: Education & Bio */}
            <div className="md:col-span-8">
              <SectionTitle>Education & Background</SectionTitle>
              
              <div className="prose prose-slate text-slate-600 mb-10 max-w-none">
                <p>
                  As a researcher at <strong>HCMUT - VNUHCM</strong>, I bridge the gap between complex data and actionable insights. My work focuses heavily on <strong>Human Activity Recognition (HAR)</strong> using wearable sensors, where I have developed novel pipelines for handling sensor inconsistencies and data fusion.
                </p>
                <p>
                  Beyond research, I have practical industry experience as a Software Engineer, building real-world AI applications using React Native and Computer Vision technologies.
                </p>
              </div>

              <div className="space-y-6">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="flex gap-4 p-4 hover:bg-white rounded-xl transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800">{edu.institution}</h4>
                      <p className="text-blue-600 font-medium">{edu.degree}</p>
                      <p className="text-sm text-slate-500 mt-1">{edu.period} • {edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle>Selected Publications</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.publications.map((pub, index) => (
              <PublicationCard key={index} pub={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} isLast={index === portfolioData.experience.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle>Honors & Awards</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-4">
            {portfolioData.awards.map((award, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
                <div className="text-3xl">{award.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-800">{award.title}</h4>
                  <p className="text-sm text-slate-600">{award.event}</p>
                  <p className="text-xs text-slate-400 mt-1">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Collaborate?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            I'm always open to discussing research opportunities, AI projects, or data engineering roles. Feel free to reach out.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-transform hover:-translate-y-1 no-underline text-white">
              <Mail className="w-5 h-5" />
              {portfolioData.personalInfo.email}
            </a>
            <div className="flex items-center gap-3 px-8 py-4 bg-slate-800 rounded-full font-medium text-slate-300">
              <Phone className="w-5 h-5" />
              {portfolioData.personalInfo.phone}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© 2025 Hoang Khang Phan. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Github</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">ORCID</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}