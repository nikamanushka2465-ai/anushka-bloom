import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/anushkanikam',
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/anushkanikam',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/anushkanikam',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:anushka@iiit.ac.in',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <span className="text-accent text-lg font-medium">— Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's Work <span className="text-accent">Together</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-left animate' : 'fade-in-left'}`}>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Mail className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-primary-foreground/80">anushka@iiit.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Phone className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-primary-foreground/80">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <MapPin className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-primary-foreground/80">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-foreground">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Feel free to connect with me on social media or check out my work on GitHub!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-foreground">Quick Actions</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-accent-glow transition-colors">
                  <ExternalLink size={18} />
                  Download Resume
                </button>
                <button className="border border-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'fade-in-right animate' : 'fade-in-right'}`}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-foreground/20 border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-foreground/20 border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-foreground/20 border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-primary-foreground/20 border border-primary-foreground/30 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-accent-glow transition-colors"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              I'm currently available for freelance projects and full-time opportunities
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent-glow transition-colors">
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;