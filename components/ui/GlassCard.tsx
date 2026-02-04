import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`glass-card ${className} ${!hoverEffect ? 'hover:transform-none hover:box-shadow-none' : ''}`}>
      {children}
    </div>
  );
};
