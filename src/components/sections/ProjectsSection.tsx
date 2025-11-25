import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Github, ExternalLink, Award } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Full Stack Development (Java)',
      company: 'SkillDzire',
      period: '2023 - 2024',
      description: 'Developed a sales webpage during Full Stack Development internship, enhancing UI/UX and backend efficiency. Optimized database interactions and ensured responsiveness for seamless user experience.',
      technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'Database'],
      type: 'Internship',
      githubUrl: null,
      liveUrl: null,
      certificateUrl: '/certificate?cert=/certificates/fullstack-java-certificate.jpg&title=Full Stack Development (Java) Internship'
    },
    {
      title: 'AI/ML and Data Science',
      company: 'Henotic Hyd.',
      period: '2023 - 2024',
      description: 'Developed a predictive model to assess bank loan repayment probabilities, leveraging machine learning techniques. Optimized feature selection and data processing to enhance accuracy and reliability.',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'AI'],
      type: 'Internship',
      githubUrl: null,
      liveUrl: null,
      certificateUrl: '/certificate?cert=/certificates/henotic-aiml-certificate.jpg&title=AI/ML and Data Science Internship'
    },
    {
      title: 'ChatGPT Course',
      company: 'BlackBucks',
      period: '2024 - 2025',
      description: 'Explored ChatGPT applications across various software fields, leveraging AI for automation and enhanced user interactions. Integrated ChatGPT into diverse domains like customer support, coding assistance, and data analysis.',
      technologies: ['AI', 'ChatGPT', 'Automation', 'Integration'],
      type: 'Course',
      githubUrl: null,
      liveUrl: null,
      certificateUrl: '/certificates/chatgpt-certificate.pdf'
    },
    {
      title: 'Customer Segmentation for Marketing using Clustering',
      period: '2024 - 2025',
      description: 'Implemented Customer Segmentation for Marketing using clustering techniques, analyzing customer behavior to identify distinct groups. Leveraged machine learning algorithms like K-Means and DBSCAN to optimize targeted marketing strategies.',
      technologies: ['Python', 'K-Means', 'DBSCAN', 'Machine Learning', 'Data Analytics'],
      type: 'Final Semester Project',
      githubUrl: 'https://github.com/Dushugerdrittl',
      liveUrl: null,
      certificateUrl: '/certificate?cert=/certificates/final-semester-project-certificate.jpg&title=Customer Segmentation Project Certificate'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Projects & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Internships and projects that showcase my technical expertise and practical experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <GlassCard 
              key={project.title} 
              hover 
              className="animate-scale-in h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-primary">
                  {project.title}
                </h3>

                {project.company && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {project.company}
                  </div>
                )}

                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.certificateUrl && (
                      <a href={project.certificateUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="default" size="sm" className="w-full gap-2">
                          <Award className="w-4 h-4" />
                          View Certificate
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full gap-2">
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;