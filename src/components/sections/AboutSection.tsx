import GlassCard from '@/components/GlassCard';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Brain, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const techStack = [
    { name: 'Flutter', icon: Smartphone },
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'AI/ML', icon: Brain },
    { name: 'Data Analytics', icon: Database },
  ];

  const softSkills = [
    'Effective Communication',
    'Team Collaboration', 
    'Problem-Solving',
    'Project Management'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detail-oriented and innovative Full Stack Developer with a passion for creating efficient solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <GlassCard hover className="animate-scale-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Users className="w-6 h-6" />
                Professional Background
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Detail-oriented and innovative Full Stack Developer and Android Developer (mid-level) with a 
                strong educational foundation in computer science and business systems. Skilled in Python, 
                Java, HTML, CSS, and Flutter, with a passion for harnessing technology to drive business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in optimizing algorithms and developing AI-driven models through academic projects. 
                Eager to contribute technical expertise and creativity to enhance software development initiatives 
                in a collaborative environment.
              </p>
            </div>
          </GlassCard>

          <GlassCard hover className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Target className="w-6 h-6" />
                Location & Contact
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>📍 521135, Movva, Krishna District</p>
                <p>📍 Andhra Pradesh, India</p>
                <p>📞 +91 97011 06539</p>
                <p>✉️ nithinsaikancharla@gmail.com</p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="mt-12 space-y-8">
          <GlassCard hover className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div key={tech.name} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                  <tech.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard hover className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;