
import { useEffect, useRef } from 'react';
import BackgroundGrid from '@/components/BackgroundGrid';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Socials from '@/components/Socials';
import About from '@/components/About';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const projects = [
  {
    title: "Project Alpha",
    description: "A responsive web application with real-time data visualization",
    tags: ["React", "TypeScript", "D3.js"],
    link: "#",
    image: ""
  },
  {
    title: "Project Beta",
    description: "Mobile-first e-commerce platform with integrated payment system",
    tags: ["React Native", "Node.js", "Stripe"],
    link: "#",
    image: ""
  },
  {
    title: "Project Gamma",
    description: "AI-powered content management system for digital agencies",
    tags: ["Next.js", "Python", "TensorFlow"],
    link: "#",
    image: ""
  },
  {
    title: "Project Delta",
    description: "Cloud-based collaboration tool for remote teams",
    tags: ["Vue.js", "Firebase", "WebRTC"],
    link: "#",
    image: ""
  },
];

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
          }
        });
      },
      { threshold: 0.1 }
    );

    const contentElement = contentRef.current;
    if (contentElement) {
      const children = contentElement.querySelectorAll('.animate-fade-in');
      children.forEach(child => {
        observer.observe(child);
      });
    }

    return () => {
      if (contentElement) {
        const children = contentElement.querySelectorAll('.animate-fade-in');
        children.forEach(child => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <>
      <BackgroundGrid />
      
      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-8">
        {/* Main Layout Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-4">
            {/* Hero */}
            <Hero name="Indraneel" title="Software Engineer & Design Enthusiast" />
            
            {/* Socials and About */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Socials />
              <About />
            </div>
          </div>
          
          {/* Right Column - Skills (taller) */}
          <div className="md:row-span-2">
            <Skills />
          </div>
        </div>
        
        {/* Mid Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Leadership />
          <Contact />
        </div>
        
        {/* Projects Section */}
        <div className="animate-fade-in animate-delay-400 opacity-0 translate-y-5 transition-all duration-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-900">Projects</h2>
            <a 
              href="#all-projects" 
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors flex items-center gap-1"
            >
              View all
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                link={project.link}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

import { ArrowUpRight } from 'lucide-react';

export default Index;
