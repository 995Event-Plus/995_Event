import React from 'react';
import { GlassCard } from './ui/GlassCard';

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative">
       <div className="absolute inset-0 z-0">
        <img src="https://picsum.photos/1920/1080?blur=4" alt="bg" className="w-full h-full object-cover opacity-20" />
         <div className="absolute inset-0 bg-bg-dark/90"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-white neon-shadow-text-cyan">Why choose us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Opportunity Cost */}
          <GlassCard className="p-8 h-full flex flex-col border-pink-500/30">
            <h3 className="text-2xl font-subheading font-semibold text-white mb-4 neon-shadow-text-magenta text-center">
              The Opportunity Cost
            </h3>
            <p className="text-gray-300 mb-6 font-body text-center">
              อีเวนท์ยุคเก่ากำลังทำให้คุณพลาดอะไรไป?
            </p>
            
            <div className="flex-1 p-6 bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-xl border border-pink-500/30 backdrop-blur-sm">
              <h4 className="text-lg font-subheading font-semibold text-pink-300 mb-4 text-center">
                ความเสี่ยง & ปัญหาของการจัดงานอีเวนท์
              </h4>
              <p className="text-gray-300 text-sm font-body leading-relaxed mb-6 text-center">
                อีเวนท์แบบเดิมที่แค่จัดงานแล้วจบไป กำลังทำให้แบรนด์ของคุณสูญเสียโอกาสสำคัญ เพราะขาดเทคโนโลยี
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'ROI ต่ำ', sub: 'ไม่มีการวัดผล' },
                  { title: 'ขาด Impact', sub: 'ไม่มีความจดจำ' },
                  { title: 'เสียโอกาส', sub: 'ไม่มี Data' },
                  { title: 'งบประมาณ', sub: 'ไม่คุ้มค่า' }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-b from-pink-800/50 to-purple-800/50 p-3 rounded-lg border border-pink-400/25 text-center">
                    <div className="text-pink-300 text-sm font-subheading font-bold mb-1">{item.title}</div>
                    <div className="text-gray-400 text-xs font-body">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
          
          {/* 995 Solution */}
          <GlassCard className="p-8 h-full flex flex-col border-cyan-500/30">
            <h3 className="text-2xl font-subheading font-semibold text-white mb-4 neon-shadow-text-cyan text-center">
              995 EVENTS Solution
            </h3>
            <p className="text-gray-300 mb-6 font-body text-center">
              เราสร้างอีเวนท์แบบยืดหยุ่นเพื่อผลลัพธ์ที่ยั่งยืน
            </p>
            
            <div className="flex-1 p-6 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
              <h4 className="text-lg font-subheading font-semibold text-cyan-300 mb-4 text-center">
                เทคโนโลยี + ความคิดสร้างสรรค์
              </h4>
              <p className="text-gray-300 text-sm font-body leading-relaxed mb-6 text-center">
                ระบบวัดผลแบบเรียลไทม์ และการสร้างประสบการณ์ที่จดจำได้
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'ROI วัดได้', sub: 'Real-time Analytics' },
                  { title: 'High Impact', sub: 'Memorable Experience' },
                  { title: 'Data Driven', sub: 'Future Strategy' },
                  { title: 'คุ้มค่า', sub: 'Long-term Value' }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-b from-cyan-800/50 to-blue-800/50 p-3 rounded-lg border border-cyan-400/25 text-center">
                    <div className="text-cyan-300 text-sm font-subheading font-bold mb-1">{item.title}</div>
                    <div className="text-gray-400 text-xs font-body">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
