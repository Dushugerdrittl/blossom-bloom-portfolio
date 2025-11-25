import GlassCard from '@/components/GlassCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Code, Award, Briefcase, GraduationCap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Code,
      value: 8,
      suffix: '+',
      label: 'Technologies Mastered',
      color: 'text-blue-500'
    },
    {
      icon: Briefcase,
      value: 4,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-green-500'
    },
    {
      icon: Award,
      value: 3,
      suffix: '+',
      label: 'Certifications Earned',
      color: 'text-purple-500'
    },
    {
      icon: GraduationCap,
      value: 6,
      suffix: '.50',
      label: 'CGPA Achieved',
      color: 'text-pink-500'
    }
  ];

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <GlassCard 
              key={stat.label}
              hover 
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3 py-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
