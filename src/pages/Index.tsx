import BlossomPetals from '@/components/BlossomPetals';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import cherryBlossomBg from '@/assets/cherry-blossom-bg.jpg';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Progress Bar */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div 
        className="fixed inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cherryBlossomBg})` }}
      />
      
      {/* Floating Cherry Blossom Petals */}
      <BlossomPetals />
      
      {/* Main Content */}
      <div className="relative z-10 pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-muted-foreground bg-background/80 backdrop-blur-sm">
        <p>&copy; 2024 Nithin Sai Koushik Kancharla. Built with React & Cherry Blossom Dreams 🌸</p>
      </footer>

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
};

export default Index;
