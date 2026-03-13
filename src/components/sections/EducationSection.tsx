import GlassCard from '@/components/GlassCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, FileText } from 'lucide-react';

const EducationSection = () => {
  const edu = {
    degree: 'Bachelor of Computer Science & Business Systems',
    institution: 'SRKR EC, JNTUK University',
    period: '2021 - 2025',
    status: 'Completed',
    coursework: [
      'Software Development',
      'Data Structures', 
      'Algorithm Design',
      'AI & Machine Learning',
      'Data Science'
    ],
    project: 'Developed an AI-based model for enhancing system efficiency through optimized algorithms.'
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black text-[#D4AF37] mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] uppercase">
            Education
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6 opacity-50"></div>
          <p className="text-xl text-[#F9F6EE]/80 max-w-2xl mx-auto font-light italic">
            Academic foundation in Computer Science and Business Innovation
          </p>
        </div>

        <div className="flex justify-center">
          <GlassCard 
            hover 
            className="max-w-4xl w-full animate-scale-in border-[#D4AF37]/30"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 flex justify-center md:block">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#4A1504] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <GraduationCap className="w-10 h-10 text-black" />
                </div>
              </div>

              <div className="flex-grow space-y-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-[#F9F6EE] text-lg font-medium">
                      <MapPin className="w-5 h-5 text-[#D4AF37]" />
                      {edu.institution}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-3">
                    <div className="flex items-center gap-2 text-[#F9F6EE]/70 font-mono">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      {edu.period}
                    </div>
                    <Badge 
                      variant="outline"
                      className="border-[#D4AF37] text-[#D4AF37] px-4 py-1 uppercase tracking-widest text-[10px]"
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#D4AF37]/10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                      <BookOpen className="w-4 h-4" />
                      Specializations
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="outline" className="border-[#F9F6EE]/20 text-[#F9F6EE]/80 bg-[#F9F6EE]/5">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                      <Award className="w-4 h-4" />
                      Core Project
                    </div>
                    <p className="text-[#F9F6EE]/70 text-sm leading-relaxed italic">
                      "{edu.project}"
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <a href="/degree-certificates" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full px-6 group">
                      <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      View Academic Credentials
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
