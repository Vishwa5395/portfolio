import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, Award, Code, Database, Smartphone, Globe, Server, Palette, AirVent } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'React', level: 74, icon: <Code size={20} />, color: '#61DAFB' },
    { name: 'JavaScript', level: 75, icon: <Code size={20} />, color: '#F7DF1E' },
    { name: 'Python', level: 78, icon: <Code size={20} />, color: '#3776AB' },
    { name: 'JAVA', level: 88, icon: <Code size={20} />, color: '#3178C6' },
    { name: 'C/C++', level: 74, icon: <Code size={20} />, color: '#3178C6' },
    { name: 'MATLAB', level: 83, icon: <Code size={20} />, color: '#3178C6' },
    { name: 'FireBase', level: 75, icon: <Globe size={20} />, color: '#000000' },
    { name: 'RESTful APIs', level: 90, icon: <Globe size={20} />, color: '#000000' },
    { name: 'Node.js', level: 83, icon: <Server size={20} />, color: '#339933' },
    { name: 'GitHub', level: 87, icon: <Server size={20} />, color: '#61DAFB' },
    { name: 'Express.js', level: 89, icon: <Server size={20} />, color: '#000000' },
    { name: 'LangChain', level: 72, icon: <Server size={20} />, color: '#3178C6' },
    { name: 'Microsoft SQL Server', level: 83, icon: <Database size={20} />, color: '#1572B6' },
    { name: 'MongoDB', level: 84, icon: <Database size={20} />, color: '#47A248' },
    { name: 'Prisma', level: 74, icon: <Database size={20} />, color: '#47A248' },
    { name: 'SQLite', level: 74, icon: <Database size={20} />, color: '#47A248' }
  ];

  const experiences = [
    {
      title: 'NASA Space Apps Challenge',
      company: 'NASA',
      location: 'VIT-AP University, Andhra Pradesh',
      duration: '24 hours',
      type: 'Hackathon',
      description: 'Leading development of scalable web applications using HTML, CSS, Node.js, Express and MongoDB. Building a web-app to help farmers by implementing best practices.',
      achievements: [
        'Won the Local Impact Winner award with team',
        'Led a team of 4 developers to deliver a major projects on time',
        'Made a data visualization page to show rainfall data through charts and bar graphs for a specific region',
        'Used APIs to fetch data and added filters for specific regions',
      ],
      technologies: ['HTML', 'Node.js', 'MongoDB', 'CSS', 'Express']
    },
    {
      title: 'DevOps Member',
      company: 'GDG On Campus VIT-AP',
      location: 'VIT-AP University, Andhra Pradesh',
      duration: 'Nov 2024 - Present',
      type: 'Part-time',
      description: 'Developed a multilingual language detection model that accurately identifies text language from 22 supported languages using NLP techniques.',
      achievements: [
        'Achieved an accuracy of 72%',
        'Learnt about different Machine learning Algorithms',
        'Collaborated with UX/UI team to improve user engagement by 35% by making a basic web-page to run the model',
      ],
      technologies: ['Naive Bayes', 'Python', 'CSS', 'HTML', 'Scikit-learn','TF-IDF Vectorizer']
    },
    {
      title: 'Web Developer Intern',
      company: 'Bharat Intern',
      location: 'Remote',
      duration: 'Aug 2024 - Sep 2024',
      type: 'Virtual Internship',
      description: 'Gained hands-on experience in web development, working on various client projects and learning industry best practices.',
      achievements: [
        'Contributed to 3 client projects during internship period',
        'Learned and implemented 3 new technologies',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'VIT-AP University',
      location: 'Andhra Pradesh, India',
      duration: '2023 - 2027',
      grade: 'CGPA: 9.00/10',
      description: 'Specialized in software engineering and web technologies. Active member of coding club and tech societies.'
    },
    {
      degree: 'Intermediate',
      institution: 'PBRP Academy',
      location: 'Uttar Pradesh, India',
      duration: '2020 - 2021',
      grade: '74.93%',
      description: 'Completed My Schooling with CBSE Board'
    }
  ];

  const certifications = [
    {
      name: 'Stateflow & Simulink ',
      issuer: 'MATLAB',
      date: '2024',
      credentialId: null
    },
    {
      name: 'Cloud Computing',
      issuer: 'BlackBucks',
      date: '2025',
      credentialId: null
    },
    {
      name: 'NASA Space Apps Challenge',
      issuer: 'NASA',
      date: '2024',
      credentialId: null
    },
    {
      name: 'Winter Internship Training',
      issuer: 'India Space labs',
      date: '2025',
      credentialId: null
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div
      className="transform transition-all duration-1000"
      style={{ 
        transitionDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span style={{ color: skill.color }}>{skill.icon}</span>
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        {/* <span className="text-cyan-400 font-semibold">{skill.level}%</span> */}
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100 + 500}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="about-section" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="about">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-cyan-400 text-lg font-medium mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span>About Me</span>
            <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Know More <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Software developer with expertise in modern web technologies and a track record of delivering exceptional digital solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'about', label: 'About', icon: <Award size={20} /> },
            { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
            { id: 'experience', label: 'Experience', icon: <Calendar size={20} /> },
            { id: 'education', label: 'Education', icon: <Award size={20} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700'
              }`}
              aria-pressed={activeTab === tab.id}
              role="tab"
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]" role="tabpanel">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  I'm a <span className="text-cyan-400">Full Stack Developer</span> with a curiosity of creating amazing digital experiences.
                </h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I specialize in building scalable, 
                    user-friendly applications using modern technologies like React, Node.js, and MongoDB.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and following best practices to deliver 
                    high-quality solutions matching client's expectations.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or drinking coffee and binge watching a youtube video.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="space-y-2">
                    <div className="text-gray-400">Name:</div>
                    <div className="text-white font-medium">Vishwanath</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-400">Email:</div>
                    <div className="text-white font-medium">tiwarivishwanath5395@gmail.com</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-400">Location:</div>
                    <div className="text-white font-medium">Kanpur, UP, India</div>
                  </div>
                  
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                  <div className="h-full bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="font-mono text-sm space-y-2">
                        <div className="text-cyan-400">const developer = {'{'}</div>
                        <div className="text-gray-300 ml-4">name: "Vishwanath",</div>
                        <div className="text-gray-300 ml-4">role: "Full Stack Developer",</div>
                        <div className="text-gray-300 ml-4">skills: ["React", "Node.js", "MongoDB"],</div>
                        <div className="text-gray-300 ml-4">passion: "Creating amazing apps",</div>
                        <div className="text-gray-300 ml-4">coffee: "☕☕☕☕☕"</div>
                        <div className="text-cyan-400">{'}'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-cyan-400 text-lg font-medium mb-2">
                        <span>{exp.company}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{exp.type}</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-purple-400 text-lg font-medium mb-2">
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={16} />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Award size={20} className="text-cyan-400" />
                        <h4 className="font-semibold text-white">{cert.name}</h4>
                      </div>
                      <p className="text-gray-400 mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{cert.date}</span>
                        <span className="text-cyan-400">{cert.credentialId}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;