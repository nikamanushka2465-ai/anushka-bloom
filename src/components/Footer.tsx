import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">AN</span>
              </div>
              <span className="font-bold text-xl">Anushka Nikam</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Computer Science Student passionate about creating innovative solutions and building the future through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-secondary-foreground/80 hover:text-accent transition-colors">Home</a>
              <a href="#about" className="text-secondary-foreground/80 hover:text-accent transition-colors">About</a>
              <a href="#skills" className="text-secondary-foreground/80 hover:text-accent transition-colors">Skills</a>
              <a href="#projects" className="text-secondary-foreground/80 hover:text-accent transition-colors">Projects</a>
              <a href="#experience" className="text-secondary-foreground/80 hover:text-accent transition-colors">Experience</a>
              <a href="#contact" className="text-secondary-foreground/80 hover:text-accent transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-secondary-foreground/80">anushka@iiit.ac.in</p>
              <p className="text-secondary-foreground/80">Indian Institute of Information Technology</p>
              <p className="text-secondary-foreground/80">India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-secondary-foreground/80 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Anushka Nikam © {currentYear}</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent-glow transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;