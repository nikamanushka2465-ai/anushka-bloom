import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Python', percentage: 90, icon: '🐍' },
    { name: 'JavaScript', percentage: 88, icon: '⚡' },
    { name: 'React', percentage: 85, icon: '⚛️' },
    { name: 'Node.js', percentage: 80, icon: '🟢' },
    { name: 'Java', percentage: 85, icon: '☕' },
    { name: 'MongoDB', percentage: 75, icon: '🍃' },
    { name: 'MySQL', percentage: 80, icon: '🗄️' },
    { name: 'Git', percentage: 90, icon: '🔀' },
    { name: 'Docker', percentage: 70, icon: '🐳' },
    { name: 'HTML/CSS', percentage: 95, icon: '🎨' },
    { name: 'UI/UX Design', percentage: 75, icon: '✨' },
    { name: 'Problem Solving', percentage: 92, icon: '🧩' },
  ];

  const tools = [
    { name: 'VS Code', percentage: 95, icon: '💻' },
    { name: 'Figma', percentage: 78, icon: '🎨' },
    { name: 'Photoshop', percentage: 70, icon: '🖼️' },
    { name: 'After Effects', percentage: 65, icon: '🎬' },
    { name: 'Sketch', percentage: 72, icon: '✏️' },
    { name: 'InVision', percentage: 80, icon: '👁️' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setAnimateProgress(true), 500);
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

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <span className="text-accent text-lg font-medium">— My Favorite Tools</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Exploring the <span className="text-gradient">Technologies</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Behind My Projects
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          
          {/* Programming & Development Skills */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-left animate' : 'fade-in-left'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Development Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-accent font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{
                        width: animateProgress ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Design Skills */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-right animate' : 'fade-in-right'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Design Tools</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div key={tool.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="font-semibold text-foreground">{tool.name}</span>
                    </div>
                    <span className="text-accent font-bold">{tool.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{
                        width: animateProgress ? `${tool.percentage}%` : '0%',
                        transitionDelay: `${(index + skills.length) * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Showcase inspired by reference */}
        <div className={`mt-20 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Professional Tools Mastery
            </h3>
            <p className="text-muted-foreground">My proficiency with industry-standard tools</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className={`card-elegant text-center group ${animateProgress ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <div className="text-4xl font-bold text-accent mb-2">
                  {tool.percentage}%
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;