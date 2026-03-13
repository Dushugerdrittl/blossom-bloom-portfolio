import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import DragonHero from '@/components/DragonHero';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-transparent selection:bg-[#D4AF37] selection:text-black">
      {/* Progress Bar */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* 3D Dragon Hero Background */}
      <div className="fixed inset-0 z-0">
        <DragonHero />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 pt-16 pointer-events-none min-h-screen">
        <div className="pointer-events-auto">
          <HeroSection />
        </div>
        
        {/* Sections with shared Glassmorphism feel */}
        <div className="pointer-events-auto space-y-24 pb-24 px-4 sm:px-8 max-w-7xl mx-auto">
          <AboutSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-12 text-center text-[#D4AF37]/80 bg-black/60 backdrop-blur-xl border-t border-[#D4AF37]/20">
        <p className="tracking-widest uppercase text-sm font-medium">
          &copy; 2025 Nithin Sai Koushik Kancharla. Crafted in Obsidian & Gold.
        </p>
      </footer>

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
};

export default Index;
