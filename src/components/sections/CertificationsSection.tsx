import GlassCard from '@/components/GlassCard';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Building, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'ChatGPT Course',
      organization: 'BlackBucks',
      period: '2024 - 2025',
      description: 'Comprehensive course on ChatGPT applications across various software fields, covering AI automation, integration strategies, and practical implementations in customer support, coding assistance, and data analysis.',
      skills: ['ChatGPT', 'AI Integration', 'Automation', 'Prompt Engineering'],
      status: 'Completed',
      certificateUrl: '/certificates/chatgpt-certificate.pdf'
    },
    {
      title: 'Full Stack Development (Java)',
      organization: 'SkillDzire',
      period: '2023 - 2024',
      description: 'Intensive internship program covering full stack web development with Java, including frontend technologies (HTML, CSS, JavaScript), backend development, database management, and responsive design.',
      skills: ['Java', 'HTML', 'CSS', 'JavaScript', 'Database', 'UI/UX'],
      status: 'Completed',
      certificateUrl: '/certificate?cert=/certificates/fullstack-java-certificate.jpg&title=Full Stack Development (Java) Internship'
    },
    {
      title: 'AI/ML and Data Science',
      organization: 'Henotic Hyd.',
      period: '2023 - 2024',
      description: 'Advanced training in Artificial Intelligence and Machine Learning, focusing on predictive modeling, feature engineering, and data processing techniques for real-world applications.',
      skills: ['Python', 'Machine Learning', 'Data Science', 'Predictive Modeling', 'Feature Engineering'],
      status: 'Completed',
      certificateUrl: '/certificate?cert=/certificates/henotic-aiml-certificate.jpg&title=AI/ML and Data Science Internship'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Certifications & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through professional courses and specialized training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <GlassCard 
              key={cert.title}
              hover 
              className="animate-scale-in h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.status}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Building className="w-4 h-4" />
                    {cert.organization}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {cert.period}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {cert.description}
                </p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <GlassCard className="max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Committed to Continuous Learning
              </h3>
              <p className="text-muted-foreground">
                Always exploring new technologies and enhancing skills through professional development 
                programs, online courses, and hands-on projects to stay at the forefront of technology trends.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
