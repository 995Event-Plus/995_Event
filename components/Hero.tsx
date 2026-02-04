import React from 'react';
import { GlassCard } from './ui/GlassCard';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/50 to-bg-dark"></div>
      </div>

      <div className="container mx-auto px-6 text-center max-w-7xl relative z-10">
        <GlassCard className="max-w-5xl mx-auto p-8 md:p-16 fade-in-up">
          <h1 className="text-4xl md:text-7xl font-heading font-bold text-white mb-6 neon-shadow-text-cyan">
            995 EVENTS
          </h1>
          <h2 className="text-2xl md:text-4xl font-body font-bold text-gray-300 mb-8">
            ไม่ใช่แค่ผู้จัดงาน แต่คือ <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-shadow-text-cyan">
              "Engine ของประสบการณ์"
            </span>
          </h2>
          <p className="text-lg md:text-xl font-body text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ที่ขับเคลื่อนด้วยมาตรฐานระดับโลก + ความคิดสร้างสรรค์ และเทคโนโลยีอัจฉริยะ
          </p>
          
          <div className="mt-12">
            <a 
              href="#contact" 
              className="promo-magic-button inline-block text-lg px-8 py-4 rounded-full font-bold uppercase tracking-wider"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Impact Project
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
