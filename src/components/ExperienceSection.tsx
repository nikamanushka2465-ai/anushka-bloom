import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Technology - Computer Science',
      organization: 'Indian Institute of Information Technology',
      location: 'India',
      period: '2022 - Present',
      description: 'Currently pursuing B.Tech in Computer Science with focus on software development, data structures, algorithms, and modern web technologies.',
      highlights: ['CGPA: 8.5/10', 'Dean\'s List', 'Programming Club Member'],
      icon: '🎓',
      current: true
    },
    {
      id: 2,
      type: 'project',
      title: 'Full Stack Development Intern',
      organization: 'Tech Startup (Remote)',
      location: 'Remote',
      period: 'Summer 2023',
      description: 'Developed responsive web applications using React.js and Node.js. Collaborated with cross-functional teams to deliver high-quality solutions.',
      highlights: ['Built 3 major features', 'Improved performance by 40%', 'Mentored junior developers'],
      icon: '💼',
      current: false
    },
    {
      id: 3,
      type: 'certification',
      title: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services',
      location: 'Online',
      period: '2023',
      description: 'Achieved AWS Cloud Practitioner certification demonstrating foundational knowledge of AWS cloud services and architecture.',
      highlights: ['Cloud Computing', 'AWS Services', 'Architecture Best Practices'],
      icon: '☁️',
      current: false
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Hackathon Winner',
      organization: 'IIIT Tech Fest',
      location: 'Campus',
      period: '2023',
      description: 'Won first place in 48-hour hackathon for developing an innovative solution for sustainable agriculture using IoT and machine learning.',
      highlights: ['Team Leader', '1st Place', '50+ participants'],
      icon: '🏆',
      current: false
    }
  ];

  const skills = [
    { name: 'Data Structures & Algorithms', level: 'Advanced' },
    { name: 'Full Stack Development', level: 'Intermediate' },
    { name: 'Machine Learning', level: 'Beginner' },
    { name: 'Cloud Computing', level: 'Intermediate' },
    { name: 'Mobile Development', level: 'Intermediate' },
    { name: 'UI/UX Design', level: 'Beginner' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-500';
      case 'project': return 'bg-green-500';
      case 'certification': return 'bg-purple-500';
      case 'achievement': return 'bg-yellow-500';
      default: return 'bg-accent';
    }
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <span className="text-accent text-lg font-medium">— My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional milestones that shaped my career in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Timeline Section */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <div 
                    key={item.id}
                    className={`relative ${isVisible ? 'fade-in-left animate' : 'fade-in-left'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full ${getTypeColor(item.type)} border-4 border-background`}></div>
                    
                    {/* Content Card */}
                    <div className="ml-20 card-elegant">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                            <p className="text-accent font-semibold">{item.organization}</p>
                          </div>
                        </div>
                        {item.current && (
                          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                            CURRENT
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {item.location}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <span 
                            key={i}
                            className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Competencies */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-right animate' : 'fade-in-right'}`}>
            
            {/* Current Focus */}
            <div className="card-elegant">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-foreground">Current Focus</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                As a 3rd-year Computer Science student, I'm currently focusing on:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Advanced Algorithms & Data Structures
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Full Stack Web Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Machine Learning & AI
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  System Design Principles
                </li>
              </ul>
            </div>

            {/* Skills Competency */}
            <div className="card-elegant">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-foreground">Skills Competency</h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground text-sm">{skill.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        skill.level === 'Advanced' ? 'bg-green-100 text-green-800' :
                        skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Stats */}
            <div className="card-elegant">
              <h3 className="text-xl font-bold text-foreground mb-6">Academic Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">8.5</div>
                  <div className="text-xs text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">3rd</div>
                  <div className="text-xs text-muted-foreground">Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;