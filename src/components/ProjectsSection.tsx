import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Data Science', 'UI/UX Design'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      image: '🛒',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Mobile-first task management application built with React Native. Includes real-time collaboration and push notifications.',
      category: 'Mobile Apps',
      technologies: ['React Native', 'Firebase', 'Redux', 'Push Notifications'],
      image: '📱',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: true
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets using D3.js and Python. Features real-time data processing and custom chart components.',
      category: 'Data Science',
      technologies: ['Python', 'D3.js', 'Flask', 'Pandas', 'PostgreSQL'],
      image: '📊',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website Design',
      description: 'Modern portfolio website design with smooth animations and responsive layout. Created in Figma with complete design system.',
      category: 'UI/UX Design',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
      image: '🎨',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'Full-featured social media platform with real-time messaging, file sharing, and social features. Built with modern tech stack.',
      category: 'Web Development',
      technologies: ['Next.js', 'Prisma', 'Socket.io', 'Cloudinary', 'PostgreSQL'],
      image: '💬',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      featured: true
    },
    {
      id: 6,
      title: 'Weather Prediction ML Model',
      description: 'Machine learning model for weather prediction using historical data. Includes web interface for real-time predictions.',
      category: 'Data Science',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Flask', 'API Integration'],
      image: '🌤️',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-card"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <span className="text-accent text-lg font-medium">— My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work spanning web development, mobile apps, data science, and design
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-card text-card-foreground hover:bg-accent/10 border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card-elegant group ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-beige/30 to-accent/20 rounded-xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform">
                  {project.image}
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium"
                    >
                      <Tag size={10} />
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent-glow transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={`text-center mt-12 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <button className="btn-hero-primary">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;