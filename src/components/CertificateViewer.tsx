import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { X, Download, ZoomIn, ZoomOut, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';

const CertificateViewer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(100);
  
  const certificatePath = searchParams.get('cert');
  const title = searchParams.get('title') || 'Certificate';
  const isPdf = certificatePath?.toLowerCase().endsWith('.pdf');

  useEffect(() => {
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
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-[#F9F6EE]">
        <p className="opacity-50 tracking-widest uppercase text-sm">Document not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Header Controls */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="text-[#D4AF37] w-5 h-5" />
              <h1 className="text-lg font-bold text-[#D4AF37] truncate max-w-[200px] md:max-w-md uppercase tracking-tight">{title}</h1>
            </div>
            <div className="flex items-center gap-2">
              {!isPdf && (
                <div className="hidden md:flex items-center gap-2 mr-4 border-r border-white/10 pr-4">
                  <Button variant="ghost" size="icon" onClick={handleZoomOut} className="text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-full">
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="text-[10px] font-mono text-[#F9F6EE]/60 min-w-[40px] text-center">
                    {zoom}%
                  </span>
                  <Button variant="ghost" size="icon" onClick={handleZoomIn} className="text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-full">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleDownload} 
                className="rounded-full border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all h-9"
              >
                <Download className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline text-[10px] font-bold uppercase tracking-widest">Download</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleClose} 
                className="rounded-full border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all h-9"
              >
                <X className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline text-[10px] font-bold uppercase tracking-widest">Exit</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Display */}
      <div className="relative z-10 pt-24 pb-8 px-4 min-h-screen flex items-center justify-center bg-black/40">
        <div className="max-w-5xl w-full">
          <GlassCard className="p-2 md:p-4 border-[#D4AF37]/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="overflow-auto scrollbar-hide" style={{ maxHeight: 'calc(100vh - 180px)' }}>
              {isPdf ? (
                <embed
                  src={certificatePath}
                  type="application/pdf"
                  width="100%"
                  height="750px"
                  className="rounded-lg shadow-inner"
                />
              ) : (
                <div className="flex justify-center">
                  <img
                    src={certificatePath}
                    alt={title}
                    className="max-w-full h-auto rounded shadow-2xl transition-transform duration-500 ease-out"
                    style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center top' }}
                  />
                </div>
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
