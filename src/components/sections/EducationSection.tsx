import GlassCard from '@/components/GlassCard';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science & Business Systems',
      institution: 'SRKR EC, JNTUK University',
      period: '2021 - 2025',
      status: 'Current',
      coursework: [
        'Software Development',
        'Data Structures', 
        'Algorithm Design',
        'AI & Machine Learning',
        'Data Science'
      ],
      project: 'Developed an AI-based model for enhancing system efficiency through optimized algorithms.'
    },
    {
      degree: 'Board of Intermediate Education',
      institution: 'Vijaya Junior College',
      period: '2019 - 2021',
      status: 'Completed',
      coursework: [
        'Intermediate Mathematics',
        'Physics',
        'Chemistry'
      ]
    },
    {
      degree: 'Board of Secondary Education',
      institution: 'SMKZPHS Movva',
      period: '2018 - 2019',
      status: 'Completed',
      coursework: []
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Education & Qualifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and continuous learning in technology and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <GlassCard 
              key={edu.degree}
              hover 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        {edu.institution}
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <Badge 
                        variant={edu.status === 'Current' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>

                  {edu.coursework.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <BookOpen className="w-4 h-4" />
                        Notable Coursework:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.project && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <Award className="w-4 h-4" />
                        Academic Project:
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {edu.project}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <GlassCard className="max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Award className="w-6 h-6" />
                <h3 className="text-xl font-semibold">UGC-DEB Recognition</h3>
              </div>
              <p className="text-muted-foreground">
                Currently pursuing UGC-DEB recognized M.Sc CS degree, demonstrating commitment to 
                advanced learning and staying current with evolving technology trends.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;