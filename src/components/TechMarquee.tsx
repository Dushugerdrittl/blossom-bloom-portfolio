import { motion } from 'framer-motion';

const techs = [
  "React", "TypeScript", "Node.js", "Python", "TensorFlow", 
  "Full Stack", "AI / ML", "Three.js", "Tailwind CSS", "Java", 
  "Dart", "Flutter", "PostgreSQL", "Next.js", "Vite"
];

const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-12 relative">
      {/* Gradient Fades for edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      
      <motion.div 
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30, 
          ease: "linear" 
        }}
      >
        {/* Doubled list for seamless looping */}
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-tighter hover:text-[#D4AF37] transition-colors duration-500 cursor-default">
              {tech}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
