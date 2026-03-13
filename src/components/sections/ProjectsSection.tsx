import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Github, ExternalLink, Award, Sparkles, Code, FileJson, Hash, Calculator } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Customer Segmentation for Marketing',
      period: '2024 - 2025',
      description: 'Implemented advanced clustering techniques (K-Means & DBSCAN) to analyze customer behavior and identify distinct market segments, optimizing targeted marketing strategies.',
      technologies: ['Python', 'Scikit-Learn', 'K-Means', 'DBSCAN', 'Data Analytics'],
      type: 'Final Year Project',
      githubUrl: 'https://github.com/Dushugerdrittl',
      certificateUrl: '/certificate?cert=/certificates/final-semester-project-certificate.jpg&title=Customer Segmentation Project Certificate',
      icon: Sparkles
    },
    {
      title: 'Cinematic 3D Portfolio Engine',
      period: '2025',
      description: 'A high-performance WebGL portfolio featuring a massive rigged 3D dragon (Kangjinlong), procedural animations, and luxury glassmorphism UI.',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS'],
      type: 'Personal Project',
      githubUrl: 'https://github.com/Dushugerdrittl/blossom-bloom-portfolio',
      icon: Code
    },
    {
      title: 'Json Formatter Pro',
      period: '2024',
      description: 'A professional-grade JSON formatting and validation tool designed for developers, featuring real-time syntax highlighting and error detection.',
      technologies: ['React', 'TypeScript', 'Monaco Editor', 'Vite'],
      type: 'Utility Tool',
      githubUrl: 'https://github.com/Dushugerdrittl/Json-formatter-pro',
      icon: FileJson
    },
    {
      title: 'Flutter Hash Generator',
      period: '2024',
      description: 'A mobile utility application built with Flutter for generating various cryptographic hashes (SHA-256, MD5, etc.) with a clean, responsive UI.',
      technologies: ['Flutter', 'Dart', 'Crypto API', 'Material 3'],
      type: 'Mobile App',
      githubUrl: 'https://github.com/Dushugerdrittl/Flutter-Hash-Generator',
      icon: Hash
    },
    {
      title: 'Budget Calculator',
      period: '2023',
      description: 'A smart financial management tool for personal budget planning, expense tracking, and savings goal visualization.',
      technologies: ['Java', 'Android SDK', 'SQLite', 'Material Design'],
      type: 'FinTech App',
      githubUrl: 'https://github.com/Dushugerdrittl/Budget_calculator',
      icon: Calculator
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col gap-12">
          
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-black text-[#D4AF37] mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] uppercase">
              Featured Works
            </h2>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6 opacity-50"></div>
            <p className="text-xl text-[#F9F6EE]/80 max-w-2xl mx-auto font-light italic">
              Architecting value through code and data science
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <GlassCard 
                key={project.title}
                className="group animate-scale-in border-l-4 border-l-transparent hover:border-l-[#D4AF37] transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <project.icon className="text-[#D4AF37] w-10 h-10" />
                  </div>
                  
                  <div className="flex-grow space-y-4 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">{project.type}</span>
                          <span className="text-[#F9F6EE]/30">•</span>
                          <div className="flex items-center gap-1 text-[#F9F6EE]/50 text-xs font-mono">
                            <Calendar className="w-3 h-3" />
                            {project.period}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-[#F9F6EE] group-hover:text-[#D4AF37] transition-colors">{project.title}</h3>
                      </div>
                      
                      <div className="flex gap-3 justify-center">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="rounded-full border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                              <Github className="w-5 h-5" />
                            </Button>
                          </a>
                        )}
                        {project.certificateUrl && (
                          <a href={project.certificateUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="rounded-full border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                              <Award className="w-5 h-5" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-[#F9F6EE]/70 text-lg leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {project.technologies.map(tech => (
                        <Badge key={tech} className="bg-transparent border-[#D4AF37]/30 text-[#D4AF37] text-xs px-3 py-1 font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
