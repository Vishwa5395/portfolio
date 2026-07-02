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
      title: 'Full Stack Summer Intern',
      company: 'NETEFIE',
      location: 'Remote',
      duration: 'Jun 2025 - Present',
      type: 'Part-time',
      description: 'Developing a Hospital Management System for big giant hospitals like apollo, apex and other clients.',
      achievements: [
        'Learnt working with NextJS',
        'Learnt about company level architecture and culture',
        'Introduced with new technologies in backend like NestJS, Prisma',
      ],
      technologies: ['NextJS', 'NestJS', 'Prisma', 'Docker', 'TypeScript','Tailwind CSS']
    },
    {
      title: 'India Space Labs Winter Internship',
      company: 'ISRO',
      location: 'VIT-AP University, Andhra Pradesh',
      duration: 'Dec 2024- Jan 2025',
      type: 'Winter Internship Training',
      description: 'Participants works closely with various verticals, divisions, and cells of Space and receive training in Drone Technology (Air Taxi), CanSat and CubeSat (Student Satellite), Space Entrepreneurship, and Astronomy.',
      achievements: [
        'Completed a month-long internship with hands-on experience in drone technology and satellite systems',
        'Learned about the latest advancements in space technology and its applications',
        'Made significant contributions to team projects, enhancing my understanding of space systems',
        'Understood the practical applications of space technology in real-world scenarios',
      ],
      technologies: ['Drone technology', 'Satellitle technology', 'Drone maneuverability', 'Physics of Air Taxi']
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

  // Helper to get skill category emoji
  const getSkillEmoji = (icon) => {
    if (icon.type === Code) return '💻';
    if (icon.type === Globe) return '🌐';
    if (icon.type === Server) return '⚙️';
    if (icon.type === Database) return '🗄️';
    return '💻';
  };

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
          <span className="text-lg">{getSkillEmoji(skill.icon)}</span>
          <span className="text-brutal-black dark:text-dark-text font-mono font-bold text-sm">{skill.name}</span>
        </div>
        <span className="text-brutal-black dark:text-dark-text font-mono font-bold text-sm">{skill.level}%</span>
      </div>
      <div className="h-4 bg-white dark:bg-dark-surface border-3 border-brutal-black dark:border-dark-border rounded-md overflow-hidden">
        <div
          className="h-full bg-brutal-lime transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100 + 500}ms`
          }}
        />
      </div>
    </div>
  );

  // Accent colors cycling for experience cards
  const accentColors = ['border-l-brutal-lime', 'border-l-brutal-pink', 'border-l-brutal-blue'];
  const accentBgs = ['bg-brutal-lime', 'bg-brutal-pink', 'bg-brutal-blue'];

  return (
    <section id="about-section" className="py-20 bg-cream dark:bg-dark-bg relative overflow-hidden">
      {/* Dot Grid Background */}
      <div className="dot-grid absolute inset-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="about">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-brutal-black dark:text-dark-text text-lg font-mono font-bold mb-4 uppercase tracking-widest">
            <div className="w-8 h-1 bg-brutal-black dark:bg-dark-text"></div>
            <span>About Me</span>
            <div className="w-8 h-1 bg-brutal-black dark:bg-dark-text"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-grotesk font-black text-brutal-black dark:text-dark-text mb-4">
            Know More{' '}
            <span className="relative inline-block">
              <span className="relative z-10">About Me</span>
              <span className="absolute bottom-1 left-0 w-full h-4 bg-brutal-lime -z-0"></span>
            </span>
          </h2>
          <p className="text-xl text-brutal-black/70 dark:text-dark-text/70 max-w-3xl mx-auto font-grotesk">
            Software developer with expertise in modern web technologies and a track record of delivering exceptional digital solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {[
            { id: 'about', label: 'About', icon: <Award size={20} /> },
            { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
            { id: 'experience', label: 'Experience', icon: <Calendar size={20} /> },
            { id: 'education', label: 'Education', icon: <Award size={20} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-grotesk font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200 border-3 border-brutal-black dark:border-dark-border ${
                activeTab === tab.id
                  ? 'bg-brutal-lime text-brutal-black shadow-brutal dark:shadow-brutal-dark translate-x-0 translate-y-0'
                  : 'bg-white dark:bg-dark-card text-brutal-black dark:text-dark-text hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal dark:hover:shadow-brutal-dark'
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
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column — About Text Cards */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md p-6 shadow-brutal dark:shadow-brutal-dark">
                  <h3 className="text-2xl md:text-3xl font-grotesk font-black text-brutal-black dark:text-dark-text mb-4">
                    I'm a{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10">Full Stack Developer</span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-brutal-lime -z-0"></span>
                    </span>{' '}
                    with a curiosity of creating amazing digital experiences.
                  </h3>
                </div>

                <div className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md p-6 shadow-brutal-sm dark:shadow-brutal-dark-sm">
                  <div className="space-y-4 text-brutal-black dark:text-dark-text text-lg leading-relaxed font-grotesk">
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
                </div>
                
                {/* Personal Info Bento Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-brutal-lime border-3 border-brutal-black rounded-md p-4 shadow-brutal-sm">
                    <div className="text-brutal-black/60 font-mono text-xs uppercase tracking-wide mb-1">Name</div>
                    <div className="text-brutal-black font-grotesk font-bold">Vishwanath</div>
                  </div>
                  <div className="bg-brutal-pink border-3 border-brutal-black rounded-md p-4 shadow-brutal-sm">
                    <div className="text-brutal-black/60 font-mono text-xs uppercase tracking-wide mb-1">Email</div>
                    <div className="text-brutal-black font-grotesk font-bold text-xs sm:text-sm break-all">tiwarivishwanath5395@gmail.com</div>
                  </div>
                  <div className="bg-brutal-blue border-3 border-brutal-black rounded-md p-4 shadow-brutal-sm">
                    <div className="text-white/70 font-mono text-xs uppercase tracking-wide mb-1">Location</div>
                    <div className="text-white font-grotesk font-bold">Kanpur, UP, India</div>
                  </div>
                </div>
              </div>
              
              {/* Right Column — Code Editor Card */}
              <div className="relative">
                <div className="w-full bg-white border-3 border-brutal-black rounded-md shadow-brutal-lg overflow-hidden">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-brutal-black">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-3 text-white/50 font-mono text-xs">developer.js</span>
                  </div>
                  {/* Code content */}
                  <div className="p-6 bg-brutal-black">
                    <div className="font-mono text-sm space-y-2">
                      <div className="text-brutal-lime">const developer = {'{'}</div>
                      <div className="text-white ml-4">name: <span className="text-brutal-yellow">"Vishwanath"</span>,</div>
                      <div className="text-white ml-4">role: <span className="text-brutal-yellow">"Full Stack Developer"</span>,</div>
                      <div className="text-white ml-4">skills: [<span className="text-brutal-yellow">"React"</span>, <span className="text-brutal-yellow">"Node.js"</span>, <span className="text-brutal-yellow">"MongoDB"</span>],</div>
                      <div className="text-white ml-4">passion: <span className="text-brutal-yellow">"Creating amazing apps"</span>,</div>
                      <div className="text-white ml-4">coffee: <span className="text-brutal-yellow">"☕☕☕☕☕"</span></div>
                      <div className="text-brutal-lime">{'}'}</div>
                    </div>
                  </div>
                </div>
                {/* Decorative sticker */}
                <div className="absolute -top-3 -right-3 bg-brutal-yellow border-3 border-brutal-black rounded-md px-3 py-1 font-mono text-xs font-bold rotate-6 shadow-brutal-sm">
                  {'</>'}  dev.js
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-8">
              {/* Code Languages */}
              <div className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md p-6 shadow-brutal dark:shadow-brutal-dark">
                <h3 className="font-grotesk font-black text-xl text-brutal-black dark:text-dark-text mb-6 flex items-center gap-2">
                  <span className="text-2xl">💻</span> Programming Languages
                </h3>
                <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4">
                  {skills.filter((_, i) => i < 6).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              {/* Web / Frameworks */}
              <div className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md p-6 shadow-brutal dark:shadow-brutal-dark">
                <h3 className="font-grotesk font-black text-xl text-brutal-black dark:text-dark-text mb-6 flex items-center gap-2">
                  <span className="text-2xl">🌐</span> Web & Frameworks
                </h3>
                <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4">
                  {skills.filter((_, i) => i >= 6 && i < 12).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md p-6 shadow-brutal dark:shadow-brutal-dark">
                <h3 className="font-grotesk font-black text-xl text-brutal-black dark:text-dark-text mb-6 flex items-center gap-2">
                  <span className="text-2xl">🗄️</span> Databases
                </h3>
                <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4">
                  {skills.filter((_, i) => i >= 12).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md p-4 sm:p-8 shadow-brutal dark:shadow-brutal-dark border-l-[8px] ${accentColors[index % accentColors.length]} hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-grotesk font-black text-brutal-black dark:text-dark-text mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-grotesk font-bold text-lg text-brutal-black dark:text-dark-text">{exp.company}</span>
                        <span className={`${accentBgs[index % accentBgs.length]} border-3 border-brutal-black rounded-md px-3 py-0.5 font-mono text-xs font-bold rotate-[-2deg] inline-block shadow-brutal-sm`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-brutal-black/60 dark:text-dark-text/60 font-mono text-sm">
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
                  
                  <p className="text-brutal-black/80 dark:text-dark-text/80 mb-6 font-grotesk text-lg">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-grotesk font-bold text-brutal-black dark:text-dark-text mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-brutal-black/80 dark:text-dark-text/80 font-grotesk">
                          <div className="w-2 h-2 bg-brutal-lime border border-brutal-black rounded-sm mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="chip-brutal"
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
                  className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md p-8 shadow-brutal dark:shadow-brutal-dark hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-grotesk font-black text-brutal-black dark:text-dark-text mb-2">{edu.degree}</h3>
                      <div className="flex items-center gap-2 font-grotesk font-bold text-lg text-brutal-black dark:text-dark-text mb-2">
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-brutal-black/60 dark:text-dark-text/60 font-mono text-sm mb-4">
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
                          <span className="font-bold text-brutal-black dark:text-dark-text">{edu.grade}</span>
                        </div>
                      </div>
                      <p className="text-brutal-black/80 dark:text-dark-text/80 font-grotesk">{edu.description}</p>
                    </div>
                    {/* Decorative sticker for grade */}
                    <div className="bg-brutal-lime border-3 border-brutal-black rounded-md px-4 py-2 font-mono text-sm font-bold rotate-3 shadow-brutal-sm hidden sm:block">
                      🎓 {edu.grade}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Certifications Section */}
              <div className="bg-white dark:bg-dark-card border-3 border-brutal-black dark:border-dark-border rounded-md p-8 shadow-brutal dark:shadow-brutal-dark">
                <h3 className="text-2xl font-grotesk font-black text-brutal-black dark:text-dark-text mb-6 flex items-center gap-2">
                  <span className="text-2xl">🏆</span> Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {certifications.map((cert, index) => {
                    const certColors = ['bg-brutal-lime', 'bg-brutal-pink', 'bg-brutal-blue', 'bg-brutal-yellow'];
                    return (
                      <div
                        key={index}
                        className={`${certColors[index % certColors.length]} border-3 border-brutal-black rounded-md p-5 shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all duration-200`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Award size={20} className="text-brutal-black" />
                          <h4 className="font-grotesk font-bold text-brutal-black text-sm">{cert.name}</h4>
                        </div>
                        <p className="text-brutal-black/70 font-mono text-xs mb-2">{cert.issuer}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-brutal-black/60 font-mono text-xs">{cert.date}</span>
                          {cert.credentialId && (
                            <span className="text-brutal-black font-mono text-xs font-bold">{cert.credentialId}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
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