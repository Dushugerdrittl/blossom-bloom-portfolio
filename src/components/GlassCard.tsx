import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const GlassCard = ({ children, className, hover = false, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative backdrop-blur-glass border border-white/20 rounded-2xl p-8",
        "bg-gradient-card shadow-glass",
        hover && "transition-all duration-300 hover:shadow-blossom hover:scale-105",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;