import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
  delay?: number;
}

const GlassCard = ({ children, className, hover = true, style, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className={cn(
        // Universal Card Styling
        "w-full bg-black/30 backdrop-blur-md border border-[#D4AF37]/30 rounded-xl p-6",
        // Universal Golden Glow & Hover
        "shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300",
        hover && "hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:scale-[1.01] hover:border-[#D4AF37]/50",
        className
      )}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
