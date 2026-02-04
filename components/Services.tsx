import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { title: 'Turn-key Event Solution', description: 'วางแผน ออกแบบ ผลิต และบริหารครบวงจร' },
  { title: 'Event Technology Integration', description: 'ระบบลงทะเบียน, การจัดการหน้างาน, Data Tracking, AI & Tech Integration' },
  { title: 'Creative & Production', description: 'ออกแบบเวที แสง สี เสียง, Interactive Show, Creative Engineering' },
  { title: 'Public & Corporate Event', description: 'งานรัฐ งานเปิดตัว แถลงข่าว งานมอบรางวัล งานประชุมใหญ่' },
  { title: 'Brand Activation', description: 'อีเวนท์สร้างภาพลักษณ์และ Engagement ผ่าน Scalable & Hybrid Model' },
  { title: 'Digital Event Management', description: 'ระบบจัดการอีเวนท์แบบดิจิทัล Live Streaming และ Hybrid Events' },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-bg-dark">
      <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover opacity-10"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 neon-shadow-text-cyan text-white">995 Events : Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <GlassCard key={idx} className="p-8 h-full flex flex-col justify-center">
              <h3 className="text-xl font-subheading font-semibold text-white mb-4 text-neon-cyan">
                {service.title}
              </h3>
              <p className="text-gray-300 font-body leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
