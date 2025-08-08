import { useEffect, useRef, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import profileImage from '@/assets/anushka-profile.jpg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className={`relative ${isVisible ? 'fade-in-left animate' : 'fade-in-left'}`}>
            <div className="relative">
              {/* Image Container */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-accent mx-auto relative overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Anushka Nikam About" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Skill Tags */}
              <div className="absolute top-4 left-4 float-animation">
                <div className="bg-yellow text-yellow-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  UX/UI Design
                </div>
              </div>
              
              <div className="absolute top-1/3 -right-4 float-animation-delayed">
                <div className="bg-yellow text-yellow-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Mobile App Design
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 float-animation">
                <div className="bg-yellow text-yellow-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Website Design
                </div>
              </div>
              
              <div className="absolute bottom-1/3 -left-6 float-animation-delayed">
                <div className="bg-yellow text-yellow-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Prototype
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 float-animation">
                <div className="bg-yellow text-yellow-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Dashboard
                </div>
              </div>

              <div className="absolute bottom-4 right-4 float-animation-delayed">
                <div className="bg-yellow text-yellow-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Design System
                </div>
              </div>

              <div className="absolute top-8 right-1/3 float-animation">
                <div className="bg-yellow text-yellow-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Wireframe Design
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-right animate' : 'fade-in-right'}`}>
            
            {/* Section Header */}
            <div className="space-y-2">
              <span className="text-yellow text-lg font-medium">— About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Who is <span className="text-yellow">Anushka Nikam</span>?
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-primary-foreground/90">
                I'm a passionate computer science student currently in my 3rd year at the prestigious 
                Indian Institute of Information Technology. My journey in technology began with curiosity 
                and has evolved into a deep commitment to creating innovative solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-primary-foreground/90">
                I specialize in full-stack development, with a keen eye for user experience and 
                modern design principles. My goal is to bridge the gap between functionality and 
                aesthetics in every project I undertake.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow mb-2">15+</div>
                <div className="text-sm text-primary-foreground/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow mb-2">8+</div>
                <div className="text-sm text-primary-foreground/80">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow mb-2">3rd</div>
                <div className="text-sm text-primary-foreground/80">Year at IIIT</div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="flex items-center gap-4">
              <button className="bg-yellow text-yellow-foreground px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Download size={20} />
                Download CV
                <ExternalLink size={16} />
              </button>
              
              {/* Signature */}
              <div className="font-script text-3xl text-yellow">
                Anushka Nikam
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;