import GlassCard from '@/components/GlassCard';
import { Github, Star, GitFork, Code2 } from 'lucide-react';

const GitHubStats = () => {
  const githubUsername = 'Dushugerdrittl';

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            GitHub Activity 🚀
          </h2>
          <p className="text-muted-foreground">
            Building, learning, and sharing code
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GlassCard hover className="animate-scale-in">
            <div className="space-y-6">
              {/* GitHub Profile Link */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">@{githubUsername}</h3>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
                <a 
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                >
                  Follow on GitHub
                </a>
              </div>

              {/* GitHub Stats Images */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden bg-white/30 p-2">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=graywhite&hide_border=true&bg_color=ffffff00&title_color=ec4899&icon_color=ec4899&text_color=6b7280`}
                    alt="GitHub Stats"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden bg-white/30 p-2">
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=graywhite&hide_border=true&bg_color=ffffff00&title_color=ec4899&text_color=6b7280`}
                    alt="Top Languages"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* GitHub Streak */}
              <div className="rounded-lg overflow-hidden bg-white/30 p-2">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&hide_border=true&ring=ec4899&fire=ec4899&currStreakLabel=ec4899`}
                  alt="GitHub Streak"
                  className="w-full h-auto"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">Clean Code</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    <Star className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">Quality Projects</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    <GitFork className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">Open Source</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
