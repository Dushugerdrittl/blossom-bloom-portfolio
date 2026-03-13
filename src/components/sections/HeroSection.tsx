import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="container mx-auto z-10">
        <div className="text-center animate-fade-in-up">
          <GlassCard className="max-w-4xl mx-auto border-[#D4AF37]/30">
            <div className="space-y-8">
              <div className="relative inline-block">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#F9F6EE] to-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center overflow-hidden">
                    <img 
                      src={profilePhoto} 
                      alt="Nithin Sai Koushik Kancharla"
                      className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="text-6xl font-bold text-[#D4AF37] hidden">
                      N
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  NITHIN SAI KOUSHIK
                </h1>
                <p className="text-2xl md:text-3xl text-[#F9F6EE] font-light tracking-wide italic">
                  Full Stack Developer & AI/ML Enthusiast
                </p>
                <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto opacity-50"></div>
                <p className="text-lg text-[#F9F6EE]/80 max-w-2xl mx-auto font-medium">
                  Computer Science & Business Systems Graduate
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a href="/resume.pdf" download="Nithin_Sai_Koushik_Resume.pdf">
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#F9F6EE] text-black font-bold px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <Download className="w-4 h-4 mr-2" />
                    RESUME
                  </Button>
                </a>
                
                <div className="flex gap-4">
                  {[
                    { icon: Phone, href: "tel:+916303506539" },
                    { icon: Mail, href: "mailto:fxastolf@gmail.com" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/kancharla-nithin-sai-koushik-786124286" },
                    { icon: Github, href: "https://github.com/Dushugerdrittl" }
                  ].map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
                        <item.icon className="w-5 h-5" />
                      </Button>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Button
                  onClick={() => scrollToSection('about')}
                  variant="ghost"
                  className="text-[#D4AF37] hover:bg-transparent hover:text-[#F9F6EE] group"
                >
                  <span className="tracking-widest mr-2 uppercase text-xs font-bold">Discover More</span>
                  <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
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
