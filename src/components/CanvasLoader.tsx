import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Simple spinning ring using Tailwind */}
        <div className="w-16 h-16 border-4 border-[#FFCC00]/20 border-t-[#FFCC00] rounded-full animate-spin" />
        
        <div className="text-center">
          <p 
            className="text-2xl font-bold tracking-widest uppercase"
            style={{ 
              color: '#FFCC00',
              textShadow: '0 0 10px rgba(255, 204, 0, 0.6), 0 0 20px rgba(255, 204, 0, 0.4)'
            }}
          >
            Summoning Dragon...
          </p>
          <span 
            className="text-4xl font-black mt-2 block"
            style={{ 
              color: '#FFCC00',
              textShadow: '0 0 15px rgba(255, 204, 0, 0.8)'
            }}
          >
            {progress.toFixed(0)}%
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-[#FFCC00]/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FFCC00] transition-all duration-300 ease-out"
            style={{ width: `${progress}%`, boxShadow: '0 0 10px #FFCC00' }}
          />
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
