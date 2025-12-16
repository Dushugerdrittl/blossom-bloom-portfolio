import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { X, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cherryBlossomBg from '@/assets/cherry-blossom-bg.jpg';
import BlossomPetals from '@/components/BlossomPetals';

const CertificateViewer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(100);
  
  const certificatePath = searchParams.get('cert');
  const title = searchParams.get('title') || 'Certificate';
  const isPdf = certificatePath?.toLowerCase().endsWith('.pdf');

  useEffect(() => {
    // Prevent scroll on body when viewer is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    navigate('/');
  };

  const handleDownload = () => {
    if (certificatePath) {
      const link = document.createElement('a');
      link.href = certificatePath;
      const extension = certificatePath.split('.').pop() || 'jpg';
      link.download = `${title.replace(/\s+/g, '_')}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 20, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 20, 60));
  };

  if (!certificatePath) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <p className="text-muted-foreground">No certificate found</p>
      </div>
    );
  }

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
            <h1 className="text-xl font-semibold text-primary">{title}</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleZoomOut} className="gap-2">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground min-w-[60px] text-center">
                {zoom}%
              </span>
              <Button variant="outline" size="sm" onClick={handleZoomIn} className="gap-2">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload} className="gap-2">
                <Download className="w-4 h-4" />
                Download
              </Button>
              <Button variant="outline" size="sm" onClick={handleClose} className="gap-2">
                <X className="w-4 h-4" />
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Display */}
      <div className="relative z-10 pt-24 pb-8 px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-8">
            <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {isPdf ? (
                <embed
                  src={certificatePath}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  className="rounded-lg"
                />
              ) : (
                <img
                  src={certificatePath}
                  alt={title}
                  className="w-full h-auto rounded-lg transition-transform duration-300"
                  style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center top' }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
