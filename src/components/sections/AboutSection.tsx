import GlassCard from '@/components/GlassCard';
import { User, Code2, Rocket, Heart, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Universal Container Width for Symmetry */}
        <div className="w-full max-w-5xl flex flex-col gap-12">
          
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-black text-[#D4AF37] mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] uppercase">
              About Me
            </h2>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-8 animate-fade-in-up">
              <GlassCard className="border-l-4 border-l-[#D4AF37]">
                <div className="flex items-center gap-3 mb-4">
                  <User className="text-[#D4AF37] w-6 h-6" />
                  <h3 className="text-2xl font-bold text-[#D4AF37]">My Story</h3>
                </div>
                <p className="text-lg text-[#F9F6EE]/90 leading-relaxed font-light">
                  I am a passionate <span className="text-[#D4AF37] font-semibold">Computer Science & Business Systems</span> graduate 
                  with a mission to build high-performance software that solves real-world problems. 
                  My journey is driven by a deep fascination with how technology intersects with 
                  business logic to create meaningful value.
                </p>
                <p className="text-lg text-[#F9F6EE]/90 leading-relaxed mt-4 font-light">
                  From architecting complex <span className="text-[#D4AF37] font-semibold">Full Stack</span> applications 
                  to exploring the frontiers of <span className="text-[#D4AF37] font-semibold">AI/ML</span>, I am always 
                  pushing the boundaries of what's possible with code.
                </p>
              </GlassCard>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <GlassCard className="flex flex-col items-center text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                    <Code2 className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <h4 className="text-[#D4AF37] font-bold mb-2">Modern Stack</h4>
                  <p className="text-[#F9F6EE]/70 text-sm italic">React, Node.js, TypeScript</p>
                </GlassCard>

                <GlassCard className="flex flex-col items-center text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                    <Rocket className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <h4 className="text-[#D4AF37] font-bold mb-2">Fast Learner</h4>
                  <p className="text-[#F9F6EE]/70 text-sm italic">Always adapting to new tech</p>
                </GlassCard>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <GlassCard className="h-full border-r-4 border-r-[#D4AF37]">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="text-[#D4AF37] w-6 h-6" />
                  <h3 className="text-2xl font-bold text-[#D4AF37]">My Values</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    { title: "Quality First", desc: "Writing clean, maintainable, and scalable code." },
                    { title: "Continuous Growth", desc: "Learning something new every single day." },
                    { title: "Problem Solver", desc: "Approaching challenges with a solution-oriented mindset." }
                  ].map((val, i) => (
                    <li key={i} className="group">
                      <h4 className="text-[#D4AF37] font-bold flex items-center gap-2">
                        <Heart className="w-4 h-4 text-[#D4AF37] opacity-40 group-hover:opacity-100 transition-opacity" />
                        {val.title}
                      </h4>
                      <p className="text-[#F9F6EE]/70 text-sm mt-1">{val.desc}</p>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
