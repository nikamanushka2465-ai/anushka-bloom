import { useEffect, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import profileImage from '@/assets/anushka-profile.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-left animate' : 'fade-in-left'}`}>
            
            {/* Greeting */}
            <div className="inline-block">
              <div className="border-2 border-accent border-dashed p-4 rounded-lg bg-accent/10">
                <span className="text-lg font-medium text-foreground">Hello There!</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span className="text-gradient">Anushka Nikam</span>,
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Computer Science Student
              </h2>
              <h3 className="text-2xl md:text-3xl text-primary font-semibold">
                Based in India.
              </h3>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              I'm a passionate 3rd-year student at Indian Institute of Information Technology, 
              collaborating with technologies and building innovative solutions for the future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToProjects}
                className="btn-hero-primary flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View My Portfolio
              </button>
              <button className="btn-hero-secondary flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Content - Image & Floating Elements */}
          <div className={`relative ${isVisible ? 'fade-in-right animate' : 'fade-in-right'}`}>
            
            {/* Main Profile Image */}
            <div className="relative">
              {/* Soft Beige Background Circle */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-beige mx-auto relative overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Anushka Nikam - Computer Science Student" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 float-animation">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                  💻 Full Stack Developer
                </div>
              </div>

              {/* Floating Badge - Left */}
              <div className="absolute top-1/2 -left-8 float-animation-delayed">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                  🚀 Problem Solver
                </div>
              </div>

              {/* Floating Badge - Bottom */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 float-animation">
                <div className="bg-card text-card-foreground px-4 py-2 rounded-full font-semibold shadow-lg border border-border">
                  🎓 IIIT Student
                </div>
              </div>

              {/* Hire Me Circle Badge */}
              <div className="absolute top-8 right-8">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-pulse-accent">
                  <div className="text-center">
                    <div className="text-xs text-accent-foreground font-bold">HIRE</div>
                    <div className="text-xs text-accent-foreground font-bold">ME</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;