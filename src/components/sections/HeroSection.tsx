import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center animate-fade-in-up">
          <GlassCard className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold text-primary">
                    N
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                  Nithin Sai Koushik Kancharla
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                  Full Stack Developer & AI/ML Enthusiast
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Fresher • Computer Science & Business Systems
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="tel:+919701106539">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Call Me
                  </Button>
                </a>
                <a href="mailto:nithinsaikancharla@gmail.com">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </a>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => scrollToSection('about')}
                  variant="default"
                  size="lg"
                  className="gap-2"
                >
                  Explore My Work
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;