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
      certificateUrl: '/certificate?cert=/certificates/chatgpt-certificate.pdf&title=ChatGPT Course'
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
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col gap-12">
          
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-black text-[#D4AF37] mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] uppercase">
              Certifications
            </h2>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6 opacity-50"></div>
            <p className="text-xl text-[#F9F6EE]/80 max-w-2xl mx-auto font-light italic">
              Verified expertise and continuous professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <GlassCard 
                key={cert.title}
                className="flex flex-col h-full animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Award className="text-[#D4AF37] w-8 h-8" />
                    </div>
                    <Badge className="bg-[#D4AF37] text-black font-bold text-[10px] px-2 py-0.5">
                      {cert.status}
                    </Badge>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#F9F6EE] leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {cert.title}
                      </h3>
                      <div className="mt-2 space-y-1">
                        <p className="text-[#D4AF37] font-medium text-sm flex items-center gap-2">
                          <Building className="w-4 h-4 opacity-50" />
                          {cert.organization}
                        </p>
                        <div className="flex items-center gap-2 text-[#F9F6EE]/60 text-xs font-mono">
                          <Calendar className="w-3 h-3 text-[#D4AF37]" />
                          {cert.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-[#F9F6EE]/70 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-[#F9F6EE]/20 text-[#F9F6EE]/80 bg-[#F9F6EE]/5 text-[10px]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-[#D4AF37]/10 mt-auto">
                    <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full group/btn">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Credential
                      </Button>
                    </a>
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

export default CertificationsSection;
