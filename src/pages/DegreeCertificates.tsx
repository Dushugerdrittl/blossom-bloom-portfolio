import { useNavigate } from 'react-router-dom';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cherryBlossomBg from '@/assets/cherry-blossom-bg.jpg';
import BlossomPetals from '@/components/BlossomPetals';

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
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cherryBlossomBg})` }}
      />
      
      {/* Floating Cherry Blossom Petals */}
      <BlossomPetals />

      {/* Header Controls */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-primary">Degree Certificates</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleDownloadAll} className="gap-2">
                <Download className="w-4 h-4" />
                Download All
              </Button>
              <Button variant="outline" size="sm" onClick={handleClose} className="gap-2">
                <X className="w-4 h-4" />
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Display */}
      <div className="relative z-10 pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-lg font-semibold text-primary mb-4">{cert.title}</h3>
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DegreeCertificates;
