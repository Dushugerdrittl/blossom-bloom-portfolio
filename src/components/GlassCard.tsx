import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const GlassCard = ({ children, className, hover = true, style }: GlassCardProps) => {
  return (
    <div
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
    </div>
  );
};

export default GlassCard;
