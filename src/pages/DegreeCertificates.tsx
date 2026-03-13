import { useNavigate } from 'react-router-dom';
import { X, Download, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';

const DegreeCertificates = () => {
  const navigate = useNavigate();
  
  const certificates = [
    { src: '/certificates/degree-1.jpg', title: 'Degree Certificate' },
    { src: '/certificates/degree-2.jpg', title: 'PC Degree Certificate' },
    { src: '/certificates/degree-3.jpg', title: 'CM Degree Certificate' },
    { src: '/certificates/degree-4.jpg', title: 'Study Certificate' },
    { src: '/certificates/degree-5.jpg', title: 'CC Degree Certificate' }
  ];

  const handleClose = () => {
    navigate('/');
  };

  const handleDownloadAll = () => {
    certificates.forEach((cert, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = cert.src;
        link.download = `${cert.title.replace(/\s+/g, '_')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500);
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F9F6EE] relative overflow-x-hidden pt-24 pb-12">
      {/* Universal Luxury UI Border handled by App.tsx */}

      {/* Header Controls */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#D4AF37] w-6 h-6" />
              <h1 className="text-xl font-black tracking-widest uppercase text-[#D4AF37]">Academic Credentials</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleDownloadAll} 
                className="rounded-full border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Archive All
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleClose} 
                className="rounded-full border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                <X className="w-4 h-4 mr-2" />
                Return
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Display */}
      <div className="relative z-10 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {certificates.map((cert, index) => (
            <GlassCard key={index} className="animate-fade-in-up overflow-hidden p-0 border-[#D4AF37]/10" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6 border-b border-[#D4AF37]/10 flex items-center justify-between bg-[#D4AF37]/5">
                <h3 className="text-lg font-bold text-[#D4AF37] tracking-wide">{cert.title}</h3>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F9F6EE]/40">Official Document</span>
              </div>
              <div className="p-4 md:p-8 bg-black/20">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-auto rounded shadow-2xl border border-white/5"
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DegreeCertificates;
